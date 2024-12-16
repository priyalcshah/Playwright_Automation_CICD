const {test, expect} = require('@playwright/test');



test('Login', async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();

const userEmail = page.locator('#userEmail');
const userPassword = page.locator('#userPassword');
const loginButton = page.locator('#login');
const products =  page.locator('.card-body');
const productName = 'ZARA COAT 3';

await page.goto("https://rahulshettyacademy.com/client/");

await userEmail.fill('test@sfaplay.com');
await userPassword.fill('Password@100');
await loginButton.click();
await expect(page).toHaveTitle("Let's Shop");
await page.waitForLoadState('networkidle'); 
//await expect(page.locator('.card-body')).toHaveText('Zara Coat 3');
//console.log(await page.locator('.card-body').nth(0).textContent());
const list = await page.locator('.card-body b').allTextContents();
console.log(list);

const count = await products.count();

for(let i=0;i<count;i++){
    if(await products.nth(i).locator("b").textContent() === productName)
    {
    await products.nth(i).locator("text=Add to Cart").click();
    break;
    }  
                        }
    await page.locator('[routerlink*="cart"]').click(); 
    await page.locator('div li').first().waitFor();
    const bool = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
    expect(bool).toBeTruthy();
    await page.locator('button:has-text("Checkout")').click();
    await page.pause ();


})