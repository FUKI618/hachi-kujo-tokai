import { chromium } from 'playwright';
const OUT = '/Users/fuki/Code/LP作成/蜂';
const b = await chromium.launch();
async function shot(name, width, sel) {
  const ctx = await b.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    const s = document.createElement('style');
    s.textContent = '*{animation:none!important;transition:none!important;scroll-behavior:auto!important}';
    document.documentElement.appendChild(s);
  });
  await page.goto('http://localhost:4321/?cb=' + name, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(() => document.querySelectorAll('video').forEach(v => { try { v.pause(); } catch (e) {} }));
  // force reveal elements visible
  await page.evaluate(() => document.querySelectorAll('.reveal, .reveal-stagger, [class*="reveal"]').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; }));
  await page.waitForTimeout(500);
  const el = await page.$(sel);
  if (el) await el.screenshot({ path: `${OUT}/${name}.jpeg`, type: 'jpeg', quality: 90, timeout: 60000 });
  else await page.screenshot({ path: `${OUT}/${name}.jpeg`, type: 'jpeg', quality: 90, timeout: 60000 });
  await ctx.close();
  console.log('saved', name);
}
await shot('v2-hero-m', 390, '.rhero');
await shot('v2-hero-d', 1280, '.rhero');
await b.close();
