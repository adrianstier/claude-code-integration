import { Metadata } from 'next'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: {
    template: `%s | Tools | ${siteConfig.name}`,
    default: 'Developer Tools | Claude Code Learning Hub',
  },
  description:
    'Free developer tools for Claude Code: project templates, code snippets, cheatsheets, MCP server explorer, and CLAUDE.md generator. Boost your AI-assisted development workflow.',
  keywords: [
    'Claude Code tools',
    'developer tools',
    'code templates',
    'code snippets',
    'cheatsheets',
    'MCP servers',
    'CLAUDE.md generator',
    'AI development tools',
    'programming utilities',
  ],
  openGraph: {
    title: 'Developer Tools | Claude Code Learning Hub',
    description:
      'Free developer tools for Claude Code: project templates, code snippets, cheatsheets, and more.',
    url: `${siteConfig.url}/tools`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Claude Code Developer Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Tools | Claude Code Learning Hub',
    description:
      'Free developer tools for Claude Code: project templates, code snippets, cheatsheets, and more.',
  },
  alternates: {
    canonical: `${siteConfig.url}/tools`,
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
