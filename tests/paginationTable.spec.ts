import{test, expect,Locator} from '@playwright/test';

test("Read all data from table", async({page})=>{
    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")
let hasmorepages=true;


while(hasmorepages){
    const rows=await page.locator("#example tbody tr").all();
    for(let row of rows){
        console.log(await row.innerText())
    }
const nextbtn=page.locator("button[aria-label='Next']");
const isdisable=await nextbtn.getAttribute('class');
if(isdisable?.includes('disabled'))
{
hasmorepages=false;
}
else{
await nextbtn.click();
}
await page.waitForTimeout(3000);
console.log("*************")
}

})

test("filter the rows", async({page})=>{
    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
    const dropdown:Locator= page.locator("#dt-length-0");
   await dropdown.selectOption(({label:'25'}));

   const rows=await page.locator("#example tbody tr").all(); // array of locators
    expect(rows.length).toBe(25);

   const rows2= page.locator("#example tbody tr")
  await expect(rows2).toHaveCount(25)

})

// searching data from atable

test.only("Seaching element in table", async({page})=>{
    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
   await page.getByRole('searchbox', { name: 'Search:' }).fill("Cedric Kelly");
    const rows= await page.locator("#example tbody tr").all();
   if(rows.length>1){
    let matchfound=false;
     for(let row of rows)
        {
         const rowstext=await row.innerText();
         if(rowstext.includes('Cedric Kelly'))
         {
            matchfound=true;
            break;
         }
        }
         expect(matchfound).toBeTruthy();
   }
   else{
    console.log("value not found")
   }


})