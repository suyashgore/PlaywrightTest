const { test,expect } = require('@playwright/test');

test.describe("Smoke test cases for HAPT",()=>{

test('Test Case 1-User able to login', async function({browser}){

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://whohaptuattest.e-zest.in/hapt/");

    await page.click('id=i0116');

await page.locator('id=i0116').fill('pranoti.kolhe@e-zest.in');

await page.click('id=idSIButton9');

await page.click('id=i0118');

await page.locator('id=i0118').fill('ezest@19');

await page.getByRole('button', { name: 'Sign in' }).click();

await page.getByRole('button', { name: 'Yes' }).click();
 

 //console.log(await page.title());

 //await page.pause();

await expect(page).toHaveTitle("Home - HAPT.Web");
 
})

test('Test Case 2- User able to Create & delete data sources', async function({browser}){

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://whohaptuattest.e-zest.in/hapt/");

    await page.click('id=i0116');

await page.locator('id=i0116').fill('pranoti.kolhe@e-zest.in');

await page.click('id=idSIButton9');

await page.click('id=i0118');

await page.locator('id=i0118').fill('ezest@19');

await page.getByRole('button', { name: 'Sign in' }).click();

await page.getByRole('button', { name: 'Yes' }).click();
    
 
     await page.locator('.content-box').first().click();

     const clikonstudy=page.locator('td[title="Suyash_automation"]');

     const [newPage]=await Promise.all([

        context.waitForEvent('page'),
     
        clikonstudy.click(),

     ])

//Before jump to new tab need below code:

     await newPage.getByRole('link', { name: 'Data Collection' }).click();  //On New Page

     await newPage.getByText('Add new data source').click();

     await newPage.getByPlaceholder('Enter Data source name').type("Suyash@474748");

     await newPage.getByLabel('Survey').click();

     await newPage.getByRole('button', { name: 'Add' }).click();

     const successmessage=await newPage.getByText('Data source added successfully').textContent();

    console.log(successmessage);

//Assertion to verify successfull message :

    await expect(newPage.getByText('Data source added successfully')).toContainText('successfully');

    await newPage.locator('td:nth-child(13)').first().click();

    await newPage.getByText('Delete Source').click();

    await newPage.getByRole('button', { name: 'Yes' }).click();

   const deletemessage= await newPage.getByText('Data Source Delete Completed', { exact: true }).textContent();

   console.log(deletemessage);

   await newPage.getByRole('button', { name: 'Yes' }).click();

     
  // await page.pause();

})


test.only('Test Case 3-User able to fill Donor survey with valid data', async function({browser}){

    const context=await browser.newContext();
    const page=await context.newPage();
 
    await page.goto("https://whohaptuattest.e-zest.in/hapt/");

    await page.click('id=i0116');

await page.locator('id=i0116').fill('pranoti.kolhe@e-zest.in');

await page.click('id=idSIButton9');

await page.click('id=i0118');

await page.locator('id=i0118').fill('ezest@19');

await page.getByRole('button', { name: 'Sign in' }).click();

await page.getByRole('button', { name: 'Yes' }).click();

await page.locator('.content-box').first().click();

    
     const clikonstudy=page.locator('td[title="Suyash_automation"]');

     const [newPage]=await Promise.all([

        context.waitForEvent('page'),
     
        clikonstudy.click(),

     ])

//Before jump to new tab need below code:

     await newPage.getByRole('link', { name: 'Data Collection' }).click();  //On New Page

     await newPage.getByText('Add new data source').click();

     await newPage.getByPlaceholder('Enter Data source name').type("Suyash_Sucvfervx34gr");

     await newPage.getByLabel('Survey').click();

     await newPage.getByRole('button', { name: 'Add' }).click();

     const successmessage=await newPage.getByText('Data source added successfully').textContent();

    console.log(successmessage);

//Assertion to verify successfull message :

    await expect(newPage.getByText('Data source added successfully')).toContainText('successfully');

    await newPage.locator('td:nth-child(13)').first().click();

    await newPage.getByText('Fill Survey').click();    //click on fill survey
    
    const clickonletsbegin=await newPage.getByRole('button', { name: 'Let\'s Begin' });   //Click on lets begin button

    const [newPage2]=await Promise.all([

        context.waitForEvent('page'),
     
        clickonletsbegin.click(),

     ])

     //Respondent inforamtion page
await newPage2.getByPlaceholder('Please input name of Respondent').type('abcd');
await newPage2.getByPlaceholder('Please input position of Respondent').type('iqhdcf');
await newPage2.getByPlaceholder('Please input contact details of Respondent').type('1231311434');
await newPage2.getByPlaceholder('Email address ').type('suyashtest@gmail.com');

//General donar inforamtion page
await newPage2.getByRole('link', { name: 'General Donor Information' }).click();
await newPage2.getByPlaceholder('Please input name of organization').type('Nameoforg1234');
//await newPage2.getByLabel('This field is required.').selectOption({label:'Liberian Dollar (LRD)'});

await newPage2.getByLabel('This field is required.').selectOption({label:'Indian Rupee (INR)'});


//Total Expenditure on health

await newPage2.getByRole('link', { name: 'Total Expenditures on Health' }).click();

//Did you have any health expenditures between 03-Jul-2014 and 02-Jul-2015 ?

await newPage2.locator('#formPage').getByText('Yes').click();

//What was your organization’s expenditure on health, excluding capital expenditures for the reporting period?

await newPage2.getByPlaceholder('Please input the organization\'s health expenditures, excluding capital expenditures (include the value of in-kind contributions).')
.type('100000');

//What was your organization’s capital health expenditure for the reporting period?

await newPage2.getByPlaceholder('Please input the  organization\'s capital expenditures (include the value of in-kind contributions).').type('10000');
await newPage2.getByRole('button', { name: 'Next' }).click();


//Project expenditure

//await newPage.getByRole('link', { name: 'Project Expenditures' }).click();

//Project 1:

await newPage2.getByPlaceholder('Please input name of project undertaken').type('kwebcwihbc');
await newPage2.getByPlaceholder('Please input project description').type('wefqas');

//Project health expenditures (PHE) excluding capital
await newPage2.getByPlaceholder('Please input the total project expenditures including the value of in-kind contributions, but excluding capital health expenditure').type('500');

//Project capital health expenditure (CapExp)
await newPage2.getByPlaceholder('Please input the total project capital expenditures including the value of in-kind contributions.').type('100000');

//Source of funding


await newPage2.locator('#select2-ProjectExp_SourceOfFund_SourceOfFundForProject_0-container').click();

await newPage2.getByRole('option', { name: 'Suyash_Sucvfervx34gr' }).click();






await newPage2.locator('#ProjectExp_SourceOfFund_AmountSharedBySource_0').type('1090');

//Recipient_Organization_Name..click();

await newPage2.locator('#select2-ProjectExp_ProjectNonCapitalExp_RecipientOrgNameProjectNonCap_0-container').click();

await newPage2.getByRole('searchbox').type('ABCDS');

await newPage2.getByRole('option', { name: 'ABCDS' }).click();


//Expenses of PHE made by recipient organization

await newPage2.getByLabel('Expenses of PHE made by recipient organization').type('500');

//await newPage2.pause();

await newPage2.locator('#btnProjectExpSave').click();

const Save_Survey_message=await newPage2.locator("xpath=//span[@id='message-body-span']").textContent();

console.log(Save_Survey_message);




await newPage2.locator('#btnProjectExpFinish').click();

await newPage2.getByRole('button', { name: 'Yes' }).click();


//Survey Submitted message
const survey_Submitted_message=await newPage2.getByText('Survey Submitted Successfully').textContent();

await console.log(survey_Submitted_message);



//Navigate to first page again to finalize surevy

await newPage.getByRole('button', { name: 'Yes' }).click();

await newPage.locator('td:nth-child(13)').first().click();

await newPage.getByText('Finalize Survey').click();

await newPage.getByRole('button', { name: 'Finalize' }).click();





//await newPage.getByText('Finalize Survey').click();

const Finalize_Survey=await newPage.getByText('Selected survey is finalized successfully.').textContent();

await console.log(Finalize_Survey);

})

test('Test Case 4-User able fill surevey for NGO with valid data', async function({browser}){

    

    const context=await browser.newContext();
    const page=await context.newPage();
 
    await page.goto("https://whohaptuattest.e-zest.in/hapt/");

    await page.click('id=i0116');

await page.locator('id=i0116').fill('pranoti.kolhe@e-zest.in');

await page.click('id=idSIButton9');

await page.click('id=i0118');

await page.locator('id=i0118').fill('ezest@19');

await page.getByRole('button', { name: 'Sign in' }).click();

await page.getByRole('button', { name: 'Yes' }).click();

await page.locator('.content-box').first().click();

    
 
     const clikonstudy=page.locator('td[title="Suyash_automation"]');

     const [newPage]=await Promise.all([

        context.waitForEvent('page'),
     
        clikonstudy.click(),

     ])

     await newPage.getByRole('link', { name: 'Data Collection' }).click();

     //await newPage.pause();
     await newPage.getByRole('link', { name: 'NGO' }).click();
     
     await newPage.getByText('Add new data source').click();
    
     await newPage.getByPlaceholder('Enter Data source name').fill('SuyashNGO2334');

     await newPage.getByLabel('Survey').check();

     await newPage.getByRole('button', { name: 'Add' }).click();


     await newPage.locator('td:nth-child(13)').click();

     await newPage.getByText('Fill Survey').click();


     const clickonletsbegin=await newPage.getByRole('button', { name: 'Let\'s Begin' });   //Click on lets begin button

     const [newPage1]=await Promise.all([
 
         context.waitForEvent('page'),
      
         clickonletsbegin.click(),
 
      ])
    

    await newPage1.getByRole('link', { name: 'NGO Information' }).click();

    await newPage1.getByLabel('This field is required.').selectOption({label:'Indian Rupee (INR)'});

    await newPage1.getByRole('link', { name: 'Total Expenditures on Health' }).click();

    

   
    await newPage1.getByPlaceholder('Please input the the organization\'s health expenditures including value of in-kind contributions, but excluding capital health expenditure').click();
    await newPage1.getByPlaceholder('Please input the the organization\'s health expenditures including value of in-kind contributions, but excluding capital health expenditure').fill('1000');

   

    

      await newPage1.getByPlaceholder('Please input the organization\'s capital expenditures (include the value of in-kind contributions).').click();

     await newPage1.getByPlaceholder('Please input the organization\'s capital expenditures (include the value of in-kind contributions).').fill('1000');

     

     await newPage1.getByRole('link', { name: 'Project Expenditures' }).click();

     await newPage1.getByPlaceholder('Please input the total project expenditures including value of in-kind contributions, but excluding capital health expenditure').click();
     
     
     await newPage1.getByPlaceholder('Please input the total project expenditures including value of in-kind contributions, but excluding capital health expenditure').fill('1000');

     await newPage1.getByPlaceholder('Please input the total project capital expenditures including the value of in-kind contributions.').click();
     await newPage1.getByPlaceholder('Please input the total project capital expenditures including the value of in-kind contributions.').fill('1000');


     await newPage1.locator('#ProjectExp_SourceOfFund_AmountSharedBySource_0').click();
     await newPage1.locator('#ProjectExp_SourceOfFund_AmountSharedBySource_0').fill('1000');

     await newPage1.getByLabel('Expenses of PHE spent by provider').click();
     await newPage1.getByLabel('Expenses of PHE spent by provider').fill('1000');

     await newPage1.locator('#select2-ProjectExp_ProjectNonCapitalExp_Provider_0-container').click();
     await newPage1.getByText('Factors of provision Expenses of PHE spent by provider').click();
    
    
     await newPage1.locator('#ProjectExp_ProjectNonCapitalExp_ExpensesOfPHEMul_Provider_0_0').click();
     await newPage1.locator('#ProjectExp_ProjectNonCapitalExp_ExpensesOfPHEMul_Provider_0_0').fill('1000');

         
     await newPage1.locator('#ProjectExp_ProjectNonCapitalExp_EzpensesOfPHEByProv_Provider_0_0').click();
     await newPage1.locator('#ProjectExp_ProjectNonCapitalExp_EzpensesOfPHEByProv_Provider_0_0').fill('1000');


     await newPage1.getByLabel('Expenses of CapExp financed from the financing source').click();
     await newPage1.getByLabel('Expenses of CapExp financed from the financing source').fill('1000');


     await newPage1.getByRole('button', { name: 'Save' }).click();
     await newPage1.getByRole('button', { name: 'Finish' }).click();
     await newPage1.getByRole('button', { name: 'Yes' }).click();


     const Survey_Submitted_Message=await newPage1.getByText('Survey Submitted Successfully').textContent();
     console.log(Survey_Submitted_Message);


     await newPage.getByRole('button', { name: 'Yes' }).click();

await newPage.locator('td:nth-child(13)').click();

await newPage.getByText('Finalize Survey').click();

await newPage.getByRole('button', { name: 'Finalize' }).click();





//await newPage.getByText('Finalize Survey').click();

const Finalize_Survey=await newPage.getByText('Selected survey is finalized successfully.').textContent();

await console.log(Finalize_Survey);


})


})

