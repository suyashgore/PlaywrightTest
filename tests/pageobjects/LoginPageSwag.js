class LoginPageSwag{


constructor(page){


this.username=page.locator('#user-name');
this.password=page.locator('#password');
this.LoginClick=page.locator('#login-button').click();
    
}


}