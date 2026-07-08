import {test,expect} from   '@playwright/test';

test("open URL",({page})=>{

    page.goto("https://google.com")
    let sitetitle:string=page.title();
    
    expect(page).toHaveTitle("google");


})