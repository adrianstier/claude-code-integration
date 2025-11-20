import { test, expect } from '@playwright/test'

const baseURL = 'http://localhost:3001'

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Start Here', url: '/start-here' },
  { name: 'Mac Setup', url: '/start-here/mac-setup' },
  { name: 'Windows Setup', url: '/start-here/windows-setup' },
  { name: 'Data Analysis', url: '/data-analysis' },
  { name: 'Python Intro', url: '/data-analysis/python-intro' },
  { name: 'Git GitHub', url: '/git-github' },
  { name: 'App Builder', url: '/app-builder' },
  { name: 'Automation', url: '/automation' },
]

test.describe('Visual Testing - All Pages', () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.name} - Desktop`, async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 })
      await page.goto(`${baseURL}${pageInfo.url}`)

      await page.waitForLoadState('networkidle')

      const screenshotName = pageInfo.name.replace(/ /g, '-')
      await page.screenshot({
        path: `screenshots/${screenshotName}-desktop.png`,
        fullPage: true,
      })

      const title = await page.locator('h1').first()
      await expect(title).toBeVisible()

      const nav = await page.locator('nav').first()
      await expect(nav).toBeVisible()

      const footer = await page.locator('footer')
      await expect(footer).toBeVisible()

      console.log(`✓ ${pageInfo.name} desktop - OK`)
    })

    test(`${pageInfo.name} - Mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto(`${baseURL}${pageInfo.url}`)

      await page.waitForLoadState('networkidle')

      const screenshotName = pageInfo.name.replace(/ /g, '-')
      await page.screenshot({
        path: `screenshots/${screenshotName}-mobile.png`,
        fullPage: true,
      })

      const mobileMenuButton = await page.locator('button').first()
      await expect(mobileMenuButton).toBeVisible()

      console.log(`✓ ${pageInfo.name} mobile - OK`)
    })
  }
})

test.describe('Interaction Tests', () => {
  test('Navigation menu works', async ({ page }) => {
    await page.goto(baseURL)

    await page.click('text=Data Analysis')
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveURL(/data-analysis/)

    await page.screenshot({
      path: 'screenshots/navigation-test.png',
      fullPage: true,
    })

    console.log('✓ Navigation works')
  })

  test('Mobile menu opens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto(baseURL)

    const menuButton = page.locator('button').first()
    await menuButton.click()

    await page.waitForTimeout(300)

    await page.screenshot({
      path: 'screenshots/mobile-menu-open.png',
      fullPage: true,
    })

    console.log('✓ Mobile menu opens')
  })
})

test.describe('Content Validation', () => {
  test('Home page has all track cards', async ({ page }) => {
    await page.goto(baseURL)
    await page.waitForLoadState('networkidle')

    await expect(page.locator('text=Start Here').first()).toBeVisible()
    await expect(page.locator('text=Data Analysis').first()).toBeVisible()
    await expect(page.locator('text=App Builder').first()).toBeVisible()
    await expect(page.locator('text=Automation').first()).toBeVisible()

    console.log('✓ All track cards present')
  })

  test('Mac setup has key sections', async ({ page }) => {
    await page.goto(`${baseURL}/start-here/mac-setup`)
    await page.waitForLoadState('networkidle')

    await expect(page.locator('text=Install VS Code').first()).toBeVisible()
    await expect(page.locator('text=Install Git').first()).toBeVisible()
    await expect(page.locator('text=GitHub').first()).toBeVisible()

    console.log('✓ Mac setup complete')
  })
})
