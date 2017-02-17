import { expect } from 'chai';
import * as WebDriver from 'selenium-webdriver';
import * as chromedriver from 'chromedriver';
const By = WebDriver.By;
const until = WebDriver.until;
import { Helper as h } from '../helper/helper';

function definitions(): void {

    this.Given(/^I open '(.*)'$/, { timeout: 60000 }, async function (key: string): Promise<void> {
        await this.dr.get(`http://www.${key}`);
    });

    this.When(/^I find '(.*)'$/, { timeout: 60000 }, async function (name: string): Promise<void> {
            await this.dr.findElement(By.name('q')).sendKeys(name);
            await this.dr.findElement(By.name('q')).sendKeys(WebDriver.Key.RETURN);
    });

    this.Then(/^I should see result$/, { timeout: 60000 }, async function (): Promise<void> {
        await h.makeDelay(3);
        let result = await this.dr.findElements(By.xpath("//*[text()='Hello']"));
        expect(result.length).be.above(0);
    });
};

module.exports = definitions;