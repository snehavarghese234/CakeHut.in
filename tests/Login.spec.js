import {test,expect} from '@playwright/test'
import Userlogin from '../Pages/Userlogin'
import LoginCredentials from '../Utils/LoginCredentials.json' with {type:'json'}
let ln;
test.beforeEach(async({page})=>{
//Object creation
    ln=new Userlogin(page);
//Opening URL
await ln.openapp(); 
}
)
test('Valid Login', async({page})=>{
    await ln.login(LoginCredentials);
   // console.log("Title:", await page.title());
    await expect(page).toHaveTitle('My Account');
    

})