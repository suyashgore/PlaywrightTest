class HomePage{


    constructor(page){


        this.page=page;
    this.findstudy=page.getByRole("link",{name :"Study"}); 
    this.selectstudy=page.locator('td[title="Suyash_automation"]');
    }
       
    async clickstudy(){

await page.findstudy.click();

await page.selectstudy.click();
    }

    }

    module.exports={HomePage};