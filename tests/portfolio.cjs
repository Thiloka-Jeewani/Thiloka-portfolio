const { chromium } = require(require('path').resolve('.qa/node_modules/playwright'));
const fs = require('fs');
(async()=>{
 const browser = await chromium.launch({channel:'msedge',headless:true});
 const page = await browser.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 const report=[]; fs.mkdirSync('.qa', {recursive:true});
 for(const width of [320,375,430,768,1024,1440]){
  await page.setViewportSize({width,height:950});await page.goto('http://127.0.0.1:8080');await page.evaluate(()=>document.fonts.ready);
  await page.locator('#contact').scrollIntoViewIfNeeded();await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.evaluate(async()=>{document.querySelectorAll('img').forEach(im=>im.loading='eager');await Promise.all([...document.images].map(im=>im.decode().catch(()=>{})))});
  const result=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,projects:document.querySelectorAll('#projectGrid article').length,brokenImages:[...document.querySelectorAll('img[src]')].filter(i=>!i.naturalWidth).map(i=>i.src),overflow:[...document.querySelectorAll('body *')].filter(n=>{const r=n.getBoundingClientRect();return !n.closest('[aria-hidden="true"]')&&r.width>0&&(r.right>innerWidth+1||r.left< -1)}).map(n=>n.tagName+'.'+n.className).slice(0,20)}));
  if(result.width!==result.scroll||result.brokenImages.length||result.overflow.length||result.projects!==9) throw Error(JSON.stringify(result));
  for(const button of await page.locator('#projectFilters .filter-button').all()){
   await button.click();const selected=await button.textContent();const r=await page.evaluate(c=>({actual:[...document.querySelectorAll('#projectGrid article')].filter(n=>!n.hidden).length,expected:projects.filter(p=>c==='All'||p.categories.includes(c)).length}),selected);if(r.actual!==r.expected)throw Error('Filter failed '+selected);
  }
  await page.getByRole('button',{name:'All',exact:true}).click();
  if(width<=1024){await page.locator('#menuBtn').click();if(await page.locator('#menuBtn').getAttribute('aria-expanded')!=='true')throw Error('Menu did not open');await page.locator('#navLinks a[href="#about"]').click();if(await page.locator('#menuBtn').getAttribute('aria-expanded')!=='false')throw Error('Menu did not close');await page.locator('#menuBtn').click();await page.keyboard.press('Escape');}
  await page.evaluate(()=>{document.activeElement.blur();window.scrollTo({top:0,behavior:'instant'})});await page.waitForTimeout(100);await page.screenshot({path:`.qa/viewport-${width}.png`,fullPage:true});report.push(result);
 }
 await page.emulateMedia({reducedMotion:'reduce'});await page.reload();const role=await page.locator('#typing').textContent();await page.waitForTimeout(3400);if(await page.locator('#typing').textContent()!==role)throw Error('Reduced motion role changed');
 await page.locator('#themeToggle').click();await page.reload();if(await page.locator('html').getAttribute('data-theme')!=='light')throw Error('Theme not saved');await page.locator('#themeToggle').click();
 const downloadPromise=page.waitForEvent('download');await page.locator('a[download]').first().click();const download=await downloadPromise;if(await download.failure())throw Error('Resume failed');
 await page.locator('#projectGrid details summary').first().click();if(!await page.locator('#projectGrid details').first().getAttribute('open').then(v=>v!==null))throw Error('Project details did not open');
 const unique=await page.evaluate(()=>new Set(projects.map(p=>p.github)).size===projects.length);if(!unique)throw Error('Duplicate project repository');
 const localLinks=await page.evaluate(()=>[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(x=>!x.startsWith('http')&&!x.startsWith('mailto:')));
 for(const link of localLinks){if(link.startsWith('#')){if(!await page.locator(link).count())throw Error('Bad anchor '+link);}else{const response=await page.request.get('http://127.0.0.1:8080/'+link);if(!response.ok())throw Error('Bad local link '+link)}}
 fs.writeFileSync('.qa/report.json',JSON.stringify({viewports:report,errors,checks:['all category filters','mobile menu and Escape','resume download','local image and anchor links','theme persistence','reduced motion']},null,2));
 console.log(JSON.stringify({report,errors},null,2));await browser.close();if(errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});


