//export default helps import this class into the test file
//Page object class - NewAccount
export default class NewAccount
{
/*constructor is a special method for 
creating and initializing an object created with a class. 
It is called when an instance of the class is created.*/
    constructor(page){ 
        this.page=page;
        //locating elements
        this.accountlink=page.getByRole('link',{name:'My Account'}).first()
        this.Continuebtn=page.locator('.btn.btn-primary').first(); 
        //Personal details
        this.firstname=page.locator('#input-firstname');
        this.lastname=page.locator('#input-lastname');
        this.email=page.locator('#input-email');
        this.telephone=page.locator('#input-telephone');
        this.address=page.locator('#input-address-1');
        this.city=page.getByPlaceholder('City');
        this.country=page.locator('#input-country');
        this.postcode=page.locator('#input-postcode');
        this.region=page.getByLabel('Region / State')
        this.password=page.locator('#input-password');
        this.confirmpassword=page.locator('#input-confirm');
        this.privacypolicy=page.locator('[name="agree"]');
        this.submitbtn = page.getByRole('button', { name: 'Continue' });    
        

    }
    async Openapp()
    {
            await this.page.goto('https://www.cakehut.in/');
            await this.accountlink.click();
            await this.Continuebtn.click();
    }

    /*Data driven
     async enterpersonaldetails(data)
    {
        await this.firstname.fill(data.firstname);
        await this.lastname.fill(data.lastname);
        await this.email.fill(data.email);
        await this.telephone.fill(data.telephone);

    }*/
    async enterpersonaldetails(firstname,lastname,email,telephone)
    {
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
    }
    async filladdress()
    {
        await this.address.fill("Rosevilla");
        await this.city.fill("Kochi")
        await this.postcode.fill("689510")
        //Dropdown: value, visible text, index
        await this.country.selectOption('India');
          // Select region
        await this.region.selectOption('1490');


  
       // await this.region.selectOption({label:'Kerala'});//({index:1490})  
       // await this.region.dispatchEvent('change');
 
    }
    async enterpassword(data)
    {
        await this.password.fill(data.password);
        await this.confirmpassword.fill(data.confirmpassword);
    }
    async privacycheck()
    {
        await this.privacypolicy.check();
        await this.region.selectOption({label:'Kerala'});//({index:1490})   
        await this.submitbtn.click();


    }
}