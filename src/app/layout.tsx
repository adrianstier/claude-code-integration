import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ProgressProvider } from '@/components/ProgressTracker'
import { ThemeProvider } from '@/components/ThemeProvider'
import {
  getBaseMetadata,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateLearningResourceSchema,
  generateSoftwareApplicationSchema,
  siteConfig,
} from '@/lib/metadata'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Comprehensive SEO metadata
export const metadata: Metadata = {
  ...getBaseMetadata(),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: {
    'google-site-verification': 'CQhdFkuB-aPgF3irSWBz5UwZEe7kHb3BxpSfAR0h0WA',
    'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
  },
}

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate JSON-LD structured data for the entire site
  const websiteSchema = generateWebsiteSchema()
  const organizationSchema = generateOrganizationSchema()
  const learningResourceSchema = generateLearningResourceSchema()
  const softwareApplicationSchema = generateSoftwareApplicationSchema()

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data for AI and Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(learningResourceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${siteConfig.name} RSS Feed`}
          href={`${siteConfig.url}/blog/feed.xml`}
        />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/og-image.png" />

        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ProgressProvider>
            <a href="#main-content" className="skip-to-main">
              Skip to main content
            </a>
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </div>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
