import{test,expect,Locator} from '@playwright/test';
test("static table handling", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table:Locator=page.locator("table[name='BookTable']");
const rows: Locator=table.locator("tr"); // chaining of table
const rowCount:number=await rows.count();
console.log("count of rows" ,rowCount)
await expect(rows).toHaveCount(7);

const column: Locator=rows.locator("th")
const columncount:number =await column.count();
expect(columncount).toBe(4);

const secondrowCells: Locator=rows.nth(2).locator("td");
const secondrowText:string[]=await secondrowCells.allInnerTexts()
console.log(secondrowText);
await expect(secondrowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ])

for(let text of secondrowText){
    console.log(text);
}

// read all data from table
const allrowslocator= await rows.all();
console.log(allrowslocator);
for(let row of allrowslocator.slice(1)) // expect header
    {
   const coln=await row.locator("td").allInnerTexts();
console.log((coln.join('\t')));    
}

// print books name where auther is mukesh
const mukeshbokks:string[]=[]
for(let row of allrowslocator.slice(1)) // expect header
    {
     const cells=await row.locator("td").allInnerTexts();
     const Auther=cells[1];
     const book=cells[0];
     if (Auther==='Mukesh'){
          console.log(`${Auther} \t ${book}`)
          mukeshbokks.push(book)
     }

}
expect(mukeshbokks).toHaveLength(2);
// calculate the  total price of all books
let totalprice=0
for(let row of allrowslocator.slice(1)) // expect header
    {
        const cells=await row.locator("td").allInnerTexts();
    const price=cells[3];
    totalprice=totalprice+parseInt(price)

    }
   console.log(totalprice)
})
