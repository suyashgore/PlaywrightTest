exports.DataCollection=

class DataCollection{
  constructor(page){

        this.page=page;
        this.Donor=page.getByRole('link', { name: 'Donor' });
        this.Ngo=page.getByRole('link', { name: 'NGO' });
        this.Employer=page.getByRole('link', { name: 'Employer' });
        this.Insurance=page.getByRole('link', { name: 'Insurance' });
        this.Government=page.getByRole('link', { name: 'Government' });
        this.Miscellaneous=page.getByRole('link', { name: 'Miscellaneous' });
        this.Household=page.getByRole('link', { name: 'Household' });
        this.Provider=page.getByRole('link', { name: 'Provider' });
        
        }

        async clickonDonor(){

           await this.Donor.click();
    }

    async clickonNgo(){

        await this.Ngo.click();
 }



}

