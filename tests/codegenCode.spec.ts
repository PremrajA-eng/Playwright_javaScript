import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('prem');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('raj@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('pune');
  await page.locator('#permanentAddress').fill('washim');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#email')).toContainText('Email:raj@gmail.com');
});