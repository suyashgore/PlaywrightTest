const { test,expect } = require('@playwright/test');
const {LoginPage, Login}=require('./pageobjects/LoginPage');
const {HomePage, HPage}=require('./pageobjects/HomePage');
import { DataCollection } from './pageobjects/DataCollectionPage';
import sleep from 'await-sleep';




test('Test Case 1-User able to check and verify row is fully mapped', async ({browser})=> {


    const context=await browser.newContext();
    const page=await context.newPage();
   
    const loginPage=new Login(page);
    const datacollection=new DataCollection();

  
     loginPage.landonLoginPage();
     loginPage.validlogin();

    await page.getByRole("link",{name :"Study"}).click();

    const clikonstudy=page.locator('td[title="Suyash_automation"]');
    
    const [newPage]=await Promise.all([

        context.waitForEvent('page'),
     
        clikonstudy.click(),
     
     ])
    
     await newPage.getByRole('link', { name: 'Data Collection' }).click();
     
    
     await newPage.getByRole('link', { name: 'Mapping' }).click();

9
const Mapped= await newPage.getByText('100% Rows mapped').textContent();

console.log('User can see row is fully mapped with message  ' + Mapped);


})

test('Test Case 2-User able to see Data grid view on Mapping screen', async ({browser})=> {

    const context=await browser.newContext();
    const page=await context.newPage();

await page.goto("https://whohaptuattest.e-zest.in/hapt");

await page.click('id=i0116');

await page.locator('id=i0116').fill('pranoti.kolhe@e-zest.in');

await page.click('id=idSIButton9');

await page.click('id=i0118');

await page.locator('id=i0118').fill('ezest@19');

await page.getByRole('button', { name: 'Sign in' }).click();

await page.getByRole('button', { name: 'Yes' }).click();

await page.getByRole("link",{name :"Study"}).click();

const clikonstudy=page.locator('td[title="Suyash_automation"]');


const [newPage]=await Promise.all([

    context.waitForEvent('page'),
 
    clikonstudy.click(),
 
 ])

 await newPage.getByRole('link', { name: 'Data Collection' }).click();

 //await newPage.locator('td:nth-child(13)').first().click();

 await newPage.getByRole('link', { name: 'Mapping' }).click();


await newPage.locator('#grid-view-btn').click();

const DataGridViewPage=await newPage.getByRole('heading', { name: 'Data Grid View' }).textContent();

console.log('User able to see a new page & name of page is : ' +DataGridViewPage);

await newPage.getByRole('button', { name: 'Close' }).click();


})

test('Test Case 3-User able to do reset mapping', async ({browser})=> {

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://whohaptuattest.e-zest.in/hapt");

await page.click('id=i0116');

await page.locator('id=i0116').fill('pranoti.kolhe@e-zest.in');

await page.click('id=idSIButton9');

await page.click('id=i0118');

await page.locator('id=i0118').fill('ezest@19');

await page.getByRole('button', { name: 'Sign in' }).click();

await page.getByRole('button', { name: 'Yes' }).click();

await page.getByRole("link",{name :"Study"}).click();

const clikonstudy=page.locator('td[title="Suyash_automation"]');

const [newPage]=await Promise.all([

    context.waitForEvent('page'),
 
    clikonstudy.click(),
 
 ])

 await newPage.getByRole('link', { name: 'Data Collection' }).click();

 //await newPage.locator('td:nth-child(13)').first().click();

 await newPage.getByRole('link', { name: 'Mapping' }).click();

await newPage.getByRole('button', { name: 'Reset Mapping' }).click();

await newPage.getByRole('button', { name: 'Yes' }).click();

const reset_mapping=await newPage.getByText('Mapping is reset successfully').textContent();

console.log(reset_mapping);

})

test('Test Case 4-User able to do find and replace on specific data row ', async ({browser})=> {

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://whohaptuattest.e-zest.in/hapt");

await page.click('id=i0116');

await page.locator('id=i0116').fill('pranoti.kolhe@e-zest.in');

await page.click('id=idSIButton9');

await page.click('id=i0118');

await page.locator('id=i0118').fill('ezest@19');

await page.getByRole('button', { name: 'Sign in' }).click();

await page.getByRole('button', { name: 'Yes' }).click();

await page.getByRole("link",{name :"Study"}).click();

const clikonstudy=page.locator('td[title="Suyash_automation"]');

const [newPage]=await Promise.all([

    context.waitForEvent('page'),
 
    clikonstudy.click(),
 
 ])

 await newPage.getByRole('link', { name: 'Data Collection' }).click();

 await newPage.getByRole('link', { name: 'NGO' }).click();

 await newPage.getByText('Add new data source').click();

     await newPage.getByPlaceholder('Enter Data source name').click();

     await newPage.getByPlaceholder('Enter Data source name').fill('One');

     await newPage.getByLabel('Secondary').click();

     await newPage.getByRole('button', { name: 'Add' }).click();

    const first_data_source= await newPage.getByText('Data source added successfully').textContent();

    console.log('First data source added : ' +first_data_source);

    await newPage.getByRole('row', { name: 'One Actual Secondary 01/29/' }).locator('path').click();

    await newPage.getByText('View Data Rows').click();

    await newPage.getByText('Add New Data Row').click();

    await sleep(3000);

    await newPage.locator('#currencyId').selectOption({label:'Indian Rupee (INR)'});

    await newPage.getByPlaceholder('Total Amount').fill('100');

    await newPage.getByPlaceholder('Enter no. of Data Rows').fill('50');

    await newPage.getByRole('button', { name: 'Add' }).click();

    const DataRow_added=await newPage.getByText('Data added successfully.').textContent();

    console.log('User has added data rows in first data source' +DataRow_added);

    
    await newPage.getByRole('link', { name: 'NGO' }).click();

 //await newPage.locator('td:nth-child(13)').first().click();

 await newPage.getByRole('link', { name: 'Mapping' }).click();

 await newPage.getByRole('link', { name: 'NGO' }).click();

 await newPage.getByRole('button', { name: 'Find and Replace' }).click();

 await  newPage.locator('#repeatScope').selectOption({ label: 'All data rows for the same data source' });

 await newPage.getByRole('tab', { name: 'Find and Replace Classification Categories' }).click();

 await newPage.locator('#findClassificationList_0').selectOption({ label: 'HF Financing schemes' });

 await newPage.locator('#findClassificationStatus_0').selectOption({ label: 'Non-mapped' });

 await newPage.getByText('Classification categories', { exact: true }).click();

 await newPage.getByRole('treeitem', { name: '  HF.1 Government schemes and compulsory contributory health care financing schemes' }).locator('label').click();



 await newPage.locator('#replaceClassification_0').selectOption({label : 'HF Financing schemes'});

 await newPage.getByPlaceholder('Not Mapped').click();

 await newPage.getByText('Not Mapped').click();

 await newPage.getByPlaceholder('Classification category to replace with').click();

 await newPage.getByText('HF.1.1.1 Central government schemes').click();
  //await newPage.pause();
 await newPage.getByRole('button', { name: 'Apply Filters' }).click();

 await newPage.getByRole('button', { name: 'Replace', exact: true }).click();

 await newPage.getByRole('button', { name: 'Replace All' }).click();

 const succes_message_replaceall=await newPage.getByText('Replace all operation completed', { exact: true }).textContent();

 console.log(succes_message_replaceall);

await newPage.getByRole('button', { name: 'Yes' }).click();

})

test('Test Case 5-User able add & delete split rule in split library', async ({browser})=> {

    const context=await browser.newContext();
    const page=await context.newPage();
    const data_sources=page.locator(".k-grid-content-sticky");
    const datasource_name='Suyash_Sucvfervx34gr';

    await page.goto("https://whohaptuattest.e-zest.in/hapt");

await page.click('id=i0116');

await page.locator('id=i0116').fill('pranoti.kolhe@e-zest.in');

await page.click('id=idSIButton9');

await page.click('id=i0118');

await page.locator('id=i0118').fill('ezest@19');

await page.getByRole('button', { name: 'Sign in' }).click();

await page.getByRole('button', { name: 'Yes' }).click();

await page.getByRole("link",{name :"Study"}).click();

const clikonstudy=page.locator('td[title="Suyash_automation"]');

const [newPage]=await Promise.all([

    context.waitForEvent('page'),
 
    clikonstudy.click(),
 
 ])

 await newPage.getByRole('link', { name: 'Data Collection' }).click();

 await newPage.locator('td:nth-child(13)').first().click();

 await newPage.getByRole('link', { name: 'Mapping' }).click();

 await newPage.getByRole('button', { name: 'Split Library' }).click();

 await newPage.getByText('Add New Rule').click();

 await newPage.getByLabel('Yes').check();

 await newPage.locator('#name').fill('SuyashTest');


 await newPage.locator('#classificationId').selectOption({ label: 'HF Financing schemes' });

await newPage.getByPlaceholder('Select').click();

await newPage.getByRole('treeitem', { name: ' HF.1 Government schemes and compulsory contributory health care financing schemes' }).locator('span').first().click();

await newPage.getByText('HF.1.1.1 Central government schemes').click();

await newPage.getByPlaceholder('0').type('50');

await newPage.locator('.col-sm-1 > .col-md-auto').click();

await newPage.getByPlaceholder('Select').nth(1).click();

await newPage.getByRole('treeitem', { name: ' HF.1 Government schemes and compulsory contributory health care financing schemes' }).locator('span').first().click();

await newPage.getByText('HF.1.1.2 State/regional/local government schemes').click();

await newPage.getByRole('button', { name: 'Add' }).click();

const successfull_message=await newPage.getByText('Split rule added successfully.').textContent();

console.log(successfull_message);

//await newPage.pause();

await newPage.getByRole('row', { name: 'HF.1.1.1 | HF.1.1.2 HF HF.1.1.1 - 50% | HF.1.1.2 - 50%' }).locator('span').nth(4).click();

const mapped_successsfully=await newPage.getByText('Classification is mapped').textContent();

console.log(mapped_successsfully);

//Validation of Split rule on mapping screen

await newPage.getByText('Back To Mapping').click();

const A=await newPage.getByText('HF.1.1.1');
await expect(A).toBeVisible();

const B=await newPage.getByText('HF.1.1.2');
await expect(B).toBeVisible();

//Validation of Split rule on Data grid view screen

await newPage.locator('#grid-view-btn').click();

const C= await newPage.getByRole('cell', { name: 'HF.1.1.1' });
await expect(C).toBeVisible();

const D=await newPage.getByRole('cell', { name: 'HF.1.1.2' });
await expect(D).toBeVisible();

await newPage.getByRole('button', { name: 'Close' }).click(); 



//Delete Same split Rule

await newPage.getByRole('button', { name: 'Split Library' }).click();

await newPage.getByRole('row', { name: 'HF.1.1.1 | HF.1.1.2 HF HF.1.1.1 - 50% | HF.1.1.2 - 50%' }).locator('span').nth(4).click();

await newPage.getByRole('button', { name: 'Yes' }).click();

const deselected_message=await newPage.getByText('Split rule deselected successfully').textContent();

console.log("User able to deselect split rule with message  " +deselected_message);

await newPage.getByRole('row', { name: 'HF.1.1.1 | HF.1.1.2 HF HF.1.1.1 - 50% | HF.1.1.2 - 50%' }).locator('svg').click();

await newPage.locator('#splitContent').getByText('Delete').click();

const delete_message=await newPage.getByText('Are you sure you want to delete this rule? Deleting rule will not impact old stu').textContent();

console.log("User is getting confirmation message while deleteing split rule is  "+delete_message);

await newPage.getByRole('button', { name: 'Yes' }).click();

const delete_splitrule=await newPage.getByText('Split rule deleted successfully').textContent();

console.log("User has successfullly delete split rule with message  "+delete_splitrule);

})

