import settings from '../settings/settings';
import * as WebDriver from 'selenium-webdriver';

function World(): void {
  this.settings = settings;
  this.dr = new WebDriver.Builder().forBrowser(settings.driverOptions.browser).build();
}

module.exports = function initWorld(): void {
  this.World = World;
};