import { notFound } from 'next/navigation'
import { getContentBySlug, getAllContent } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import CodeBlock from '@/components/CodeBlock'
import Card from '@/components/Card'
import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import ReadingProgress from '@/components/ReadingProgress'
import ArticleNavigation from '@/components/ArticleNavigation'
import {
  Callout,
  Steps,
  Step,
  Checklist,
  ChecklistItem,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  FileTree,
  FolderNode,
  FileNode,
  Kbd,
} from '@/components/mdx'
import { Clock, BookOpen, Monitor, ChevronRight } from 'lucide-react'

interface PageProps {
  params: {
    track: string
    slug: string
  }
}

// Apple icon component (lucide-react doesn't have Apple)
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

// Components available in MDX
const components = {
  CodeBlock,
  Card,
  Link,
  // MDX Components
  Callout,
  Steps,
  Step,
  Checklist,
  ChecklistItem,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  FileTree,
  FolderNode,
  FileNode,
  Kbd,
  // Map MDX code blocks to our CodeBlock component
  pre: ({ children }: { children?: React.ReactNode }) => {
    const child = (children as { props?: { children?: string; className?: string } })?.props
    const code = child?.children || ''
    const language = child?.className?.replace('language-', '') || 'bash'

    return <CodeBlock code={code} language={language} />
  },
  code: ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    if (!className) {
      return (
        <code className="rounded-md bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-sm font-mono text-claude-700 dark:text-claude-300 border border-gray-200 dark:border-gray-700">
          {children}
        </code>
      )
    }
    return <code className={className}>{children}</code>
  },
}

export async function generateStaticParams() {
  const tracks = ['start-here', 'data-analysis', 'app-builder', 'automation', 'git-github', 'agents', 'advanced-topics']
  const params: { track: string; slug: string }[] = []

  for (const track of tracks) {
    const content = getAllContent(track)
    for (const item of content) {
      if (item.slug !== 'index') {
        params.push({
          track,
          slug: item.slug,
        })
      }
    }
  }

  return params
}

// Get adjacent articles for navigation
function getAdjacentContent(track: string, currentSlug: string) {
  const allContent = getAllContent(track).filter(item => item.slug !== 'index')
  const currentIndex = allContent.findIndex(item => item.slug === currentSlug)

  return {
    previous: currentIndex > 0 ? allContent[currentIndex - 1] : null,
    next: currentIndex < allContent.length - 1 ? allContent[currentIndex + 1] : null,
  }
}

// Track display names
const trackNames: Record<string, string> = {
  'start-here': 'Start Here',
  'data-analysis': 'Data Analysis',
  'app-builder': 'App Builder',
  'automation': 'Automation',
  'git-github': 'Git & GitHub',
  'agents': 'AI Agents',
  'advanced-topics': 'Advanced Topics',
}

export default async function ContentPage({ params }: PageProps) {
  const { track, slug } = params
  const content = getContentBySlug(track, slug)

  if (!content) {
    notFound()
  }

  const { frontmatter, content: mdxContent, readingTime } = content
  const { previous, next } = getAdjacentContent(track, slug)

  const PlatformIcon = frontmatter.platform === 'mac' ? AppleIcon : Monitor

  return (
    <>
      <ReadingProgress />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* Main Content */}
          <article className="min-w-0">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Link
                href="/"
                className="hover:text-claude-600 dark:hover:text-claude-400 transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href={`/${track}`}
                className="hover:text-claude-600 dark:hover:text-claude-400 transition-colors"
              >
                {trackNames[track] || track}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 dark:text-white font-medium truncate">
                {frontmatter.title}
              </span>
            </nav>

            {/* Article Header */}
            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-balance">
                {frontmatter.title}
              </h1>

              {frontmatter.description && (
                <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {frontmatter.description}
                </p>
              )}

              {/* Meta info */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                {frontmatter.duration && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{frontmatter.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  <span>{readingTime} min read</span>
                </div>
                {frontmatter.platform && (
                  <div className="flex items-center gap-1.5 rounded-full bg-claude-100 dark:bg-claude-900/40 px-3 py-1 text-claude-700 dark:text-claude-300">
                    <PlatformIcon className="h-4 w-4" />
                    <span className="font-medium capitalize">{frontmatter.platform}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Article Content */}
            <div className="rounded-2xl bg-white dark:bg-gray-800/50 p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 dark:border-gray-700/50">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXRemote source={mdxContent} components={components} />
              </div>
            </div>

            {/* Article Navigation */}
            <div className="mt-10">
              <ArticleNavigation
                previous={
                  previous
                    ? {
                        href: `/${track}/${previous.slug}`,
                        title: previous.frontmatter.title,
                        description: previous.frontmatter.description,
                      }
                    : undefined
                }
                next={
                  next
                    ? {
                        href: `/${track}/${next.slug}`,
                        title: next.frontmatter.title,
                        description: next.frontmatter.description,
                      }
                    : undefined
                }
              />
            </div>

            {/* Back to track link */}
            <nav className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link
                href={`/${track}`}
                className="inline-flex items-center gap-2 text-claude-600 dark:text-claude-400 hover:text-claude-500 dark:hover:text-claude-300 font-medium transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to {trackNames[track] || track}
              </Link>
            </nav>
          </article>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5">
                <TableOfContents />
              </div>

              {/* Quick links */}
              <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href={`/${track}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-claude-600 dark:hover:text-claude-400 transition-colors"
                    >
                      {trackNames[track]} Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/start-here"
                      className="text-gray-600 dark:text-gray-400 hover:text-claude-600 dark:hover:text-claude-400 transition-colors"
                    >
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advanced-topics/best-practices"
                      className="text-gray-600 dark:text-gray-400 hover:text-claude-600 dark:hover:text-claude-400 transition-colors"
                    >
                      Best Practices
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
