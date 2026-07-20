import {test,expect,Locator} from '@playwright/test';

test("Elements handling", async({page } )=>{
await page.goto("https://demoqa.com/");
//let text:Locator=  page.getByText("Welcome to our store");
await expect(page.getByText('TOOLSQA.COM | ALL RIGHTS RESERVED.')).toBeVisible();

})

test("get byRole", async({page})=>{
    await page.goto("https://demoqa.com/");
   await page.getByRole('link',{name:'Elements'}).click();
//await page.getByText('Elements').click();
await expect(page.getByText('Please select an item from left to start practice.')).toBeVisible();
});

test("get by label",async({page})=>{
 await page.goto("https://demoqa.com/text-box");
 await page.getByLabel('Full Name').fill("john");
 await page.getByLabel('Email').fill("asdada");
 await page.getByLabel('Current Address').fill("asdada@gamail.com");
await page.getByLabel('Permanent Address').fill("pune maharastra");
 
})

test("get by alt",async({page})=>{
 await page.goto("https://demo.nopcommerce.com/");
const logo:Locator=page.getByAltText('nopCommerce demo store')
await expect(logo).toBeVisible();
})
/*test("get by labell",async({page})=>{
 await page.goto("https://demo.nopcommerce.com/");
// await page.pause();
 await page.getByRole('link',{name:'Register'}).click();
 await page.getByLabel('First name:').fill("john");

 
}) */