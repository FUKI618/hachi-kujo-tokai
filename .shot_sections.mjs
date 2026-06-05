import { chromium } from 'playwright';
const OUT = '/Users/fuki/Code/LP作成/蜂';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/?cb=sec2', { waitUntil: 'networkidle', timeout: 60000 });
// trigger all IntersectionObservers by scrolling through the page
await page.evaluate(async () => {
  const h = document.body.scrollHeight;
  for (let y = 0; y <= h; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); }
  window.scrollTo(0, 0);
});
// now freeze animations and force any leftover reveals visible
await page.addStyleTag({ content: '*{animation:none!important;transition:none!important;scroll-behavior:auto!important} .reveal,.reveal-stagger,.reveal>*,.reveal-stagger>*{opacity:1!important;transform:none!important;filter:none!important}' });
await page.evaluate(() => {
  document.querySelectorAll('video').forEach(v => { try { v.pause(); } catch (e) {} });
  document.querySelectorAll('.faq-item').forEach((el, i) => { if (i < 2) el.classList.add('is-open'); });
});
await page.waitForTimeout(400);
const targets = [
  ['sec-trust','.trust-strip'],['sec-bee','#bee-types'],['sec-scam','#scam-warning'],['sec-compare','#compare'],['sec-voices','#voices'],['sec-contact','#contact'],
  ['sec-price', '#price'],
  ['sec-midcta', '.mid-cta'],
  ['sec-cases', '#cases'],
  ['sec-flow', '#flow'],
  ['sec-area', '#area'],
  ['sec-faq', '#faq'],
];
for (const [name, sel] of targets) {
  const el = await page.$(sel);
  if (el) { await el.screenshot({ path: `${OUT}/${name}.jpeg`, type: 'jpeg', quality: 88, timeout: 60000 }); console.log('saved', name); }
  else console.log('NOT FOUND', sel);
}
await b.close();
