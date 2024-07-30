const { test,expect } = require('@playwright/test');
let page;

test.describe("Smoke test cases for Rahul Demo website",()=>{

test.beforeEach(async({browser})=>{

    //login code
      page=await browser.newPage();
      await page.goto("https://rahulshettyacademy.com/client");
      await page.getByPlaceholder('email@example.com').click();
      await page.getByPlaceholder('email@example.com').fill('suyashgore2111@gmail.com');
      await page.getByPlaceholder('enter your passsword').click();
      await page.getByPlaceholder('enter your passsword').fill('Target@7001');
      await page.getByRole('button', { name: 'Login' }).click();

});

test.afterEach(async()=>{

    //Logout code
await page.getByRole('button', { name: 'Sign Out' }).click();

});

    test('TC_001_Verify homepage after valid login details', async function({}){
  //Homepage
  const homepagename=await page.getByRole('link', { name: 'Automation Automation Practice' }).textContent();
})

test('TC_002_User able to place order successfully', async function({}){


  //Product adding process
  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
  await page.getByRole('button', { name: ' Cart 3' }).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).fill('123');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('suyashgore');
  await page.getByPlaceholder('Select Country').click();
  await page.getByPlaceholder('Select Country').fill('india');
  await page.getByText('Place Order').click();



})

})


