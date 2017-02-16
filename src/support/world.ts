import settings from '../settings/settings';
import * as WebDriver from 'selenium-webdriver';

/*async function World(): Promise<void> {
  this.settings = settings;
  this.webDriver = await new WebDriver.Builder().forBrowser("firefox").build();
}

module.exports = async function initWorld(): Promise<void> {
  this.World = await World;
};*/

function World(): void {
  this.settings = settings;
  this.dr = new WebDriver.Builder().forBrowser("chrome").build();
}

module.exports = function initWorld(): void {
  this.World = World;
};