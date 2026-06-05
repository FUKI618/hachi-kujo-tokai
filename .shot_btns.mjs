import { chromium } from 'playwright';
const OUT = '/Users/fuki/Code/LP作成/蜂';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/?cb=btn', { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(async () => { const h = document.body.scrollHeight; for (let y=0;y<=h;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,30));} window.scrollTo(0,0); });
await page.addStyleTag({ content: '*{animation:none!important;transition:none!important} .floating-cta{display:none!important} .reveal,.reveal-stagger,.reveal>*,.reveal-stagger>*{opacity:1!important;transform:none!important;filter:none!important}' });
await page.waitForTimeout(400);
for (const [name, sel] of [['btn-mid','.mid-cta-inner'],['btn-contact','.contact-phone-card'],['btn-urgency','.urgency-inner']]) {
  const el = await page.$(sel);
  if (el) { await el.screenshot({ path: `${OUT}/${name}.jpeg`, type: 'jpeg', quality: 90, timeout: 60000 }); console.log('saved', name); }
  else console.log('NOT FOUND', sel);
}
await b.close();
