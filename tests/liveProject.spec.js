import { test, expect } from '@playwright/test';

test('web app security login', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/login.html');

  //type username
  await page.getByLabel('Login').fill('dtennison')

  //type password
  await page.getByLabel('Password').fill('password123')

  //click the checkbox
  await page.getByLabel('Keep me signed in').click()


  
});

test('Automation project', async ({ page }) => {

    await page.goto("https://www.automationtesting.co.uk/index.html")

    //close banner
    await page.locator('a').filter({ hasText: '×' }).click()

    //click toggle
    await page.getByRole('link', { name: ' Toggle' }).click()

    //click button on the menu
    await page.getByRole('link', { name: 'DropDown Checkbox Radio' }).click()

    //click on link
    await page.getByRole('link', { name: 'Cucumber BDD with Selenium &' }).click()
    
})
