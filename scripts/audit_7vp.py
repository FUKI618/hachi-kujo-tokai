"""
7-Viewport Mobile Audit
- Capture full page + MidCTA region for each viewport
- Measure overflow / wrap / flyOut / brokenImg per skill spec
"""
import json
import sys
import time
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else "https://hachi-factory.jp/"
OUT_DIR = Path(sys.argv[2] if len(sys.argv) > 2 else "screenshots/audit-v1")
OUT_DIR.mkdir(parents=True, exist_ok=True)

CACHE_BUST = URL + ("&" if "?" in URL else "?") + "audit=" + time.strftime("%H%M%S")

SIZES = [
    ("iPhoneSE-320",       320, 568),
    ("iPhone13mini-375",   375, 812),
    ("iPhone14-390",       390, 844),
    ("iPhone14Plus-414",   414, 896),
    ("iPhone14ProMax-430", 430, 932),
    ("iPad-768",           768, 1024),
    ("Desktop-1440",      1440, 900),
]

MEASURE_JS = r"""
() => {
  const W = window.innerWidth;
  const html = document.documentElement;
  const overflowX = html.scrollWidth - html.clientWidth;

  const overflowers = [];
  document.querySelectorAll('*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width > W + 1 || r.right > W + 1) {
      overflowers.push({
        sel: el.tagName.toLowerCase() + '.' + (el.className || '').toString().slice(0, 80),
        width: Math.round(r.width),
        right: Math.round(r.right),
      });
    }
  });

  const wraps = [];
  document.querySelectorAll('h1,h2,h3,h4,p,th,td,li,span,a,small,strong,button').forEach(el => {
    if (!el.offsetParent) return;
    const cs = getComputedStyle(el);
    const lh = parseFloat(cs.lineHeight);
    const fs = parseFloat(cs.fontSize);
    const line = isNaN(lh) ? fs * 1.5 : lh;
    const rows = Math.round(el.getBoundingClientRect().height / line);
    const text = (el.textContent || '').trim().slice(0, 60);
    if (rows >= 3 && text.length > 0 && text.length < 80) {
      wraps.push({ sel: el.tagName.toLowerCase() + '.' + (el.className || '').toString().slice(0,40), rows, text });
    }
  });

  const flyOuts = [];
  document.querySelectorAll('button, .btn, [class*="badge"], [class*="-num"], [class*="label"]').forEach(el => {
    const parent = el.parentElement;
    if (!parent) return;
    const er = el.getBoundingClientRect();
    const pr = parent.getBoundingClientRect();
    if (er.top < pr.top - 1 || er.bottom > pr.bottom + 1 ||
        er.left < pr.left - 1 || er.right > pr.right + 1) {
      flyOuts.push({
        sel: el.tagName.toLowerCase() + '.' + (el.className || '').toString().slice(0,60),
        delta: `top=${Math.round(er.top - pr.top)} bot=${Math.round(er.bottom - pr.bottom)} l=${Math.round(er.left - pr.left)} r=${Math.round(er.right - pr.right)}`,
      });
    }
  });

  const brokenImgs = [];
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) {
      brokenImgs.push({ src: img.src.slice(-80), alt: img.alt });
    }
  });

  // MidCTA bounding box for cropping
  const midCta = document.querySelector('.mid-cta');
  const midRect = midCta ? midCta.getBoundingClientRect() : null;
  const midAbsTop = midCta ? (midRect.top + window.scrollY) : null;
  const midHeight = midCta ? midRect.height : null;

  return { viewport: `${W}px`, overflowX, overflowers, wraps, flyOuts, brokenImgs, midAbsTop, midHeight };
}
"""

results = {}
with sync_playwright() as p:
    browser = p.chromium.launch()
    for label, w, h in SIZES:
        print(f"[{label}] {w}x{h} ...", flush=True)
        ctx = browser.new_context(
            viewport={"width": w, "height": h},
            device_scale_factor=2 if w <= 430 else 1,
            reduced_motion="reduce",
        )
        page = ctx.new_page()
        try:
            page.goto(CACHE_BUST, wait_until="domcontentloaded", timeout=30000)
        except Exception as e:
            print(f"  goto error: {e}", flush=True)
            ctx.close()
            continue
        page.wait_for_timeout(2500)
        page.evaluate("() => document.querySelectorAll('video').forEach(v => v.remove())")
        # reveal を強制可視化（fullpage screenshot 用）
        page.add_style_tag(content=".reveal,.reveal-stagger,.reveal-stagger>*{opacity:1!important;transform:none!important;transition:none!important;}")
        # lazy load trigger
        page.evaluate(
            "() => new Promise(r => { let y=0; const i=setInterval(()=>{ y+=400; window.scrollTo(0,y); if(y>=document.body.scrollHeight){ clearInterval(i); window.scrollTo(0,0); r(); } }, 80); })"
        )
        page.wait_for_timeout(1500)

        page.screenshot(path=str(OUT_DIR / f"{label}-full.png"), full_page=True, timeout=30000)

        report = page.evaluate(MEASURE_JS)
        results[label] = report

        # MidCTA crop
        if report.get("midAbsTop") is not None:
            top = max(0, int(report["midAbsTop"]) - 20)
            hh = int(report["midHeight"]) + 40
            try:
                page.set_viewport_size({"width": w, "height": min(hh + 100, 2000)})
                page.evaluate(f"() => window.scrollTo(0, {top})")
                page.wait_for_timeout(400)
                page.screenshot(
                    path=str(OUT_DIR / f"{label}-midcta.png"),
                    clip={"x": 0, "y": 0, "width": w, "height": min(hh + 80, page.viewport_size["height"])},
                    timeout=20000,
                )
            except Exception as e:
                print(f"  midcta crop error: {e}", flush=True)

        ctx.close()
    browser.close()

with open(OUT_DIR / "audit-report.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print()
print("| viewport | overflowX | overflowers | wrap>=3 | flyOuts | brokenImgs |")
print("|---|---:|---:|---:|---:|---:|")
for label, r in results.items():
    print(f"| {label} | {r['overflowX']} | {len(r['overflowers'])} | {len(r['wraps'])} | {len(r['flyOuts'])} | {len(r['brokenImgs'])} |")
