import { expect } from 'chai';
import * as WebDriver from 'selenium-webdriver';
import * as chromedriver from 'chromedriver';
const By = WebDriver.By;
const until = WebDriver.until;

function definitions(): void {

    async function delay(interval: number): Promise<void> {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, interval);
        });
    }

    this.Given(/^I open (?:\s)?(.*)$/, { timeout: 60000 }, async function (key: string): Promise<void> {
        await this.dr.get(`http://www.${key}`);
    });

    this.When(/^I find '(.*)'$/, { timeout: 60000 }, async function (name: string): Promise<void> {
        if(name === 'Hello World Y'){
            await this.dr.findElement(By.name('text')).sendKeys(name);
            let btn = await this.dr.findElements(By.xpath("//button"));
            await btn[1].click();
        }

        if(name === 'Hello World G'){
            await this.dr.findElement(By.name('q')).sendKeys(name);
            await this.dr.findElement(By.name('q')).sendKeys(WebDriver.Key.RETURN);
        }
    });

    this.Then(/^I should see result$/, { timeout: 60000 }, async function (): Promise<void> {
        await delay(3000);
        //await this.dr.wait(until.titleIs('Hello World - Поиск в Google'), 5000);
        let result = await this.dr.findElements(By.xpath("//*[text()='Hello']"));
        expect(result.length).be.above(0);
    });

};

module.exports = definitions;