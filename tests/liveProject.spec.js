import { test, expect } from '@playwright/test';

test('web app security login', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/login.html');
  
});

test('Automation project', async ({ page }) => {

    await page.goto("https://www.automationtesting.co.uk/index.html")

    //close banner
    await page.locator('a').filter({ hasText: '×' }).click()

    //click toggle
    await page.getByRole('link', { name: ' Toggle' }).click()

    //click button on the menu
    await page.getByRole('link', { name: 'Buttons' }).click()
    
})
