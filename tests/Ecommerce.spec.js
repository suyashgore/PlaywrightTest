const {test,expect}= require('@playwright/test');

test('User able to select specific product from list',async({page})=>{


    const productName='Lafayette Convertible Dress';
    const SecondProduct='Chelsea Tee';
    const AllProducts=await page.locator(".product-info");
    const SelectBlueColor=await page.getByRole('link', { name: 'Blue' });
    const SelectSize=await page.getByRole('link', { name: '8' });
    const ClickOnAddToCart=await page.getByRole('button', { name: 'Add to Cart' });

await page.goto('https://ecommerce.tealiumdemo.com/');

//await page.waitForTimeout(5000);

const count= await AllProducts.count();
await console.log("Count of products present on screen is " +count);


// const final=await AllProducts.nth(0).locator("h3 a").textContent();
// await console.log(final);

//await page.pause();

for(let i=0; i<=count; i++){

   if( await AllProducts.nth(i).locator("h3 a").textContent() === productName)
    
    {
 
        await AllProducts.nth(i).getByRole('link', { name: productName }).click();

     
        break;

   }
}

//Verify same product present on the screen when I selected
await expect(page.locator('span').filter({ hasText: 'Lafayette Convertible Dress' })).toContainText(productName);

SelectBlueColor.click();

SelectSize.click();

ClickOnAddToCart.click();

//await page.getByRole('button', { name: 'Continue Shopping' }).click();

await page.locator('.large').click();

for(let i=0; i<=count; i++){

    if( await AllProducts.nth(i).locator("h3 a").textContent() === SecondProduct)
     
     {
  
         await AllProducts.nth(i).getByRole('link', { name: SecondProduct }).click();
 
      
         break;
 
    }
 }

 await page.getByRole('link', { name: 'Blue' }).click();

 await page.getByRole('link', { name: 'M', exact: true }).click();

 await page.getByRole('button', { name: 'Add to Cart' }).click();


 //We are verifying selected products are present(Visible) on screen

 const bool1=await page.getByRole('heading', { name: productName }).getByRole('link').isVisible();
 expect(bool1).toBeTruthy;

 const bool2=await page.getByRole('heading', { name: SecondProduct }).getByRole('link').isVisible();
 expect(bool2).toBeTruthy;

 await page.getByLabel('*Country').selectOption('India');

 await page.getByLabel('*Zip').pressSequentially('411017');

 await page.getByRole('button', { name: 'Proceed to Checkout' }).nth(1).click();

await page.getByText('Checkout as Guest').isChecked();

await page.getByRole('button', { name: 'Continue' }).click();

await page.pause();
 


})