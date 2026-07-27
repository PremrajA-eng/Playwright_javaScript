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

test("checkBox Actions", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const maleRadio:Locator=page.locator("#male")
await expect(maleRadio).toBeVisible();
await expect(maleRadio).toBeEnabled();
await maleRadio.check();
expect(await maleRadio.isChecked()).toBe(true);
  await page.waitForTimeout(10000);
})

test.only("radio button",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const Days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const checkBoxes:Locator[]=Days.map(index=>page.getByLabel(index)); // this will return checkBoxes
expect(checkBoxes.length).toBe(7);

for(const checkBox of checkBoxes){
  await checkBox.check();
  await expect(checkBox).toBeChecked();
}
// unselect last three checkboxes

for(const checkBox of checkBoxes.slice(-3)){
  await checkBox.uncheck();
  await expect(checkBox).not.toBeChecked();
}
await page.waitForTimeout(10000);
// select the check boxes those are unselected and visevsersa

for(const checkBox of checkBoxes)
{
if(await checkBox.isChecked()) { 
await checkBox.uncheck()
await expect(checkBox).not.toBeChecked();
}
else{
await checkBox.check();
await expect(checkBox).toBeChecked();
}}
await page.waitForTimeout(5000);

// Random checkbox to select
const indexes:number[]=[1,3,5];
for(const i of indexes){
await checkBoxes[i].check();
await expect(checkBoxes[i]).toBeChecked();

}

})