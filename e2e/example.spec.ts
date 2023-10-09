import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: '/admins/', exact: true }).click();
  await page.locator('html').click();
  await page.getByRole('link', { name: 'View' }).click();
  await page.getByRole('link', { name: 'Back to all Admins' }).click();

  const newURL = page.url();
  const response = await page.goto(newURL);
  if (response !== null) {
      const statusCode = response.status();
      expect(statusCode).toBe(200);
  }
  await expect(page).toHaveURL(/admins/);
});