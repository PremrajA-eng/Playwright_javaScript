import{test,expect,Locator} from '@playwright/test'
test("Action testing",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const textbox:Locator=page.locator('#name');
await expect(textbox).toBeVisible();
await expect(textbox).toBeEnabled();
const maxLenght:string |null=await textbox.getAttribute("maxlength"); // return a value of maxlength attribute of the element
expect (maxLenght).toBe('15');
await textbox.fill("premraj");
console.log("text element value: ",await textbox.textContent()) // this will return empty
const enterdvalue:string=await textbox.inputValue()
console.log("text content", enterdvalue);
expect(enterdvalue).toBe('premraj');
await page.waitForTimeout(10000);

})

test.only("checkBox Actions", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const maleRadio:Locator=page.locator("#male")
await expect(maleRadio).toBeVisible();
await expect(maleRadio).toBeEnabled();
await maleRadio.check();
expect(await maleRadio.isChecked()).toBe(true);
  await page.waitForTimeout(10000);
})