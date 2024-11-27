
// tests/steps/hero.steps.js
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { getDriver, createDriver, quitDriver } = require('../utils/driverSingleton'); 
const HeroPage = require('../Pages/HeroPage');

let heroPage;

Given('I am on Team', { timeout: 60000 }, async function () {
  const driver = await createDriver(); 
  await driver.get('https://www.teaminternational.com/');
  heroPage = new HeroPage(driver); 
});

When('I check the Hero section', { timeout: 60000 }, async function () {
  await heroPage.waitForHeroSection();
});

Then('the Hero section video should be visible', async function () {
  const videoElement = await heroPage.getHeroVideo();
  const isVisible = await videoElement.isDisplayed();
  if (!isVisible) {
    throw new Error('The Hero section video is not visible');
  }
});

Then('the Hero section should have the correct title', async function () {
  const titleText = await heroPage.getHeroHeadingText();
  const cleanedTitleText = titleText.replace(/\s+/g, ' ').trim();

  if (cleanedTitleText !== 'TEAM International: Your trusted digital transformation partner') {
    throw new Error(`Expected title text to be "TEAM International: Your trusted digital transformation partner", but got "${cleanedTitleText}"`);
  }
});

Then('the Hero section should have the correct subtitle', async function () {
  const subtitleText = await heroPage.getHeroSubHeadingText();
  const cleanedSubtitleText = subtitleText.replace(/\s+/g, ' ').trim();

  if (cleanedSubtitleText !== 'Driving your business growth with exceptional speed and exceptional quality, at competitive pricing.') {
    throw new Error(`Expected subtitle text to be "Driving your business growth with exceptional speed and exceptional quality, at competitive pricing.", but got "${cleanedSubtitleText}"`);
  }
});

Then('I click on the "tell me more" button', async function () {
  await heroPage.clickTellMeMoreButton();
});

Then('I should be redirected to the contact section', async function () {
  const driver = getDriver(); 
  const currentUrl = await driver.getCurrentUrl();
  if (!currentUrl.includes('#contact')) {
    throw new Error(`Expected URL to include '#contact', but got ${currentUrl}`);
  }
});

