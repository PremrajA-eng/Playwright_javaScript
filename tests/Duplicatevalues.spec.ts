import{test,expect,Locator} from '@playwright/test'

test("sorted array elements" , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
const Drop_colors:Locator= page.locator('#colors>option');
const optionsColors:string[]=(await Drop_colors.allTextContents()).map(str=>str.trim())
const myset=new Set<String>(); // Duplicates not allowed 
const Duplicates:string[]=[]; // array allows duplicates

for(const text of optionsColors){
    if(myset.has(text)){
        Duplicates.push(text);
    }
    else{
        myset.add(text);
    }
}
console.log("Doplicated options ", Duplicates);
console.log("Set values ", myset);
expect(Duplicates.length).toBe(2);

})