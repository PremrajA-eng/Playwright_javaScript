import{test,expect,Locator} from '@playwright/test';

test("xpath demo",async({page})=>{
await page.goto("https://demoqa.com/text-box");

const textbox:Locator=page.locator("//input[@placeholder='Full Name']")
await expect(textbox).toBeVisible();
await page.locator("//input[@placeholder='Full Name']").fill("asdasdas");
const xpathcount:number= await textbox.count();
console.log(xpathcount);
console.log("hello" +await textbox.textContent());

})