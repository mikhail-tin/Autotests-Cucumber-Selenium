import * as WebDriver from 'selenium-webdriver';
const By = WebDriver.By;
const until = WebDriver.until;
import {Helper} from '../helper/helper';

export class GooglePage {
    private dr: WebDriver.WebDriver;

    constructor(dr: WebDriver.WebDriver) {
        this.dr = dr;
    }
}