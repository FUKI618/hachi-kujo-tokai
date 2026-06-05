import { chromium } from 'playwright';

const OUT = '/Users/fuki/Code/LP作成/蜂/.playwright-mcp';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

// kill animations/video to avoid hangs
await page.addInitScript(() => {
  const s = document.createElement('style');
  s.textContent = '*{animation:none!important;transition:none!important;scroll-behavior:auto!important}';
  document.documentElement.appendChild(s);
});

// ---- Shot 1: hero top (D-4 note) ----
await page.goto('http://localhost:4321/?cb=v2', { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(() => document.querySelectorAll('video').forEach(v => { try { v.pause(); } catch (e) {} }));
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/shot_d4_hero.png`, timeout: 60000 });

// Report D-4 note geometry + text
const d4 = await page.evaluate(() => {
  const note = document.querySelector('.hero-stat-note');
  const label = note ? note.closest('.hero-stat-label') : null;
  const r = note ? note.getBoundingClientRect() : null;
  const lr = label ? label.getBoundingClientRect() : null;
  return {
    noteText: note ? note.textContent.trim() : null,
    noteRect: r ? { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) } : null,
    labelText: label ? label.textContent.trim() : null,
    labelRect: lr ? { x: Math.round(lr.x), y: Math.round(lr.y), w: Math.round(lr.width), h: Math.round(lr.height) } : null,
    // overflow check: does note extend past label's right edge?
    overflowRight: (r && lr) ? Math.round(r.right - lr.right) : null,
    viewportW: window.innerWidth,
  };
});

// ---- Shot 2: price -> scam-warning boundary ----
await page.goto('http://localhost:4321/?cb=v1', { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(() => document.querySelectorAll('video').forEach(v => { try { v.pause(); } catch (e) {} }));
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible', 'visible', 'in-view', 'revealed'));
});
await page.waitForTimeout(500);
// position scam-warning heading ~150px from top so the price section tail is also visible
await page.evaluate(() => {
  const s = document.getElementById('scam-warning');
  s.scrollIntoView({ block: 'start' });
  window.scrollBy(0, -160);
});
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/shot_d5_boundary.png`, timeout: 60000 });

// Report runtime DOM order
const d5 = await page.evaluate(() => {
  const ids = ['price', 'scam-warning', 'vs-government', 'compare', 'cases'];
  return ids.map(id => {
    const e = document.getElementById(id);
    return { id, absTop: e ? Math.round(e.getBoundingClientRect().top + window.scrollY) : null };
  });
});

console.log(JSON.stringify({ d4, d5, midCta: true }, null, 2));
await b.close();
