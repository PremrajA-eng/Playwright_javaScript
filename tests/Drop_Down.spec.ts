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

test.only("multi-select Dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#colors').selectOption('Green');
    await page.waitForTimeout(5000);
    const colorDropdown:Locator=page.locator("#colors")
    const colorsOptions:string[]=(await colorDropdown.allTextContents()).map(str=>str.trim())
    console.log(colorsOptions);
    //const sortedList:string[]=[...colorsOptions]
    
    // for(const i of colorsOptions){
    //     console.log(i)
    //     if(i=='Blue'){
    //         await colorDropdown.click();
    //         console.log("click")
    //     }

    // }
   // await page.waitForTimeout(4000);
})

