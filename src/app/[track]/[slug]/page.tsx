import { notFound } from 'next/navigation'
import { getContentBySlug, getAllContent } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import CodeBlock from '@/components/CodeBlock'
import Card from '@/components/Card'
import Link from 'next/link'

interface PageProps {
  params: {
    track: string
    slug: string
  }
}

// Components available in MDX
const components = {
  CodeBlock,
  Card,
  Link,
  // Map MDX code blocks to our CodeBlock component
  pre: ({ children, ...props }: any) => {
    // Extract code content and language from children
    const child = children?.props
    const code = child?.children || ''
    const language = child?.className?.replace('language-', '') || 'bash'

    return <CodeBlock code={code} language={language} />
  },
  code: ({ children, className, ...props }: any) => {
    // Inline code (not in pre blocks)
    if (!className) {
      return <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800" {...props}>{children}</code>
    }
    // Let pre handle code blocks
    return <code className={className} {...props}>{children}</code>
  },
}

export async function generateStaticParams() {
  const tracks = ['start-here', 'data-analysis', 'app-builder', 'automation', 'git-github']
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

export default async function ContentPage({ params }: PageProps) {
  const { track, slug } = params
  const content = getContentBySlug(track, slug)

  if (!content) {
    notFound()
  }

  const { frontmatter, content: mdxContent, readingTime } = content

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-600">
        <Link href="/" className="hover:text-claude-600">
          Home
        </Link>
        <span>/</span>
        <Link href={`/${track}`} className="hover:text-claude-600 capitalize">
          {track.replace('-', ' ')}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{frontmatter.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {frontmatter.title}
        </h1>
        {frontmatter.description && (
          <p className="text-xl text-gray-600">{frontmatter.description}</p>
        )}
        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
          {frontmatter.duration && (
            <span className="flex items-center">
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {frontmatter.duration}
            </span>
          )}
          <span>{readingTime} min read</span>
          {frontmatter.platform && (
            <span className="rounded-full bg-claude-100 px-3 py-1 text-xs font-medium text-claude-800">
              {frontmatter.platform}
            </span>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={mdxContent} components={components} />
      </div>

      {/* Navigation */}
      <nav className="mt-12 border-t border-gray-200 pt-8">
        <Link
          href={`/${track}`}
          className="inline-flex items-center text-claude-600 hover:text-claude-500"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to {track.replace('-', ' ')}
        </Link>
      </nav>
    </article>
  )
}
