class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.signInBtn = page.getByRole('button',{name : "Login"});
        this.userEmail = page.getByPlaceholder('email@example.com');
        this.userPassword = page.getByPlaceholder('enter your passsword');
        this.waitdashboardPage = page.locator('.card-body');
    }


    async goTo()
    {
        this.page.goto("https://rahulshettyacademy.com/client/");
    }
    
    async login(email,password)
    {
        await this.userEmail.fill(email);
        await this.userPassword.fill(password);
        await this.signInBtn.click();
        await this.waitdashboardPage.first().waitFor();
   }
}
module.exports = LoginPage;