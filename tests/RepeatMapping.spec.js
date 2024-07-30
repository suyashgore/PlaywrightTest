const { test,expect } = require('@playwright/test');
import sleep from 'await-sleep';


test('Test Case 1-Verify user able to do repeate mapping for : All data rows for the same data source', async ({browser})=> {

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

     //create data source & adding data rows in it

     await newPage.getByRole('link', { name: 'Data Collection' }).click();

     await newPage.locator('li').filter({ hasText: 'NGO' }).click();

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

    await newPage.getByPlaceholder('Enter no. of Data Rows').fill('5');

    await newPage.getByRole('button', { name: 'Add' }).click();

    const DataRow_added=await newPage.getByText('Data added successfully.').textContent();

    console.log('User has added data rows in first data source' +DataRow_added);

    await newPage.getByRole('link', { name: 'Data Collection' }).click();

    await newPage.getByRole('link', { name: 'NGO' }).click();

    //Adding second data source & data rows in it

    await newPage.getByText('Add new data source').click();

    await newPage.getByPlaceholder('Enter Data source name').click();

    await newPage.getByPlaceholder('Enter Data source name').fill('Two12');

    await newPage.getByLabel('Secondary').click();

    await newPage.getByRole('button', { name: 'Add' }).click();

    await newPage.getByRole('row', { name: 'Two12 Actual Secondary 01/23/' }).locator('svg').click();

    await newPage.getByText('View Data Rows').click();

    await newPage.getByText('Add New Data Row').click();

    await sleep(3000);

    await newPage.locator('#currencyId').selectOption({label:'Indian Rupee (INR)'});

    await newPage.getByPlaceholder('Total Amount').fill('100');

    await newPage.getByPlaceholder('Enter no. of Data Rows').fill('5');

    await newPage.getByRole('button', { name: 'Add' }).click();

    await newPage.getByRole('link', { name: 'Data Collection' }).click();

    await newPage.getByRole('link', { name: 'NGO' }).click();

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     await newPage.getByRole('link', { name: 'Mapping' }).click();

     await newPage.getByRole('link', { name: 'NGO' }).click();

     await sleep(10000);

 await newPage.evaluate("$(\"#fs\").click()");

 await sleep(2000);

 await newPage.getByRole('cell', { name: ' FS.3 Social insurance' }).locator('span').click();
 await newPage.getByRole('row', { name: 'FS.3.1 Social insurance' }).getByRole('checkbox').check();
 await newPage.getByRole('row', { name: 'FS.3.2 Social insurance' }).getByRole('checkbox').check();

 await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

 await newPage.locator('#name').click();

 await newPage.locator('#name').fill('qdibqedb');

await newPage.getByRole('button', { name: 'Add' }).click();

await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

await sleep(2000);

 await newPage.evaluate("$(\"#hf\").click()");

 await sleep(2000);

 await newPage.getByRole('row', { name: 'HF.nec Unspecified financing' }).getByRole('checkbox').check();
 await newPage.getByRole('button', { name: 'Map', exact: true }).click();
 const HF_Mapping=await newPage.getByRole('button', { name: 'Map', exact: true }).textContent();

 console.log(HF_Mapping);

    
     await newPage.getByRole('button', { name: 'Repeat Mapping' }).click();

     await newPage.locator('#repeatScope').selectOption({ label: 'All data rows for the same data source' });

     await newPage.locator('#chkClassification').check();

     await newPage.locator('#classificationId').selectOption({ label: 'FS Revenues of health care financing schemes' });

     await newPage.locator('#mappingStatus').selectOption({ label: 'Not mapped to' });

     await newPage.getByText('Classification categories', { exact: true }).click();

     await newPage.getByRole('treeitem', { name: '  FS.1 Transfers from' }).locator('label').check();

    await newPage.locator('#chkMetaDataFields').check();

    await newPage.getByLabel('Logical OR').click();

    await newPage.locator('input[name="checkboxes"]').check();

    await newPage.getByRole('button', { name: 'Next' }).click();

    await newPage.locator('div').filter({ hasText: /^FS Revenues of health care financing schemes$/ }).getByRole('checkbox').check();

    await newPage.getByRole('button', { name: 'Next' }).click();

    await newPage.getByLabel('Unmapped Rows (4)').check();

    await newPage.getByRole('button', { name: 'Repeat' }).click();

   const repeat_mapping_done= await newPage.getByText('Repeat mapping completed', { exact: true }).textContent();

   console.log('User able to do repeat mapping with message ' +repeat_mapping_done)

   await sleep(5000);

   await newPage.getByRole('button', { name: 'Yes' }).click();

  
    
     

})

test('Test Case 2-Verify user able to do repeate mapping for : All data sources for same data source type', async ({browser})=> {

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

    //create data source & adding data rows in it

    await newPage.getByRole('link', { name: 'Data Collection' }).click();

    await newPage.locator('li').filter({ hasText: 'Employer' }).click();

    await newPage.getByText('Add new data source').click();

    await newPage.getByPlaceholder('Enter Data source name').click();

    await newPage.getByPlaceholder('Enter Data source name').fill('One123');

    await newPage.getByLabel('Secondary').click();

    await newPage.getByRole('button', { name: 'Add' }).click();

   const first_data_source= await newPage.getByText('Data source added successfully').textContent();

   console.log('First data source added : ' +first_data_source);

   await newPage.getByRole('row', { name: 'One123 Secondary 01/23/2024' }).locator('svg').click();

   await newPage.getByText('View Data Rows').click();

   await newPage.getByText('Add New Data Row').click();

   await sleep(3000);

   await newPage.locator('#currencyId').selectOption({label:'Indian Rupee (INR)'});

   await newPage.getByPlaceholder('Total Amount').fill('100');

   await newPage.getByPlaceholder('Enter no. of Data Rows').fill('10');

   await newPage.getByRole('button', { name: 'Add' }).click();

   const DataRow_added=await newPage.getByText('Data added successfully.').textContent();

   console.log('User has added data rows in first data source' +DataRow_added);

   await newPage.getByRole('link', { name: 'Data Collection' }).click();

   await newPage.getByRole('link', { name: 'Employer' }).click();

   //Adding second data source & data rows in it

   await newPage.getByText('Add new data source').click();

   await newPage.getByPlaceholder('Enter Data source name').click();

   await newPage.getByPlaceholder('Enter Data source name').fill('Two234');

   await newPage.getByLabel('Secondary').click();

   await newPage.getByRole('button', { name: 'Add' }).click();

   await newPage.getByRole('row', { name: 'Two234 Secondary 01/23/2024' }).locator('svg').click();

   await newPage.getByText('View Data Rows').click();

   await newPage.getByText('Add New Data Row').click();

   await sleep(3000);

   await newPage.locator('#currencyId').selectOption({label:'Indian Rupee (INR)'});

   await newPage.getByPlaceholder('Total Amount').fill('100');

   await newPage.getByPlaceholder('Enter no. of Data Rows').fill('10');

   await newPage.getByRole('button', { name: 'Add' }).click();

   await newPage.getByRole('link', { name: 'Data Collection' }).click();

   await newPage.getByRole('link', { name: 'Employer' }).click();

   //Adding first data source
  
   await newPage.getByRole('link', { name: 'Mapping' }).click();

   await newPage.getByRole('link', { name: 'Employer' }).click();

   await sleep(10000);

 await newPage.evaluate("$(\"#fs\").click()");

 await sleep(2000);

 await newPage.getByRole('cell', { name: ' FS.3 Social insurance' }).locator('span').click();
 await newPage.getByRole('row', { name: 'FS.3.1 Social insurance' }).getByRole('checkbox').check();
 await newPage.getByRole('row', { name: 'FS.3.2 Social insurance' }).getByRole('checkbox').check();

 await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

 await newPage.locator('#name').click();

 await newPage.locator('#name').fill('qdibqedb123');

await newPage.getByRole('button', { name: 'Add' }).click();

await newPage.getByRole('button', { name: 'Add New Split Rule' }).click();

await sleep(2000);

 await newPage.evaluate("$(\"#hf\").click()");

 await sleep(2000);

 await newPage.getByRole('row', { name: 'HF.nec Unspecified financing' }).getByRole('checkbox').check();
 await newPage.getByRole('button', { name: 'Map', exact: true }).click();
 const HF_Mapping=await newPage.getByRole('button', { name: 'Map', exact: true }).textContent();

 console.log(HF_Mapping);

   
   await newPage.getByRole('button', { name: 'Repeat Mapping' }).click();

   await newPage.locator('#repeatScope').selectOption({ label: 'All data sources for same data source type' });

   await newPage.locator('#chkClassification').check();

   await newPage.locator('#classificationId').selectOption({ label: 'FS Revenues of health care financing schemes' });

   await newPage.locator('#mappingStatus').selectOption({ label: 'Not mapped to' });

   await newPage.getByText('Classification categories', { exact: true }).click();

   await newPage.getByRole('treeitem', { name: '  FS.1 Transfers from' }).locator('label').check();

  await newPage.locator('#chkMetaDataFields').check();

  await newPage.getByLabel('Logical OR').click();

  await newPage.locator('input[name="checkboxes"]').check();

  await newPage.getByRole('button', { name: 'Next' }).click();

  await newPage.locator('div').filter({ hasText: /^FS Revenues of health care financing schemes$/ }).getByRole('checkbox').check();

  await newPage.getByRole('button', { name: 'Next' }).click();

  await newPage.getByLabel('Unmapped Rows (19)').check();

  await newPage.getByRole('button', { name: 'Repeat' }).click();

 const repeat_mapping_done= await newPage.getByText('Repeat mapping completed', { exact: true }).textContent();

 console.log('User able to do repeat mapping with message ' +repeat_mapping_done)

 await newPage.getByRole('button', { name: 'Yes' }).click();

 //await newPage.pause();
  
   

})