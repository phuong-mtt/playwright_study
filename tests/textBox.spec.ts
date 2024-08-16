import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/text-box/);
});

test('verify data inputted is correct', async ({ page }) => {
  const productFrame = '//h2[@class="name"]//parent::div'
  
  await page.goto('https://www.demoblaze.com/');
  // click element
  await page.locator('//a[text()= "Samsung galaxy s6"]').click()
  
  // verify product is correct
  await expect(page.locator("//h2[@class='name']")).toHaveText("Samsung galaxy s6");
  
  //get price + desc
  const price = productFrame + '/h3'
  const desc = productFrame + '/div[@class="description description-tabs"]/div/div/p'
  console.log(page.locator(price).textContent());
  console.log(page.locator(desc).textContent());
  await expect(page.locator(price)).toContainText("$360");
  let actualDescWithBreakingLine = await page.locator(desc).evaluate(el => el.textContent);
  const actualDesc = actualDescWithBreakingLine.replace(/[\r\n]+/g, ' ').replace(/\s+/g, '').toLowerCase()
  const expectDesc ="The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.".replace(/\s+/g, '').toLowerCase();
  expect(actualDesc).toEqual(expectDesc)
})
