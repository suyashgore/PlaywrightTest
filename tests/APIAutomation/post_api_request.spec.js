const {test,expect,request}=require('@playwright/test')

const APIdata_test1=require('../APIAutomation/TestData/CreateBookingPayload.json')
const Generate_Token=require('../APIAutomation/TestData/GenerateTokenPayload.json')

test('TC_01 - Verify POST API request',async({request})=>{


const postAPIresponse=await request.post('https://restful-booker.herokuapp.com/booking',

    {data:APIdata_test1
})

//Assertions for API status code & its "OK"

    expect(postAPIresponse.ok()).toBeTruthy();

    expect(postAPIresponse.status()).toBe(200);



//Convert actual reponse into a JSON format

const postAPIresponseJson=await postAPIresponse.json();

console.log(postAPIresponseJson);



//Actual validations

 expect(postAPIresponseJson.booking).toHaveProperty("firstname", "Suyash")

 expect(postAPIresponseJson.booking.bookingdates).toHaveProperty("checkin", '2018-01-01', "checkout", '2019-01-01')

 expect(postAPIresponseJson.booking).toHaveProperty("additionalneeds", "super bowls  ")


})

test('TC_02 - Verify the POST request for generating the token',async({request})=>{

const token_response=await request.post('https://restful-booker.herokuapp.com/auth',{

    data:Generate_Token
})

//const Generate_Token_Value=await token_response.json();

const TokenValue=await token_response.text();


})