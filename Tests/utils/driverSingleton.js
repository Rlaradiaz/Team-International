
// tests/utils/driverSingleton.js
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driverInstance;

const createDriver = async () => {
  const options = new chrome.Options();
  options.addArguments('--start-maximized');

  driverInstance = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  return driverInstance;
};

const getDriver = () => {
  return driverInstance;
};

const quitDriver = async () => {
  if (driverInstance) {
    await driverInstance.quit();
    driverInstance = null; 
  }
};


module.exports = { createDriver, getDriver, quitDriver };