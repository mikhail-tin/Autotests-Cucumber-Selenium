import * as WebDriver from 'selenium-webdriver';
const By = WebDriver.By;
const until = WebDriver.until;

export class Lingvolive {
    
    public static translateBtn = By.xpath("//button[contains(text(), 'Перевести')]");
    public static inputBox = By.xpath("//input[@name= 'term']");

    public static async translate(dr: WebDriver.WebDriver): Promise<void> {
        let btn = await dr.findElement(this.translateBtn);
        await btn.click();
    }

    public static async writeText(dr: WebDriver.WebDriver, text: string): Promise<void> {
        let input = await dr.findElement(this.inputBox);
        await input.sendKeys(text);
    }

    public static async findResults(dr: WebDriver.WebDriver, text: string): Promise<number> {
        let result = await dr.findElements(By.xpath(`//span[text()='${text}']`));
        return result.length;
    }
}