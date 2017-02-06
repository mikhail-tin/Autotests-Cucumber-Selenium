import { expect } from 'chai';
import * as WebDriver from 'selenium-webdriver';
import * as chromedriver from 'chromedriver';

function definitions(): void {
    this.Given(/^I open (?:\s)?(.*)$/, async function (key: string): Promise<void> {
        return await console.log('Step 1');
    });

    this.When(/^I find '(.*)'$/, async function (name: string): Promise<void> {
        return await console.log('Step 2');
    });

    this.Then(/^I should see result$/, async function (): Promise<void> {
        return await console.log('Step 3');
    });

};

module.exports = definitions;