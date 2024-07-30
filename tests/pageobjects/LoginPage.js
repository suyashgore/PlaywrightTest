class Login{


constructor(page){

this.page=page;
this.inspect_mailid=page.click('id=i0116');
this.mailid=page.locator('id=i0116');
this.Next_button=page.click('id=idSIButton9')
this.password=page.locator('id=i0118');
this.signin=page.getByRole('button', { name: 'Sign in' });
this.Stay_signed_in_Yes=page.getByRole('button', { name: 'Yes' });
this.inspect_password=page.click('id=i0118');

}
   
    
    async validlogin(){


    await this.inspect_mailid;
    
    await this.mailid.fill('pranoti.kolhe@e-zest.in');
    
    await this.Next_button;
    
    await this.inspect_password;
    
    await this.password.fill('ezest@19');
     
    await this.signin.click();
    
    await this.Stay_signed_in_Yes.click();

    
}

    async landonLoginPage(){

        await this.page.goto("https://whohaptuattest.e-zest.in/hapt");
}


}

module.exports={Login};
