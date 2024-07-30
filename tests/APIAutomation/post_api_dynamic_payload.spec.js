const {test,expect,request}=require('@playwright/test');
import {faker} from '@faker-js/faker'

const {DateTime}=require ('luxon');

test('Verify POST api request with sending dynamic data',async({request})=>{


   const FirstName= faker.person.firstName();
    const LastName=faker.person.lastName();
    const TotalPrice=faker.number.int(1000);

    const checkin=DateTime.now().toFormat('yyyy-MM-dd');
    const checkout=DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');

   const DynamicAPIResponse= await request.post('https://restful-booker.herokuapp.com/booking',{

        data:
        {

            "firstname": FirstName,
            "lastname": LastName,
            "totalprice": TotalPrice,
            "depositpaid": true,
            "bookingdates": {
                "checkin": checkin,
                "checkout": checkout
            },
            "additionalneeds": "super bowls"
    }
})

expect(DynamicAPIResponse.status()).toBe(200);
expect(DynamicAPIResponse.ok()).toBeTruthy();


const DynamicAPIResponseJSON=await DynamicAPIResponse.json();
console.log(DynamicAPIResponseJSON);

})