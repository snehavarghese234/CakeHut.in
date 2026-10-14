import {test,expect} from '@playwright/test'
import Purchase from '../Pages/Purchase'
import LoginCredentials from '../Utils/LoginCredentials.json' with {type:'json'}
let ln;
//to call pptys and function
test.beforeEach(async({page})=>{
ln=new Purchase(page);//instance creation
await ln.oppapplication();
await ln.loginpage(LoginCredentials);
})
test('Cake Purchase',async({page})=>
{
await ln.purchaseitem();
await ln.enterdetails();
})