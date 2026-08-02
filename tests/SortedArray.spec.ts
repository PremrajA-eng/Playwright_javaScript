import{test,expect,Locator} from '@playwright/test'

test("sorted array elements" , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
const Drop_animals:Locator= page.locator('#animals>option'); // this returning options
//console.log(await Drop_animals.allTextContents());
const animals:string[]=(await Drop_animals.allTextContents()).map(str=>str.trim());
console.log(animals);

const orignalList:string[]=animals;
const sortedList:string[]=animals.sort();

console.log("Orignal List",orignalList);
console.log("Sorted List", sortedList);
})