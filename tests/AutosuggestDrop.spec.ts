import{test,expect,Locator} from '@playwright/test'

test("auto suggest Dropdown" , async({page})=>{

await page.goto("https://www.flipkart.com/")

await page.locator('input.nw1UBF.v1zwn25:visible').fill("smart")
await page.waitForTimeout(2000);
const options: Locator=page.locator('ul>li');
const counts=await options.count();
console.log("number of items suggested: ", counts)
})