const {test,expect}= require('@playwright/test');

test.only('Project : HAPT', async({page})=>{


    const UserName=page.locator('#i0116');
    const Password=page.locator('#i0118');
    const ClickOnNextButton=page.getByRole('button', { name: 'Next' });
    const ClickOnSignIn=page.getByRole('button', { name: 'Sign in' });

await page.goto('https://whohaptuattest.e-zest.in/hapt/');

await UserName.fill('pranoti.kolhe@e-zest.in');

await ClickOnNextButton.click();

await Password.fill('ezest@19');

await ClickOnSignIn.click();

await page.getByLabel('Don\'t show this again').check();

await page.getByRole('button', { name: 'Yes' }).click();

//await page.waitForTimeout(10000);

const firststudy=await page.locator('.k-grid-content-sticky').first().textContent();

console.log("First study Name is " +firststudy);

const Allstudies=await page.locator('.k-grid-content-sticky').allTextContents();

console.log("Name of all studies are  : " +Allstudies);

await page.pause();

await page.getByRole('cell', { name: 'Testing', exact: true }).click();

const studyname=await page.getByText('Testing').textContent();

console.log('Selected study name is : ' +studyname);

//await expect (page.getByText('Testing').tohaveText('Testing'));

await expect(page.getByText('Testing')).toContainText('Testing');

//await page.pause();

})

test('Rahul Shetty new URL Test', async({page})=>{

await page.goto('https://rahulshettyacademy.com/client');

await page.getByPlaceholder('email@example.com').fill('suyashgore2111@gmail.com');

await page.getByPlaceholder('enter your passsword').fill('Target@7001');

await page.getByRole('button', { name: 'Login' }).click();

//await page.waitForTimeout(10000);

//const first_result=await page.locator('.card-body').first().textContent();

//console.log('Our first product name is '+first_result);

await page.waitForLoadState('networkidle');

const all_data=await page.locator('.card-body').allTextContents();

console.log(all_data);

await page.pause();


})

test('Dropdowan UI Test',async({page})=>{

await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

const dropdown=page.getByRole('combobox');

await dropdown.selectOption('India');

 await page.pause();

})

test('Handle new child window',async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    const UserName=page.locator('#i0116');
    const Password=page.locator('#i0118');
    const ClickOnNextButton=page.getByRole('button', { name: 'Next' });
    const ClickOnSignIn=page.getByRole('button', { name: 'Sign in' });
    const studyName=page.getByRole('cell', { name: 'caro16' });
    const OpenNewLinkInTab=page.getByText('Open link in new tab');

await page.goto('https://whohaptuattest.e-zest.in/hapt/');

await UserName.fill('pranoti.kolhe@e-zest.in');

await ClickOnNextButton.click();

await Password.fill('ezest@19');

await ClickOnSignIn.click();

await page.getByLabel('Don\'t show this again').check();

await page.getByRole('button', { name: 'Yes' }).click();

await page.waitForLoadState('networkidle');

await studyName.click({ button: 'right' });

const [page2]=await Promise.all(
[   
context.waitForEvent('page'),
OpenNewLinkInTab.click(),
])



await page2.getByRole('link', { name: 'Data Collection' }).click();
    
     await page.pause();
    
    })
    

