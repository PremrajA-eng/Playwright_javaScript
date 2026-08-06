import{test, expect,Locator} from '@playwright/test';
test("Dynami table handling", async({page})=>{
await page.goto("https://practice.expandtesting.com/dynamic-table");
const wholeTable:Locator=page.locator("table.table tbody");
await expect(wholeTable).toBeVisible();

const rows: Locator[]=await page.locator("table.table tbody tr").all();

let cpuload='';
for(const row of rows){
const processName:string=await row.locator("td").nth(0).innerText();
if(processName==="Chrome"){
     cpuload=await row.locator('td:has-text("%")').innerText();
    console.log("cpu load:  ", cpuload)
}

}
await page.waitForTimeout(5000);
let yelloBox: string=await page.locator("#chrome-cpu").innerText();
if(yelloBox.includes(cpuload)){
    console.log("cpuload is eqeal")
}
else{
    console.log("not")
}
await expect(yelloBox).toContain(cpuload);


})