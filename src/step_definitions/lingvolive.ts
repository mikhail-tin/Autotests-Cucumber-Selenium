import { expect } from 'chai';
import * as WebDriver from 'selenium-webdriver';
import * as chromedriver from 'chromedriver';
const By = WebDriver.By;
const until = WebDriver.until;
import { Lingvolive } from '../page/lingvolive';

function definitions(): void {

    async function delay(interval: number): Promise<void> {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, interval);
        });
    }

    this.When(/^I translate '(.*)'$/, { timeout: 60000 }, async function (text: string): Promise<void> {
        await delay(3000);
        await Lingvolive.writeText(this.dr, text);
        await delay(3000);
        await Lingvolive.translate(this.dr);
    });

};

module.exports = definitions;