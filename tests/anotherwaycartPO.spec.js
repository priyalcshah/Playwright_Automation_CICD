const {test, expect} = require('@playwright/test');
const POManager = require('../pageObjects/POManager.js'); 



test('POManagerFlow', async ({page})=>
    {
//const context = await browser.newContext();
//const page = await context.newPage();

const email = 'test@sfaplay.com';
const password = 'Password@100';
// const userEmail = page.locator('#userEmail');
// const userPassword = page.locator('#userPassword');
// const loginButton = page.locator('#login');
// const products =  page.locator('.card-body');
// const productName = 'ZARA COAT 3';

const pom = new POManager(page);
const lpage = pom.getLoginPage();
const dashboardPage = pom.getDashboardPage();
const placeorderPage = pom.getPlaceorderPage();
//Loginpage
await lpage.goTo();
await lpage.login(email,password);
await expect(page).toHaveTitle("Let's Shop");

//Dashboardpage and add order
await dashboardPage.searchProduct();

//place order
await placeorderPage.Order();
await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();

await page.pause();
})