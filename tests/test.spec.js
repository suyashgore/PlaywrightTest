const { test,expect } = require('@playwright/test');


  const testdata=
    [{
    firstname:"Suyash1",
    lastname:"gore1",
    email:"suyash01@gmail.com",
    number:1234567899,
    Passsword:"Target@70",
    ConfirmPass:"Target@70",
    Loginname:"suyash01@gmail.com",
    loginpass:"Target@70"
},
  {
        firstname:"Suyash2",
        lastname:"gore2",
        email:"suyash02@gmail.com",
        number:1234567891,
        Passsword:"Target@71",
        ConfirmPass:"Target@71",
        Loginname:"suyash02@gmail.com",
        loginpass:"Target@71"
    }
]


testdata.forEach(data =>{

    test('test with set of data', async ({ page }) => {

        await page.goto('https://rahulshettyacademy.com/client/');

    await page.getByText('Register here').click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill(data.firstname);
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill(data.lastname);
    await page.getByPlaceholder('email@example.com').click();
    await page.getByPlaceholder('email@example.com').fill(data.email);
    await page.getByPlaceholder('enter your number').click();
    await page.getByPlaceholder('enter your number').fill(data.number);
    await page.getByRole('combobox').selectOption('3: Engineer');
    await page.getByLabel('Male', { exact: true }).check();
    await page.getByPlaceholder('Passsword', { exact: true }).click();
    await page.getByPlaceholder('Passsword', { exact: true }).fill(data.Passsword);
    await page.getByPlaceholder('Confirm Passsword').click();
    await page.getByPlaceholder('Confirm Passsword').fill(data.ConfirmPass);
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Register' }).click();
    
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByPlaceholder('email@example.com').click();
    await page.getByPlaceholder('email@example.com').fill(data.email);
    await page.getByPlaceholder('enter your passsword').click();
    await page.getByPlaceholder('enter your passsword').fill(data.Passsword);
    await page.getByRole('button', { name: 'Login' }).click();

  })
})

 
 