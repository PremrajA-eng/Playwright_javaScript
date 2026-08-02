import{test,expect,Locator} from '@playwright/test'
test("extract text from page", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const productLocator:Locator=page.locator("[class='product-title']");
const products:string[]=await productLocator.allTextContents()
console.log(products);
console.log(await productLocator.nth(1).innerText()); // exact text without garbage 
console.log(await productLocator.nth(1).textContent()); // text having all apaces and etc
const count=await productLocator.count();
// for(let i=0;i<count;i++){
//      console.log(await productLocator.nth(i).innerText())
// }

// for(let i=0;i<count;i++){
//      const productText:string |null=await productLocator.nth(i).textContent()
//      console.log(productText?.trim)
// }

const alltext:string[]=await productLocator.allTextContents()
console.log(alltext.map(str=>str.trim()));

const allprotext: string[]=await productLocator.allInnerTexts()
console.log(allprotext);
})
