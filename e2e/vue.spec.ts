import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }, testInfo) => {
  await page.goto('/')
  const screenshot = await page.screenshot()
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' })
  await expect(page.locator('div.greetings > h1')).toHaveText('You did it!')
})
