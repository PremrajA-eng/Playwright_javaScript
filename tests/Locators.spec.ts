import{test,expect, Locator} from '@playwright/test'

test("multiple locators stored in variable", async({page})=>{
console.log("जय श्री राम! जय हनुमान ")
await page.goto("https://demoqa.com/text-box");
const alllocator:Locator= page.locator("//div[@class='col-md-3 col-sm-12']");
const allTextBox: number= await alllocator.count();
console.log("Count of all elements: " +allTextBox);

console.log("First element:: ", await alllocator.first().textContent());
console.log("Last element:: ",await alllocator.last().textContent());
console.log("nth number product:: ", await alllocator.nth(3).textContent());

console.log("All text content::  ",  await alllocator.allTextContents() ) // array of string 
let allElement:string[]= await alllocator.allTextContents();
for(let i=0;i<allTextBox;i++){
    console.log(allElement[i]);  
}
})