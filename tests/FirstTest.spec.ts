import {test,expect} from   '@playwright/test';

test("open URL",async({page})=>{

    await page.goto("https://google.com")
    let sitetitle:string= await page.title();
    console.log(sitetitle);
   await expect(page).toHaveTitle("Google");
})