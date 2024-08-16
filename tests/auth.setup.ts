import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://demo.growcrm.io/login');
  await page.getByPlaceholder('Email').fill('admin@example.com');
  await page.getByPlaceholder('Password').fill('growcrm');
  await page.getByRole('button', {name: 'Continue'}).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://demo.growcrm.io/home');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page).toHaveTitle('ABC Inc Home')

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});