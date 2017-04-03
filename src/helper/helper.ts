import * as WebDriver from 'selenium-webdriver';
const By = WebDriver.By;
const until = WebDriver.until;
const driver = WebDriver.WebDriver;
import {ITimeStamp } from '../interfaces/ITimeStamp';

export class Helper {

    public static async makeDelay(interval: number): Promise<void> {
        return new Promise<void>(resolve => { setTimeout(() => { resolve(); }, interval); });
    }

    public static createWaitCondition = (elem: any, methodForElement: () => Promise<boolean>) => { // any to WebElement
        return methodForElement.bind(elem);
    }

    public static async spinWait(condition: () => Promise<boolean>, expectedResult: boolean, timestamp?: ITimeStamp): Promise<boolean> {
        if (!timestamp) {
            timestamp = { interval: 1000, timeout: 5000 };
        }
        let numberOfCycles = timestamp.timeout / timestamp.interval;

        for (let cycle = 0; cycle < numberOfCycles; cycle++) {
            await this.makeDelay(timestamp.interval || 1000);
            let conditionValue: boolean = await condition();
            if (conditionValue === expectedResult) { return true; }
        }

        return false;
    }

    public static writeAndClick = async (dr: WebDriver.WebDriver, elem: WebDriver.By, text: string, btn: WebDriver.By) : Promise<void> => {
        let i = await dr.findElement(elem);
        await i.sendKeys(text);
        let b = await dr.findElement(btn);
        await b.click();
    }
}