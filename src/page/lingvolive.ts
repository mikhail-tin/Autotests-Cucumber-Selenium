import * as WebDriver from 'selenium-webdriver';
const By = WebDriver.By;
const until = WebDriver.until;
import {Helper} from '../helper/helper';

export class LingvolivePage {
    private dr: WebDriver.WebDriver;

    constructor(dr: WebDriver.WebDriver) {
        this.dr = dr;
    }

    private async translateButton(): Promise<WebDriver.WebElement> {
        return await this.dr.findElement(By.xpath("//button[contains(text(), 'Перевести')]"));
    }

    private async inputBox(): Promise<WebDriver.WebElement> {
        return await this.dr.findElement(By.xpath("//input[@name= 'term']"));
    }

    private async clickOnTranslate(): Promise<void> {
        let btn = await this.translateButton();
        await btn.click();
    }

    private async setTextForTranslate(text: string): Promise<void> {
        let input = await this.inputBox();
        await input.sendKeys(text);
    }

    // tslint:disable-next-line:member-ordering
    public async translate(test: string): Promise<void> {
        await this.setTextForTranslate(test);
        await this.clickOnTranslate();
    }

    public async findCountOfResults(text: string): Promise<number> {
        let result = await this.dr.findElements(By.xpath(`//span[text()='${text}']`));
        return result.length;
    }
}