import { expect } from 'chai';
import * as WebDriver from 'selenium-webdriver';
import * as chromedriver from 'chromedriver';
const By = WebDriver.By;
const until = WebDriver.until;
import { LingvolivePage } from '../page/lingvolive';
import { Helper as h } from '../helper/helper';

function definitions(): void {

    let llPage: LingvolivePage;

    this.Given(/^I open lingvolive$/, { timeout: 60000 }, async function (): Promise<void> {
        await this.dr.get(`https://www.lingvolive.com/ru-ru/translate/en-ru/world`);
        llPage = new LingvolivePage(this.dr);
    });

    this.When(/^I translate '(.*)'$/, { timeout: 60000 }, async function (text: string): Promise<void> {
        await h.makeDelay(3);
        await llPage.translate(text);
    });

    this.Then(/^I should see result '(.*)'$/, { timeout: 60000 }, async function (text: string): Promise<void> {
        await h.makeDelay(3);
        let countOfResult = await llPage.findCountOfResults(text);
        expect(countOfResult).above(0, 'translation not found');
    });

};

module.exports = definitions;