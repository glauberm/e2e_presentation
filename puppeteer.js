const puppeteer = require('puppeteer');
const chai = require('chai');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox',
    '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Visita o index
  await page.goto('http://localhost:8080');
  // Checa se o element `.p-xs` contêm o texto passado
  await chai.assert.equal(
    await page.$eval('.p-xs', (p) => p.innerText ),
    'Duis ullamco labore non ut et.'
  );

  await browser.close();
})();