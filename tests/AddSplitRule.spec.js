
const { test,expect } = require('@playwright/test');
import awaitSleep from 'await-sleep';
import sleep from 'await-sleep';
//let randomestring='Suyash_'+new Date().toLocaleTimeString();


let randomestring='Suyash_'+Math.random().toString(36).slice(2);

let randomestring1='Suyash_'+Math.random().toString(36).slice(-2);

let randomestring2=('Suyash_'+new Date().getFullYear()+new Date().getMilliseconds());

let randomestring3=('Suyash_'+new Date().getFullYear()+new Date().getMilliseconds());

let randomestring4='Suyash_'+Math.random().toString(36).slice(-2);

let var1="(//td[@title='"+randomestring2+"']/../td)[6]";


let page;


test.beforeAll(async({browser})=>{

        //login code
        
    });

    test('Test Case 1-User able add split rule - Positive flow ', async ({browser})=> {

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

            await newPage.getByRole('link', { name: 'Mapping' }).click();

            await sleep(2000);

            await newPage.evaluate("$(\"#hf\").click()");

            await newPage.getByRole('cell', { name: ' HF.2 Voluntary health care' }).locator('span').click();

            await newPage.getByRole('row', { name: 'HF.2.1.1.1 Employer-based' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.2.1.1.2 Government-based' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.2.1.1.3 Other primary' }).getByRole('checkbox').check();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(9000);

            await newPage.locator('#name').click();
             
            await newPage.locator('#name').fill(randomestring1);

            await newPage.getByRole('button', { name: 'Add' }).click();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(9000);

            await newPage.getByRole('button', { name: 'Reset Mapping' }).click();

            await newPage.getByRole('button', { name: 'Yes' }).click();

    })


    test('Test Case 2-User able add split rule - with one data set ', async ({browser})=> {

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

         //await newPage.locator('li').filter({ hasText: 'Donor' }).click();
         await newPage.getByRole('link', { name: 'NGO' }).click();
        
             await newPage.getByText('Add new data source').click();
        
             await newPage.getByPlaceholder('Enter Data source name').click();
        
             await newPage.getByPlaceholder('Enter Data source name').fill(randomestring);

             await newPage.getByLabel('Secondary').click();
        
             await newPage.getByRole('button', { name: 'Add' }).click();
        
            const first_data_source= await newPage.getByText('Data source added successfully').textContent();
        
            console.log(first_data_source);

            await newPage.getByRole('row', { name: randomestring }).locator('svg').click();

            await newPage.getByText('View Data Rows').click();

            await newPage.getByText('Add New Data Row').click();

   await sleep(3000);

   await newPage.locator('#currencyId').selectOption({label:'Indian Rupee (INR)'});

   await newPage.getByPlaceholder('Total Amount').fill('100');

   await newPage.getByPlaceholder('Enter no. of Data Rows').fill('10');

   await newPage.getByRole('button', { name: 'Add' }).click();

   const DataRow_added=await newPage.getByText('Data added successfully.').textContent();

   console.log(DataRow_added);

           

            await newPage.getByRole('link', { name: 'Mapping' }).click();

            await newPage.getByRole('link', { name: 'NGO' }).click();

            await newPage.locator('#dataSourceId').selectOption({label:randomestring});

            await sleep(2000);

            await newPage.evaluate("$(\"#hf\").click()");

            await newPage.getByRole('cell', { name: ' HF.2 Voluntary health care' }).locator('span').click();

            await newPage.getByRole('row', { name: 'HF.2.1.1.1 Employer-based' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.2.1.1.2 Government-based' }).getByRole('checkbox').check();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(2000);

            await newPage.locator('#name').click();

            await newPage.locator('#name').fill(randomestring2);

            await newPage.locator('div').filter({ hasText: /^Percentage$/ }).getByPlaceholder('0').fill('88.1');

            await newPage.getByPlaceholder('0').nth(3).fill('11.9');

            await sleep(8000);


             await newPage.getByRole('button', { name: 'Add' }).click();

             await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

             await sleep(4000);

             await newPage.evaluate("$(\"#hf_2_1_1_1\").click()");

             await sleep(4000); 

             await newPage.evaluate("$(\"#hf_2_1_1_2\").click()");


             const actual_value=await newPage.getByText('100 (Indian Rupee)').textContent();

             expect(actual_value).toEqual(expect.stringContaining('100'));

             await sleep(8000);

           await newPage.getByRole('button', { name: 'Reset Mapping' }).click();

            await newPage.getByRole('button', { name: 'Yes' }).click();

    })

    test('Test Case 3-User able add split rule - with another data set ', async ({browser})=> {


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

        

         //await newPage.locator('li').filter({ hasText: 'Donor' }).click();
        
             await newPage.getByText('Add new data source').click();
        
             await newPage.getByPlaceholder('Enter Data source name').click();
        
            const datasource= await newPage.getByPlaceholder('Enter Data source name').fill(randomestring1);

             await newPage.getByLabel('Secondary').click();
        
             await newPage.getByRole('button', { name: 'Add' }).click();
        
            const first_data_source= await newPage.getByText('Data source added successfully').textContent();
        
            console.log(first_data_source);


            await newPage.locator('td:nth-child(13)').first().click();

            await newPage.getByText('View Data Rows').click();

            await newPage.getByText('Add New Data Row').click();

   await sleep(3000);

   await newPage.locator('#currencyId').selectOption({label:'Indian Rupee (INR)'});

   await newPage.getByPlaceholder('Total Amount').fill('100');

   await newPage.getByPlaceholder('Enter no. of Data Rows').fill('5');

   await newPage.getByRole('button', { name: 'Add' }).click();

   const DataRow_added=await newPage.getByText('Data added successfully.').textContent();

   console.log('User has added data rows in first data source' +DataRow_added);

   await newPage.getByRole('link', { name: 'Data Collection' }).click();

            await newPage.getByRole('link', { name: 'Mapping' }).click();

            await newPage.getByRole('link', { name: 'NGO' }).click();

            await newPage.locator('#dataSourceId').selectOption({label:randomestring1});

            await sleep(2000);

            await newPage.evaluate("$(\"#hf\").click()");

            await newPage.getByRole('cell', { name: ' HF.2 Voluntary health care' }).locator('span').click();

            await newPage.getByRole('row', { name: 'HF.2.1.1.1 Employer-based' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.2.1.1.2 Government-based' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.2.1.1.3 Other primary' }).getByRole('checkbox').check();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(2000);

            await newPage.locator('div').filter({ hasText: /^Percentage$/ }).getByPlaceholder('0').fill('0.11657');

            await sleep(4000);

            await newPage.getByRole('button', { name: 'Add' }).click();

            const error_meesage=await newPage.getByText('The total percentage 100 is').textContent();

            await sleep(4000);

            await console.log('User should get error message :' +error_meesage);

            await newPage.locator('.col-sm-1 > .col-md-auto').click();

            await newPage.getByPlaceholder('Select').nth(3).click();

            await newPage.getByRole('treeitem', { name: ' HF.1 Government schemes and' }).locator('span').first().click();

            await sleep(2000);

            await newPage.getByText('HF.1.1.1 Central government').click();

            await sleep(2000);

            await newPage.locator('#name').fill(randomestring2);

            await newPage.getByRole('button', { name: 'Add' }).click();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(4000);

            await newPage.getByRole('button', { name: 'Reset Mapping' }).click();

            await newPage.getByRole('button', { name: 'Yes' }).click();

            const reset_message=await newPage.getByText('Mapping is reset successfully').textContent();

            await console.log('After reseting of mapping user should get message as: '+reset_message); 

    })

    test('Test Case 4-User able add split rule -with adding all classifications at a time ', async ({browser})=> {


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

        

         //await newPage.locator('li').filter({ hasText: 'Donor' }).click();
        
             await newPage.getByText('Add new data source').click();
        
             await newPage.getByPlaceholder('Enter Data source name').click();
        
            const datasource= await newPage.getByPlaceholder('Enter Data source name').fill(randomestring2);

             await newPage.getByLabel('Secondary').click();
        
             await newPage.getByRole('button', { name: 'Add' }).click();
        
            const first_data_source= await newPage.getByText('Data source added successfully').textContent();
        
            console.log('First data source added : ' +first_data_source);


            await newPage.locator('td:nth-child(13)').first().click();

            await newPage.getByText('View Data Rows').click();

            await newPage.getByText('Add New Data Row').click();

   await sleep(3000);

   await newPage.locator('#currencyId').selectOption({label:'Indian Rupee (INR)'});

   await newPage.getByPlaceholder('Total Amount').fill('100');

   await newPage.getByPlaceholder('Enter no. of Data Rows').fill('5');

   await newPage.getByRole('button', { name: 'Add' }).click();

   const DataRow_added=await newPage.getByText('Data added successfully.').textContent();

   console.log('User has added data rows in first data source' +DataRow_added);

   await newPage.getByRole('link', { name: 'Data Collection' }).click();

            await newPage.getByRole('link', { name: 'Mapping' }).click();

            await newPage.getByRole('link', { name: 'NGO' }).click();

            await sleep(2000);

            await newPage.evaluate("$(\"#fs\").click()");

            await newPage.getByRole('row', { name: ' Classifications' }).getByRole('checkbox').check();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(2000);

            await newPage.locator('#name').fill(randomestring2);

            await newPage.getByRole('button', { name: 'Add' }).click();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(6000);

            await newPage.getByRole('button', { name: 'Reset Mapping' }).click();

            await newPage.getByRole('button', { name: 'Yes' }).click();



    })


    test('Test Case 5-User able add split rule - we are checking exponential value is not comming while adding new split rule ', async ({browser})=> {


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

        

         //await newPage.locator('li').filter({ hasText: 'Donor' }).click();
        
             await newPage.getByText('Add new data source').click();
        
             await newPage.getByPlaceholder('Enter Data source name').click();
        
            const datasource= await newPage.getByPlaceholder('Enter Data source name').fill(randomestring4);

             await newPage.getByLabel('Secondary').click();
        
             await newPage.getByRole('button', { name: 'Add' }).click();
        
            const first_data_source= await newPage.getByText('Data source added successfully').textContent();
        
            console.log(first_data_source);


            await newPage.locator('td:nth-child(13)').first().click();

            await newPage.getByText('View Data Rows').click();

            await newPage.getByText('Add New Data Row').click();

   await sleep(3000);

   await newPage.locator('#currencyId').selectOption({label:'Indian Rupee (INR)'});

   await newPage.getByPlaceholder('Total Amount').fill('100');

   await newPage.getByPlaceholder('Enter no. of Data Rows').fill('5');

   await newPage.getByRole('button', { name: 'Add' }).click();

   const DataRow_added=await newPage.getByText('Data added successfully.').textContent();

   console.log(DataRow_added);

   await newPage.getByRole('link', { name: 'Data Collection' }).click();

            await newPage.getByRole('link', { name: 'Mapping' }).click();

            await newPage.getByRole('link', { name: 'NGO' }).click();

            await newPage.locator('#dataSourceId').selectOption({label:randomestring});

            await sleep(2000);

            await newPage.evaluate("$(\"#fs\").click()");

            await newPage.getByRole('row', { name: ' Classifications' }).getByRole('checkbox').check();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(2000);

            await newPage.locator('#name').fill(randomestring2);

            await newPage.locator('div').filter({ hasText: /^Percentage$/ }).getByPlaceholder('0').fill('0.0000453101');

            await sleep(3000);

            await newPage.getByRole('button', { name: 'Add' }).click();

          const error_message_first=  await newPage.getByText('The total percentage 100 is').textContent();

          await console.log('User is getting error message as :' + error_message_first);

          await newPage.locator('.col-sm-1 > .col-md-auto').click();

          await newPage.locator('div:nth-child(30) > .row > .col-sm-2 > #share').fill('0.0000045689');

          await sleep(5000);

          await newPage.locator('div:nth-child(30) > .row > .col-sm-6 > .custom-select-box > div > .MuiFormControl-root > .MuiInputBase-root > #classificationItemId').click();

          await sleep(2000);

          await newPage.getByRole('tree').getByText('FS.3 Social insurance').click();

          await newPage.getByRole('button', { name: 'Add' }).click();

          const error_meesage_second=await newPage.getByText('The total percentage 100 is').textContent();

          await console.log('User should get another error message as :'+ error_meesage_second);

          await newPage.locator('.col-sm-1 > .MuiButtonBase-root').first().click();
          await sleep(2000);

          await newPage.locator('.col-sm-1 > .col-md-auto').click();
          await sleep(2000);

          await newPage.locator('div:nth-child(30) > .row > .col-sm-6 > .custom-select-box > div > .MuiFormControl-root > .MuiInputBase-root > #classificationItemId').click();
          await sleep(2000);

          await newPage.getByRole('treeitem', { name: ' FS.1 Transfers from' }).locator('span').first().click();
          await sleep(2000);

          await newPage.getByText('FS.1.1 Internal transfers and').click();
          await sleep(2000);

          await newPage.getByRole('button', { name: 'Add' }).click();
          await sleep(2000);

        const error_meesage3=  await newPage.getByText('Split rule not applied due to').textContent();

        console.log('If user selects any mismatch level of mapping then user should get error messsage as :'+ error_meesage3);

         await sleep(2000);


    await newPage.locator('div:nth-child(29) > .row > .col-sm-1 > .MuiButtonBase-root').click();
    await sleep(2000);

    await newPage.locator('div:nth-child(27) > .row > .col-sm-1 > .MuiButtonBase-root').click();
    await sleep(2000);

    await newPage.locator('.col-sm-1 > .col-md-auto').click();
    await sleep(2000);

    await newPage.locator('div:nth-child(29) > .row > .col-sm-6 > .custom-select-box > div > .MuiFormControl-root > .MuiInputBase-root > #classificationItemId').click();
    await sleep(2000);

    await newPage.getByRole('treeitem', { name: ' FS.7 Direct foreign' }).locator('span').first().click();
    await sleep(2000);

    await newPage.getByText('FS.7.3 Other direct foreign').click();
    await sleep(2000);

    await newPage.getByRole('button', { name: 'Add' }).click();

    await sleep(8000);



            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await sleep(6000);

            await newPage.getByRole('button', { name: 'Reset Mapping' }).click();

            await newPage.getByRole('button', { name: 'Yes' }).click();



    })

    
    test('Test Case 6-User able add split rule - checking country & Split rule name is displaying as expected  ', async ({browser})=> {

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
        
         await newPage.locator('li').filter({ hasText: 'NGO' }).click();
        
             await newPage.getByText('Add new data source').click();
        
             await newPage.getByPlaceholder('Enter Data source name').click();
        
             await newPage.getByPlaceholder('Enter Data source name').fill(randomestring);

             await newPage.getByLabel('Secondary').click();
        
             await newPage.getByRole('button', { name: 'Add' }).click();
        
            const first_data_source= await newPage.getByText('Data source added successfully').textContent();
        
            console.log('First data source added : ' +first_data_source);

            await newPage.getByRole('link', { name: 'Mapping' }).click();

            await newPage.locator('li').filter({ hasText: 'NGO' }).click();

            await sleep(2000);

            await newPage.evaluate("$(\"#hf\").click()");

            await newPage.getByRole('cell', { name: ' HF.2 Voluntary health care' }).locator('span').click();

            await newPage.getByRole('row', { name: 'HF.2.1.1.1 Employer-based' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.2.1.1.2 Government-based' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.2.1.1.3 Other primary' }).getByRole('checkbox').check();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await newPage.getByLabel('Yes').check();

            await newPage.locator('#name').fill(randomestring2);

          

            await console.log('Newly added Split rule name is '    +randomestring2);

            await newPage.getByRole('button', { name: 'Add' }).click();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await newPage.getByRole('link', { name: 'Setup', exact: true }).click();

            await newPage.getByRole('link', { name: 'Rules' }).click();

            await newPage.getByRole('link', { name: 'Split Library' }).click();

            await newPage.locator('#country').selectOption({label:'India (IND)'});

           const expected_split_rule= await newPage.getByRole('cell', { name: randomestring2 }).textContent();

            await expect(randomestring2).toBe(expected_split_rule);

           // await newPage.locator('tr:nth-child(6) > td:nth-child(6)').click();

            

          //const Split_rule_name_on_View_Rule_page=  await newPage.getByRole('dialog').getByText('Suyash_').textContent();

          await sleep(2000);

          //console.log(var1);

          await newPage.locator(var1).scrollIntoViewIfNeeded();

          await sleep(2000);

          await newPage.locator(var1).click();

          await newPage.getByText('View Rule').click();

         const Split_rule_name_on_View_Rule_page=await newPage.getByRole('dialog').getByText(randomestring2).textContent();

         //const View_Rule_Name=  await newPage.locator("//label[text()='Split Rule Name']/../div").textContent();

          console.log(Split_rule_name_on_View_Rule_page);

          console.log('Split Rule Name is present on View Rule Page   '+Split_rule_name_on_View_Rule_page );


          await sleep(6000);

          await newPage.getByRole('button', { name: 'OK' }).click();

         
          const clikonstudy1=page.locator('td[title="Suyash_automation"]');
    
    
    const [newPage1]=await Promise.all([
    
        context.waitForEvent('page'),
     
        clikonstudy1.click(),
     
     ])

          

          await newPage1.getByRole('link', { name: 'Mapping' }).click();

          await newPage1.getByRole('link', { name: 'NGO' }).click();

          await newPage1.getByRole('button', { name: 'Reset Mapping' }).click();

          await newPage1.getByRole('button', { name: 'Yes' }).click();

          await sleep(6000);

  


    })

    test('Test Case 7-User able add split rule - Verify user can select old  ', async ({browser})=> {

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

         await newPage.getByRole('link', { name: 'Mapping' }).click();

         await sleep(2000);

            await newPage.evaluate("$(\"#hf\").click()");

            await newPage.getByRole('cell', { name: ' HF.3 Household out-of-' }).locator('span').click();

            await newPage.getByRole('row', { name: 'HF.3.2.1 Cost sharing with' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.3.2.2 Cost sharing with' }).getByRole('checkbox').check();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await newPage.locator('#name').click();
  
            await newPage.locator('#name').fill(randomestring1);

            await newPage.getByRole('button', { name: 'Add' }).click();

            //await newPage.pause();

            await sleep(8000);

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await newPage.getByRole('button', { name: 'Reset Mapping' }).click();

            await newPage.getByRole('button', { name: 'Yes' }).click();

            const first_reset=await newPage.getByText('Mapping is reset successfully').textContent();

            console.log(first_reset);

            await sleep(2000);

            await newPage.evaluate("$(\"#hf\").click()");

            await newPage.getByRole('cell', { name: ' HF.3 Household out-of-' }).locator('span').click();

            await newPage.getByRole('row', { name: 'HF.3.2.1 Cost sharing with' }).getByRole('checkbox').check();

            await newPage.getByRole('row', { name: 'HF.3.2.2 Cost sharing with' }).getByRole('checkbox').check();

            await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

            await newPage.locator('#name').click();
  
            await newPage.locator('#name').fill(randomestring);

            await newPage.getByRole('button', { name: 'Add' }).click();

           const same_split_rule_message= await newPage.getByText('Split rule(s) with the same').textContent();

           console.log('User should get meesage when same categories & % already exists in split lib : ' +same_split_rule_message);
            
           await sleep(8000);

           await newPage.pause();

           await newPage.getByRole('row', { name: 'Suyash_mk HF HF.3.2.1 - 50' }).getByRole('button').click();

           await sleep(2000);

          const classification_mapped_meesage= await newPage.getByText('Classification is mapped').textContent();

          console.log('User able to mapped classification with message as :'+classification_mapped_meesage);

          await sleep(15000);

          await newPage.getByRole('button', { name: 'Reset Mapping' }).click();

          await newPage.getByRole('button', { name: 'Yes' }).click();


    })