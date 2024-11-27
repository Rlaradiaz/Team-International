
// tests/steps/navbar.steps.js
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { getDriver, createDriver, quitDriver } = require('../utils/driverSingleton'); 
const NavbarPage = require('../Pages/NavbarPage');

let navbarPage;

Given('I am on the homepage', { timeout: 60000 }, async function () {
  const driver = await createDriver(); 
  await driver.get('https://www.teaminternational.com/');
  
  navbarPage = new NavbarPage(driver); 
  await navbarPage.waitForNavbar();
});

When('I check the navbar links', { timeout: 60000 }, async function () {
  await navbarPage.verifyNavigation();
});

Then('all links should navigate to the correct URLs', function () {  
});

After(async () => {
  try {
    console.log('Attempting to close the WebDriver in Navbar steps...');
    await quitDriver(); 
    console.log('WebDriver closed successfully in Navbar steps');
  } catch (error) {
    console.error('Error closing the WebDriver in Navbar steps:', error);
  }
});