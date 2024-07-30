const {test,expect}= require('@playwright/test');

test('User able to login to Swag Labs application with valid data',async({page})=>{


await page.goto('https://www.saucedemo.com/');

await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();


await page.waitForLoadState();

const Product_Name='Sauce Labs Bolt T-Shirt';

const AllProducts=await page.locator('.inventory_item_description').allTextContents();

await console.log(AllProducts);
await page.pause();

const products_Count=await page.locator('.inventory_item_description').count();
await console.log(products_Count);







const names=await AllProducts.textContent();
console.log(names);

await page.pause();

for(let i=0; i<products_Count;i++){

   if( await AllProducts.nth(i).locator('[data-test="item-4-title-link"]').textContent()=== Product_Name){


await AllProducts.nth(i).locator("//button[@class='btn btn_primary btn_small btn_inventory ']").click();

break;

   }

}

await page.pause();
   
})