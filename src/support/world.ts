import settings from '../settings/settings';
import * as WebDriver from 'selenium-webdriver';

function World(): void {
  this.settings = settings;
  this.dr = new WebDriver.Builder().forBrowser("chrome").build();
}

module.exports = function initWorld(): void {
  this.World = World;
};