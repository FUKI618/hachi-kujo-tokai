import { chromium } from 'playwright';
const OUT = '/Users/fuki/Code/LP作成/蜂';
const b = await chromium.launch();
async function full(name, width) {
  const ctx = await b.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4321/?cb=' + name, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 35)); }
    window.scrollTo(0, 0);
  });
  await page.addStyleTag({ content: '*{animation:none!important;transition:none!important} .floating-cta{display:none!important} .reveal,.reveal-stagger,.reveal>*,.reveal-stagger>*{opacity:1!important;transform:none!important;filter:none!important}' });
  await page.evaluate(() => document.querySelectorAll('video').forEach(v => { try { v.pause(); } catch (e) {} }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/${name}.jpeg`, type: 'jpeg', quality: 72, fullPage: true, timeout: 120000 });
  await ctx.close();
  console.log('saved', name);
}
await full('v2-full-m', 390);
await full('v2-full-d', 1280);
await b.close();
