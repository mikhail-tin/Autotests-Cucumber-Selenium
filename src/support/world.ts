import settings from '../store/settings';
import {Store} from '../store/store';
import * as WebDriver from 'selenium-webdriver';

function World(): void {
  this.settings = settings;
  this.store = new Store();
  this.dr = new WebDriver.Builder().forBrowser(settings.driverOptions.browser).build();
}

module.exports = function initWorld(): void {
  this.World = World;
};