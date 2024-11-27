const { By, until } = require('selenium-webdriver');

class HeroPage {
  constructor(driver) {
    this.driver = driver; 
  }

  get heroVideo() {
    return By.id('home-hero-video'); 
  }

  get heroHeading() {
    return By.css('h1.font-anybody.text-title-xl'); 
  }

  get heroSubHeading() {
    return By.css('h2.font-anybody.text-body-line'); 
  }

  get tellMeMoreButton() {
    return By.xpath('//button[text()="tell me more"]'); 
  }

  async waitForHeroSection() {
    try {
      console.log('Waiting for Hero section elements...');
      
      await this.driver.wait(until.elementLocated(this.heroVideo), 20000);
      console.log('Video located');
      await this.driver.wait(until.elementLocated(this.heroHeading), 20000);
      console.log('Heading located');
      await this.driver.wait(until.elementLocated(this.heroSubHeading), 20000);
      console.log('Subheading located');
      
      await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.heroVideo)), 20000);
      console.log('Video visible');
      await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.heroHeading)), 20000);
      console.log('Heading visible');
      await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.heroSubHeading)), 20000);
      console.log('Subheading visible');
      
      console.log('All Hero section elements are visible');
    } catch (error) {
      console.error('Error during Hero section wait:', error);
      throw new Error('One or more Hero section elements did not become visible in time');
    }
  }

  async getHeroVideo() {
    return await this.driver.findElement(this.heroVideo); 
  }

  async getHeroHeadingText() {
    return await this.driver.findElement(this.heroHeading).getText(); 
  }

  async getHeroSubHeadingText() {
    return await this.driver.findElement(this.heroSubHeading).getText(); 
  }

  async clickTellMeMoreButton() {
    await this.driver.findElement(this.tellMeMoreButton).click(); 
  }
}

module.exports = HeroPage;
