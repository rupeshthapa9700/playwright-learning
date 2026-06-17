const {test, expect} = require('@playwright/test');

test('Google search test', async ({ page}) => {
  await page.goto('https://www.google.com');

  await page.waitForTimeout(2000);

  await page.getByRole('combobox').fill('Playwright');

  await page.waitForTimeout(5000);
});