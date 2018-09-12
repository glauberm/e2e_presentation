const {Builder, By} = require('selenium-webdriver');
const chai = require('chai');

(async function testeBasico() {
  let driverChrome = await new Builder().forBrowser('chrome').build();
  // let driverFirefox = await new Builder().forBrowser('firefox').build();
  let driverSafari = await new Builder().forBrowser('safari').build();
  const baseUrl = 'http://localhost:8080';

  await run(driverChrome);
  await run(driverSafari);
  
  async function run(driver) {
    try {
      // Visita o index
      await driver.get(baseUrl);
      // Checa se o element `.p-xs` contêm o texto passado
      await chai.assert.equal(
        await driver.findElement(By.className('p-xs')).then(async function(el) {
          return await el.getText();
        }),
        'Duis ullamco labore non ut et.'
      );
    }
    
    finally {
      await driver.quit();
    }
  }
})();