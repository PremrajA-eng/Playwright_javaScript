import{test,expect,Locator} from '@playwright/test'
test("testing dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // using selet option
    await page.locator('#country').selectOption('India')
    //await page.locator('#country').selectOption({value:'uk'})
    //await page.locator('#country').selectOption({index:3});
    //await page.waitForTimeout(10000);

    // check number of options
    const dropdowns:Locator= page.locator('#country option');
   const textoptions:string[]= (await dropdowns.allTextContents()).map(text=>text.trim())
    console.log(textoptions);
   expect(textoptions).toContain('japan');
}) 