import{test , expect} from '@playwright/test'

test("get by placeholder",async({page})=>{
await page.goto("https://demoqa.com/text-box");
await page.getByPlaceholder('Full Name').fill("premraj"); 
await page.getByPlaceholder('name@example.com').fill("asdasdas@gmail.bgf");
await page.getByPlaceholder('Current Address').fill("asdasd");
})