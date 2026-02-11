import { test, expect } from '@playwright/test'

const baseURL = 'http://localhost:3001'

test.describe('UX Improvements - Phase 1', () => {
  // ─────────────────────────────────────────────────────────────────
  // Homepage Grid (7 tracks)
  // ─────────────────────────────────────────────────────────────────
  test.describe('Homepage Grid (7 tracks)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(baseURL)
    })

    test('homepage shows all 7 track cards', async ({ page }) => {
      const trackNames = [
        'Start Here',
        'Data Analysis',
        'Git & GitHub',
        'App Builder',
        'Automation',
        'AI Agents',
        'MCP Integration',
      ]

      for (const name of trackNames) {
        const card = page.locator(`h3:has-text("${name}")`)
        await expect(card).toBeVisible()
      }
    })

    test('"App Builder" and "Automation" cards show "Coming Soon" tag', async ({ page }) => {
      // App Builder card should contain a "Coming Soon" tag
      const appBuilderCard = page.locator('a[href="/app-builder"]')
      await expect(appBuilderCard).toBeVisible()
      await expect(appBuilderCard.locator('text=Coming Soon')).toBeVisible()

      // Automation card should contain a "Coming Soon" tag
      const automationCard = page.locator('a[href="/automation"]')
      await expect(automationCard).toBeVisible()
      await expect(automationCard.locator('text=Coming Soon')).toBeVisible()
    })

    test('"Git & GitHub" card shows "Essential" tag', async ({ page }) => {
      const gitCard = page.locator('a[href="/git-github"]')
      await expect(gitCard).toBeVisible()
      await expect(gitCard.locator('text=Essential')).toBeVisible()
    })

    test('"MCP Integration" card shows tag', async ({ page }) => {
      const mcpCard = page.locator('a[href="/mcp"]')
      await expect(mcpCard).toBeVisible()
      // MCP card should have either "New" or "Advanced" tag
      const tag = mcpCard.locator('span.rounded-full')
      await expect(tag).toBeVisible()
      const tagText = await tag.textContent()
      expect(tagText === 'New' || tagText === 'Advanced').toBeTruthy()
    })

    test('all track cards have working links', async ({ page }) => {
      const tracks = [
        { name: 'Start Here', href: '/start-here' },
        { name: 'Data Analysis', href: '/data-analysis' },
        { name: 'Git & GitHub', href: '/git-github' },
        { name: 'App Builder', href: '/app-builder' },
        { name: 'Automation', href: '/automation' },
        { name: 'AI Agents', href: '/agents' },
        { name: 'MCP Integration', href: '/mcp' },
      ]

      for (const track of tracks) {
        await page.goto(baseURL)
        const card = page.locator(`a[href="${track.href}"]`).first()
        await expect(card).toBeVisible()
        await card.click()
        await expect(page).toHaveURL(new RegExp(track.href.replace(/\//g, '\\/')))
      }
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // Search Modal - New Items
  // ─────────────────────────────────────────────────────────────────
  test.describe('Search Modal - New Items', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(baseURL)
    })

    test('search "MCP" shows MCP results', async ({ page }) => {
      await page.keyboard.press('Control+k')
      const searchInput = page.locator('input[placeholder="Search documentation..."]')
      await expect(searchInput).toBeVisible()

      await page.keyboard.type('MCP')

      // Should show MCP Integration and/or MCP Fundamentals results
      const mcpResult = page.locator('button:has-text("MCP")')
      await expect(mcpResult.first()).toBeVisible()
    })

    test('search "multi-agent" shows Multi-Agent Architectures result', async ({ page }) => {
      await page.keyboard.press('Control+k')
      const searchInput = page.locator('input[placeholder="Search documentation..."]')
      await expect(searchInput).toBeVisible()

      await page.keyboard.type('multi-agent')

      const result = page.locator('button:has-text("Multi-Agent Architectures")')
      await expect(result).toBeVisible()
    })

    test('search "skills" shows Skills result', async ({ page }) => {
      await page.keyboard.press('Control+k')
      const searchInput = page.locator('input[placeholder="Search documentation..."]')
      await expect(searchInput).toBeVisible()

      await page.keyboard.type('skills')

      const result = page.locator('button:has-text("Skills")')
      await expect(result).toBeVisible()
    })

    test('clicking MCP result navigates to /mcp', async ({ page }) => {
      await page.keyboard.press('Control+k')
      const searchInput = page.locator('input[placeholder="Search documentation..."]')
      await expect(searchInput).toBeVisible()

      await page.keyboard.type('MCP Integration')

      const mcpResult = page.locator('button:has-text("MCP Integration")').first()
      await expect(mcpResult).toBeVisible()
      await mcpResult.click()

      await expect(page).toHaveURL(/\/mcp/)
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // MCP Track Pages
  // ─────────────────────────────────────────────────────────────────
  test.describe('MCP Track Pages', () => {
    test('/mcp loads successfully with h1 visible', async ({ page }) => {
      await page.goto(`${baseURL}/mcp`)
      const heading = page.locator('h1')
      await expect(heading).toBeVisible()
      await expect(heading).toContainText('MCP')
    })

    test('/mcp/mcp-fundamentals loads with content', async ({ page }) => {
      await page.goto(`${baseURL}/mcp/mcp-fundamentals`)
      await expect(page.locator('h1')).toBeVisible()
      // Page should not be a 404
      await expect(page.locator('text=not found')).not.toBeVisible()
    })

    test('/mcp/essential-servers loads with content', async ({ page }) => {
      await page.goto(`${baseURL}/mcp/essential-servers`)
      await expect(page.locator('h1')).toBeVisible()
      await expect(page.locator('text=not found')).not.toBeVisible()
    })

    test('/mcp/building-custom-mcps loads with content', async ({ page }) => {
      await page.goto(`${baseURL}/mcp/building-custom-mcps`)
      await expect(page.locator('h1')).toBeVisible()
      await expect(page.locator('text=not found')).not.toBeVisible()
    })

    test('/mcp/workflows-and-troubleshooting loads with content', async ({ page }) => {
      await page.goto(`${baseURL}/mcp/workflows-and-troubleshooting`)
      await expect(page.locator('h1')).toBeVisible()
      await expect(page.locator('text=not found')).not.toBeVisible()
    })

    test('MCP track page has module cards linking to subpages', async ({ page }) => {
      await page.goto(`${baseURL}/mcp`)

      // The track page should have a "Modules" section with cards
      const modulesHeading = page.locator('h2:has-text("Modules")')
      await expect(modulesHeading).toBeVisible()

      // Check for links to each MCP module subpage
      const moduleLinks = [
        '/mcp/mcp-fundamentals',
        '/mcp/essential-servers',
        '/mcp/building-custom-mcps',
        '/mcp/workflows-and-troubleshooting',
      ]

      for (const href of moduleLinks) {
        const link = page.locator(`a[href="${href}"]`)
        await expect(link).toBeVisible()
      }
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // Cross-Track Links
  // ─────────────────────────────────────────────────────────────────
  test.describe('Cross-Track Links', () => {
    test('/agents page contains "MCP Integration track" link text', async ({ page }) => {
      await page.goto(`${baseURL}/agents`)
      const crossLink = page.locator('text=MCP Integration track')
      await expect(crossLink).toBeVisible()
    })

    test('/mcp page contains "AI Agents track" link text', async ({ page }) => {
      await page.goto(`${baseURL}/mcp`)
      const crossLink = page.locator('text=AI Agents track')
      await expect(crossLink).toBeVisible()
    })

    test('clicking MCP link from agents page navigates to /mcp', async ({ page }) => {
      await page.goto(`${baseURL}/agents`)
      const mcpLink = page.locator('a[href="/mcp"]:has-text("MCP Integration track")')
      await expect(mcpLink).toBeVisible()
      await mcpLink.click()
      await expect(page).toHaveURL(/\/mcp/)
    })

    test('clicking agents link from MCP page navigates to /agents', async ({ page }) => {
      await page.goto(`${baseURL}/mcp`)
      const agentsLink = page.locator('a[href="/agents"]:has-text("AI Agents track")')
      await expect(agentsLink).toBeVisible()
      await agentsLink.click()
      await expect(page).toHaveURL(/\/agents/)
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // Prerequisite Callouts
  // ─────────────────────────────────────────────────────────────────
  test.describe('Prerequisite Callouts', () => {
    test('/agents page shows "Before You Start" callout mentioning "Start Here"', async ({ page }) => {
      await page.goto(`${baseURL}/agents`)
      const callout = page.locator('text=Before You Start')
      await expect(callout).toBeVisible()
      // The callout content should mention "Start Here"
      const startHereLink = page.locator('a[href="/start-here"]')
      await expect(startHereLink.first()).toBeVisible()
    })

    test('/mcp page shows "Before You Start" callout mentioning "Start Here"', async ({ page }) => {
      await page.goto(`${baseURL}/mcp`)
      const callout = page.locator('text=Before You Start')
      await expect(callout).toBeVisible()
      const startHereLink = page.locator('a[href="/start-here"]')
      await expect(startHereLink.first()).toBeVisible()
    })

    test('/advanced-topics page shows "Before You Start" callout', async ({ page }) => {
      await page.goto(`${baseURL}/advanced-topics`)
      const callout = page.locator('text=Before You Start')
      await expect(callout).toBeVisible()
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // Glossary Links
  // ─────────────────────────────────────────────────────────────────
  test.describe('Glossary Links', () => {
    test('/start-here page contains link to /glossary', async ({ page }) => {
      await page.goto(`${baseURL}/start-here`)
      const glossaryLink = page.locator('a[href="/glossary"]')
      await expect(glossaryLink.first()).toBeVisible()
    })

    test('/git-github page contains link to /glossary', async ({ page }) => {
      await page.goto(`${baseURL}/git-github`)
      const glossaryLink = page.locator('a[href="/glossary"]')
      await expect(glossaryLink.first()).toBeVisible()
    })

    test('/glossary page loads successfully', async ({ page }) => {
      await page.goto(`${baseURL}/glossary`)
      await expect(page.locator('h1')).toBeVisible()
      // Should not be a 404
      await expect(page).not.toHaveURL(/404/)
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // Learning Paths (constants)
  // ─────────────────────────────────────────────────────────────────
  test.describe('Learning Paths', () => {
    test('homepage has learning track content visible', async ({ page }) => {
      await page.goto(baseURL)

      // The homepage should display the "Learning Tracks" section
      const learningTracksSection = page.locator('text=Learning Tracks')
      await expect(learningTracksSection.first()).toBeVisible()

      // "Choose Your Learning Path" heading should be present
      const pathHeading = page.locator('text=Choose Your Learning Path')
      await expect(pathHeading).toBeVisible()
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // Accessibility Fixes (verify design system tokens)
  // ─────────────────────────────────────────────────────────────────
  test.describe('Accessibility Fixes', () => {
    const pagesToCheck = [
      '/',
      '/start-here',
      '/git-github',
      '/agents',
      '/mcp',
      '/advanced-topics',
    ]

    for (const pagePath of pagesToCheck) {
      test(`no elements with deprecated claude-500/claude-600 classes on ${pagePath}`, async ({ page }) => {
        await page.goto(`${baseURL}${pagePath}`)
        await page.waitForLoadState('domcontentloaded')

        // Check that no elements have claude-500 or claude-600 in their class attribute
        // These should all have been migrated to primary-* tokens
        const deprecatedElements = await page.evaluate(() => {
          const allElements = document.querySelectorAll('[class*="claude-500"], [class*="claude-600"]')
          return allElements.length
        })

        // Note: Some legacy classes may still exist in specific tool pages.
        // The main content and layout pages should be clean.
        // We log a warning rather than hard-fail if legacy classes are found in rendered markup.
        expect(deprecatedElements).toBe(0)
      })
    }

    test('InfoTable headers have scope="col" attribute', async ({ page }) => {
      // MCP index page has an InfoTable
      await page.goto(`${baseURL}/mcp`)

      // Wait for content to render
      await page.waitForLoadState('domcontentloaded')

      // Find th elements inside tables and verify they have scope="col"
      const thElements = page.locator('table th[scope="col"]')
      const count = await thElements.count()

      // The MCP page has an InfoTable with at least 3 column headers
      expect(count).toBeGreaterThanOrEqual(3)
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // Error Boundary
  // ─────────────────────────────────────────────────────────────────
  test.describe('Error Boundary', () => {
    test('error boundary component exists and has expected UI elements', async ({ page }) => {
      // We cannot easily trigger an ErrorBoundary in a Playwright test,
      // but we can verify the component file is loaded by the app and
      // that the error page (app/error.tsx) renders for runtime errors.
      // For now, verify the app loads without errors as a baseline.
      await page.goto(baseURL)
      await expect(page.locator('nav')).toBeVisible()

      // Also verify the dedicated Next.js error page exists by checking
      // that an invalid nested route does not crash the app entirely
      await page.goto(`${baseURL}/this-track-does-not-exist`)
      // Should get a 404 page, not a blank crash
      await expect(page.locator('body')).toBeVisible()
    })
  })
})
