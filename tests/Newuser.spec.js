import {test,expect} from '@playwright/test';
import NewAccount from '../Pages/NewAccount.js'
import PersonalDetails from '../Utils/PersonalDetails.json' with {type:'json'}
import Password from '../Utils/Password.json' with {type:'json'}
let r;
test.beforeEach(async({page})=>
{
//Object creation
    r=new NewAccount(page)
//Opening URL
await r.Openapp()  
});
test('New Account creation', async({page})=>{
await r.enterpersonaldetails(PersonalDetails.firstname,
        PersonalDetails.lastname,PersonalDetails.Email,
        PersonalDetails.Telephone);
await r.filladdress();
//Data-driven
await r.enterpassword(Password)
await r.privacycheck();
//await page.pause()
console.log("Title:",await page.title());
console.log("URL:",await page.url());
await expect(page).toHaveURL('https://www.cakehut.in/index.php?route=account/success');
await expect(page).toHaveTitle('Your Account Has Been Created!')
});

