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