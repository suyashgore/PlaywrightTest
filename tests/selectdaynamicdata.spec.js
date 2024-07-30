const {test,expect}= require('@playwright/test');

test('Select dynamic data from list',async({page})=>{


    const UserName=page.locator('#i0116');
    const Password=page.locator('#i0118');
    const ClickOnNextButton=page.getByRole('button', { name: 'Next' });
    const ClickOnSignIn=page.getByRole('button', { name: 'Sign in' });
    const StudyName='Suyash_automation';

await page.goto('https://whohaptuattest.e-zest.in/hapt/');

await UserName.fill('pranoti.kolhe@e-zest.in');

await ClickOnNextButton.click();

await Password.fill('ezest@19');

await ClickOnSignIn.click();

await page.getByLabel('Don\'t show this again').check();

await page.getByRole('button', { name: 'Yes' }).click();

await page.waitForTimeout(10000);

const Study_Count=await page.locator(".k-grid-content-sticky").count();

await console.log(Study_Count);


for(let i=0; i<Study_Count; i++){

     const text= await page.locator(".k-grid-content-sticky").nth(i).textContent();

     if(text === StudyName){

        await page.locator('.k-grid-content-sticky').nth(i).click();
        break;
     }

}

await page.pause();

})