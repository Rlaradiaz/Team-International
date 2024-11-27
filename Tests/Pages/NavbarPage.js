const { By, until } = require('selenium-webdriver');

class NavbarPage {
  constructor(driver) {
    this.driver = driver;
    this.navbarSelector = 'ul[data-justify="end"]';
    this.navLinksSelector = 'ul[data-justify="end"] li a';
  }

  async waitForNavbar() {
    console.log('Waiting for the navbar to be located...');
    const navbar = await this.driver.wait(until.elementLocated(By.css(this.navbarSelector)), 20000);
    await this.driver.wait(until.elementIsVisible(navbar), 20000);
    console.log('Navbar is now visible.');
  }

  async getAllNavLinks() {
    return await this.driver.findElements(By.css(this.navLinksSelector));
  }

  async verifyNavigation() {
    const navLinks = await this.getAllNavLinks();
    console.log(`Found ${navLinks.length} navigation links.`); 
    
    for (let i = 0; i < navLinks.length; i++) {
      const link = navLinks[i];
      const href = await link.getAttribute('href');
      console.log(`Navigating to: ${href}`); 
      
      await this.driver.executeScript("window.open(arguments[0])", href);
      const tabs = await this.driver.getAllWindowHandles();
      
      await this.driver.switchTo().window(tabs[1]);
      const currentUrl = await this.driver.getCurrentUrl();
      
      if (currentUrl === href) {
        console.log(`Navigation successful to: ${currentUrl}`); 
      } else {
        console.error(`Error navigating to: ${href}`); 
      }
      
      await this.driver.close();
      await this.driver.switchTo().window(tabs[0]);
    }
  }
}

module.exports = NavbarPage;
