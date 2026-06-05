import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
const failed = [];
page.on('requestfailed', r => { if (/\.(webp|png|jpe?g|svg|avif)$/i.test(r.url())) failed.push(r.url()); });
page.on('response', r => { if (r.status() >= 400 && /\.(webp|png|jpe?g|svg|avif)$/i.test(r.url())) failed.push(r.status() + ' ' + r.url()); });
await page.goto('http://localhost:4321/?cb=imgcheck', { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(async () => { const h=document.body.scrollHeight; for(let y=0;y<=h;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,40));} });
await page.waitForTimeout(800);
const broken = await page.evaluate(() => [...document.querySelectorAll('img')]
  .filter(i => !i.complete || i.naturalWidth === 0)
  .map(i => ({ src: i.getAttribute('src'), alt: (i.alt||'').slice(0,30) })));
console.log('BROKEN IMGS (naturalWidth=0):', JSON.stringify(broken, null, 2));
console.log('FAILED REQUESTS:', JSON.stringify([...new Set(failed)], null, 2));
const total = await page.evaluate(() => document.querySelectorAll('img').length);
console.log('total imgs:', total);
await b.close();
