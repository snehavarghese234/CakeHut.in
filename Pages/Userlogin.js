export default class Userlogin
{
    constructor(page){
        this.page=page;
        this.accountlink=page.getByRole('link',{name:'My Account'}).first()

        this.emailaddress=page.getByPlaceholder('E-Mail Address');
        this.password=page.locator('[name="password"]')
        this.loginbtn=page.getByRole('button',{name:'Login'});
    }
    async openapp()
    {
        await this.page.goto('https://www.cakehut.in/');
        await this.accountlink.click();
    }
    async login(data)
    {
        await this.emailaddress.fill(data.emailaddress);
        await this.password.fill(data.password);
        await this.loginbtn.click();
    }
}