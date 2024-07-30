import { test, expect } from '@playwright/test';
import sleep from 'await-sleep';

test('test', async ({ page }) => {
  await page.goto("https://whohaptuattest.e-zest.in/hapt");
  await page.getByLabel('Enter your email, phone, or').fill('pranoti.kolhe@e-zest.in');
  await page.getByLabel('Enter your email, phone, or').press('Enter');
  await page.locator('#i0118').fill('ezest@19');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('img', { name: 'Study' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('cell', { name: 'Suyash_automation' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://whohaptuattest.e-zest.in/hapt/Study/381/setup/currencies');
  await page1.getByRole('link', { name: 'Data Collection' }).click();

  await page1.getByRole('link', { name: 'Mapping' }).click();

  //const abc=await page1.locator("#fs_2").isHidden();

 //console.log(abc);

 await sleep(10000);
 await page1.evaluate("$(\"#fs\").click()");
 await sleep(2000);

 await page1.getByRole('cell', { name: ' FS.3 Social insurance' }).locator('span').click();

 await page1.getByRole('row', { name: 'FS.3.1 Social insurance' }).getByRole('checkbox').check();
 await page1.getByRole('row', { name: 'FS.3.2 Social insurance' }).getByRole('checkbox').check();

 await page1.getByRole('button', { name: 'Add New Split Rule' }).click();

 await page1.locator('#name').click();
 await page1.locator('#name').fill('qdibqedb');


await page1.getByRole('button', { name: 'Add' }).click();
await page1.getByRole('button', { name: 'Add New Split Rule' }).click();

//const mapped=await page1.getByText('Classification mapped').textContent();

//console.log('FS is mapped successfully '+mapped);

await sleep(2000);

 await page1.evaluate("$(\"#hf\").click()");
 await sleep(2000);

 await page1.getByRole('row', { name: 'HF.nec Unspecified financing' }).getByRole('checkbox').check();
 await page1.getByRole('button', { name: 'Map', exact: true }).click();
 const HF_Mapping=await page1.getByRole('button', { name: 'Map', exact: true }).textContent();

 console.log(HF_Mapping);

 await page1.pause();

 await page1.evaluate("$(\"#hp_6\").click()");
 await sleep(2000);
 await page1.evaluate("$(\"#hc_9\").click()");

 await page1.pause();


  await page1.getByRole('link', { name: 'Insurance' }).click();
  await page1.getByText('Add new data source').click();
  await page1.getByPlaceholder('Enter Data source name').fill('Test1');
  await page1.getByLabel('Secondary').check();
  await page1.getByRole('button', { name: 'Add' }).click();
  await page1.getByRole('row', { name: 'Test1 Secondary 01/06/2024 12' }).locator('svg').click();
  await page1.getByText('View Data Rows').click();
  await page1.getByText('Add New Data Row').click();

  await page1.locator('#currencyId').selectOption({ label: 'Indian Rupee (INR)' });
  await page1.getByPlaceholder('Enter no. of Data Rows').fill('100');
  await page1.getByPlaceholder('Total Amount').fill('100');

  await page1.getByRole('button', { name: 'Add' }).click();
  
  await page1.getByRole('link', { name: 'Mapping' }).click();
  await page1.getByRole('link', { name: 'Insurance' }).click();
  await page1.getByRole('cell', { name: ' FS.3 Social insurance' }).locator('span').click();
  await page1.getByRole('row', { name: 'FS.3.1 Social insurance' }).getByRole('checkbox').check();
  await page1.getByRole('row', { name: 'FS.3.2 Social insurance' }).getByRole('checkbox').check();
  await page1.getByRole('button', { name: 'Clear Selection' }).click();
  await page1.getByRole('cell', { name: ' FS.3 Social insurance' }).locator('span').click();
  await page1.getByRole('row', { name: 'FS.3.1 Social insurance' }).getByRole('checkbox').click();
  await page1.getByRole('row', { name: 'FS.3.2 Social insurance' }).getByRole('checkbox').check();
  await page1.getByText('All studies Suyash_automation').click();
  await page1.getByRole('button', { name: 'Add New Split Rule' }).click();
  await page1.getByRole('button', { name: 'Add' }).click();
  await page1.locator('#name').click();
  await page1.locator('#name').fill('123');
  await page1.getByRole('button', { name: 'Add' }).click();
  await page1.getByRole('button', { name: 'Add New Split Rule' }).click();
});