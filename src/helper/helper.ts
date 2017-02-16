import * as WebDriver from 'selenium-webdriver';
const By = WebDriver.By;
const until = WebDriver.until;
const driver = WebDriver.WebDriver;

export class Helper {

    public static writeAndClick = async (dr: WebDriver.WebDriver, elem: WebDriver.By, text: string, btn: WebDriver.By) : Promise<void> => {
        let i = await dr.findElement(elem);
        await i.sendKeys(text);
        let b = await dr.findElement(btn);
        await b.click();
    }
}