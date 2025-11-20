import { notFound } from 'next/navigation'
import { getTrackMetadata, getAllContent } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Card from '@/components/Card'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

interface TrackPageProps {
  params: {
    track: string
  }
}

const components = {
  Card,
  CodeBlock,
  Link,
  // Map MDX code blocks to our CodeBlock component
  pre: ({ children }: { children?: React.ReactNode }) => {
    // Extract code content and language from children
    const child = (children as { props?: { children?: string; className?: string } })?.props
    const code = child?.children || ''
    const language = child?.className?.replace('language-', '') || 'bash'

    return <CodeBlock code={code} language={language} />
  },
  code: ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    // Inline code (not in pre blocks)
    if (!className) {
      return <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">{children}</code>
    }
    // Let pre handle code blocks
    return <code className={className}>{children}</code>
  },
}

export async function generateStaticParams() {
  return [
    { track: 'start-here' },
    { track: 'data-analysis' },
    { track: 'app-builder' },
    { track: 'automation' },
    { track: 'git-github' },
    { track: 'agents' },
  ]
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { track } = params
  const metadata = getTrackMetadata(track)

  if (!metadata) {
    notFound()
  }

  const allContent = getAllContent(track).filter((item) => item.slug !== 'index')

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-600">
        <Link href="/" className="hover:text-claude-600">
          Home
        </Link>
        <span>/</span>
        <span className="capitalize text-gray-900">
          {track.replace('-', ' ')}
        </span>
      </nav>

      {/* Track Overview from index.mdx */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={metadata.content} components={components} />
        </div>
      </div>

      {/* Module List */}
      {allContent.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Modules</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allContent.map((item) => (
              <Card
                key={item.slug}
                title={item.frontmatter.title}
                description={item.frontmatter.description || ''}
                href={`/${track}/${item.slug}`}
              >
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  {item.frontmatter.duration && (
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
                      {item.frontmatter.duration}
                    </span>
                  )}
                  <span>{item.readingTime} min read</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
