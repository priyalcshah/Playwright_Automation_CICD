// Import Playwright module/package annotation from the node module
const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { text } = require('stream/consumers');

test('First test', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('input[value=radio1]').click();
    expect(page.locator('input[value=radio1]')).toBeChecked();

    await page.locator('input[value=radio2]').click();
    expect(page.locator('input[value=radio2]')).toBeChecked();

    await page.locator('input[value=radio3]').click();
    await expect(page.locator('input[value=radio3]')).toBeChecked();
    
    //Method 1 to select value from dropdown instead of forloop
    // await page.getByPlaceholder('Type to Select Countries').pressSequentially('Ind');
    // await page.getByText('India').nth(1).click();
    
   // expect(page.locator('.inputs.ui-autocomplete-input')).toContainText("India");
    

    //Method 1 to select value from dropdown instead of forloop
    await page.getByPlaceholder('Type to Select Countries').pressSequentially('Gui')
    await page.locator('#ui-id-1').filter({hastext: 'Guinea'}).click();
    //expect(page.locator('.inputs.ui-autocomplete-input')).toContainText("Guinea");
    const dropdown = await page.locator('#dropdown-class-example');
    await dropdown.selectOption('option1');
    await dropdown.selectOption('option2');
    await dropdown.selectOption('option3');

    await page.locator('#checkBoxOption2').click();
    await expect(page.locator('#checkBoxOption2')).toBeChecked();
    await page.locator('#checkBoxOption3').click();
    await page.locator('#checkBoxOption3').uncheck();

    // const [newPage] = await Promise.all(
    // [context.waitForEvent('page'), 
    // await page.locator('#opentab').click()
    // ])
    
    // const text = await newPage.locator('span:has-text("info@qaclickacademy.com")').nth(1).textContent('info@qaclickacademy.com');
    // console.log(text);
    // await expect(newPage).toHaveURL('https://www.qaclickacademy.com/');

    await page.getByPlaceholder('Enter Your Name').fill('Priyal');
    await page.locator('#confirmbtn').click();
    await page.on('dialog',dialog=> dialog.accept());

     // await page.getByPlaceholder('Enter Your Name').fill('Priyal');
    // await page.locator('#alertbtn').click();
    // await page.on('dialog', dialog=> dialog.dismiss());

    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();

    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

   
    await page.pause();

})