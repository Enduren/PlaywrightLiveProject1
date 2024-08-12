import { test, expect } from '@playwright/test';

test('web app security login', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/login.html');
  
});

test('Automation project', async ({ page }) => {

    await page.goto("https://www.automationtesting.co.uk/index.html")
    
})
