import { test, expect,Locator } from '@playwright/test';
test("css demo",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const search:Locator=page.locator("input#small-searchterms");
await search.fill("india");
await page.waitForTimeout(10000);
})