import { chromium } from 'playwright';
const OUT = '/Users/fuki/Code/LP作成/蜂/.playwright-mcp';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.addInitScript(() => {
  const s = document.createElement('style');
  s.textContent = '*{animation:none!important;transition:none!important;scroll-behavior:auto!important}';
  document.documentElement.appendChild(s);
});
await page.goto('http://localhost:4321/?cb=b1', { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(() => document.querySelectorAll('video').forEach(v => { try { v.pause(); } catch (e) {} }));
await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible','visible','in-view','revealed')));
await page.waitForTimeout(600);

// scroll so the scam-warning section TOP sits ~260px down -> shows tail of price table above it
const y = await page.evaluate(() => {
  const s = document.getElementById('scam-warning');
  const top = s.getBoundingClientRect().top + window.scrollY;
  const target = top - 300;
  window.scrollTo(0, target);
  return Math.round(window.scrollY);
});
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/shot_d5_boundary2.png`, timeout: 60000 });

// also capture what's the section immediately before scam-warning in DOM
const info = await page.evaluate(() => {
  const s = document.getElementById('scam-warning');
  // previous section sibling
  let prev = s.previousElementSibling;
  while (prev && prev.tagName !== 'SECTION' && prev.tagName !== 'DIV') prev = prev.previousElementSibling;
  const price = document.getElementById('price');
  return {
    scrollY: Math.round(window.scrollY),
    prevTag: prev ? prev.tagName : null,
    prevId: prev ? (prev.id || null) : null,
    prevClass: prev ? prev.className : null,
    priceIsBefore: price ? (price.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING) > 0 : null,
    scamHeading: (s.querySelector('h2,h3') || {}).textContent || null,
  };
});
console.log(JSON.stringify(info, null, 2));
await b.close();
