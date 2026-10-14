export default class Purchase{
    constructor(page)
    {
        this.page=page;
        this.email=page.getByPlaceholder('E-Mail Address')
        this.password=page.locator('#input-password');
        this.loginbtn=page.getByRole('button',{name:'Login'});
        //purchase cake
        this.Xmascakes=page.getByRole('link', {name:'X-Mas And New Year cakes'});
        this.searchbtn = page.getByRole('textbox', { name: 'Search' });        
        this.selectedItem= page.getByRole('link',{name:'Red Velvet Cake'}).nth(2);
        //enter cake details
        this.cakeweight=page.locator('#input-option780')
        this.msg=page.locator('#input-option782');
        this.timeslot=page.locator('#input-option783')
        this.addtocart = page.locator('#button-cart');
        this.cartItemscount = page.locator('#cart-items');
    }
    async oppapplication(){
       await this.page.goto('https://www.cakehut.in/index.php?route=account/login')
    }
    async loginpage(data)
    {
        await this.email.fill(data.emailaddress);
        await this.password.fill(data.password);
        await this.loginbtn.click();

    }

    async purchaseitem()
    {
        await this.Xmascakes.click();
        await this.searchbtn.fill('Red Velvet');
        await this.searchbtn.press('Enter');
        await this.selectedItem.click();
    }
    async enterdetails()
    {
        //await this.cakeweight.click();
        await this.cakeweight.selectOption('1 Kg')
        await this.msg.fill('Happy Bday')
       // await this.timeslot.click();
        await this.timeslot.selectOption('Any Time');
        await this.addtocart.click();
    }
     async verifyCartCount() {
        await expect(this.cartItemscount).toHaveText('1');
    }

    
}