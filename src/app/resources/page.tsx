import { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  ExternalLink,
  Github,
  FileText,
  Video,
  Code2,
  Wrench,
  GraduationCap,
  Lightbulb,
  Users,
  Terminal,
  FolderOpen,
  PenTool,
  Server,
} from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Resources - Claude Code Learning Hub',
  description:
    'Curated collection of Claude Code resources, tutorials, documentation, tools, and community links. Everything you need to master AI-powered development.',
  keywords: [
    'Claude Code resources',
    'Claude Code documentation',
    'AI coding tools',
    'developer resources',
    'programming tutorials',
    'Claude Code community',
  ],
  openGraph: {
    title: 'Resources - Claude Code Learning Hub',
    description:
      'Curated collection of Claude Code resources, tutorials, documentation, tools, and community links.',
    url: `${siteConfig.url}/resources`,
  },
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
}

const resources = {
  quickReference: [
    {
      title: 'Cheatsheets',
      description: '7 quick reference guides for Claude Code, Git, Terminal, Python, and more',
      url: '/tools/cheatsheets',
      internal: true,
      icon: FileText,
    },
    {
      title: 'Code Snippets',
      description: 'Copy-paste code patterns for common tasks',
      url: '/tools/snippets',
      internal: true,
      icon: Code2,
    },
    {
      title: 'Slash Commands',
      description: 'Built-in commands to speed up your workflow',
      url: '/tools/slash-commands',
      internal: true,
      icon: Terminal,
    },
  ],
  projectTools: [
    {
      title: 'Project Templates',
      description: '6 starter templates for web apps, data science, automation, and more',
      url: '/tools/templates',
      internal: true,
      icon: FolderOpen,
    },
    {
      title: 'CLAUDE.md Generator',
      description: 'Create a CLAUDE.md file for your project',
      url: '/tools/claude-md-generator',
      internal: true,
      icon: PenTool,
    },
    {
      title: 'MCP Server Explorer',
      description: 'Browse and configure MCP servers',
      url: '/tools/mcp-explorer',
      internal: true,
      icon: Server,
    },
  ],
  official: [
    {
      title: 'Claude Code Documentation',
      description: 'Official documentation for Claude Code by Anthropic',
      url: 'https://docs.anthropic.com/en/docs/claude-code/overview',
      icon: BookOpen,
    },
    {
      title: 'Claude Code GitHub',
      description: 'Official Claude Code repository with examples and issues',
      url: 'https://github.com/anthropics/claude-code',
      icon: Github,
    },
    {
      title: 'Anthropic API Documentation',
      description: 'Full API reference for building with Claude',
      url: 'https://docs.anthropic.com/en/api/getting-started',
      icon: Code2,
    },
    {
      title: 'Claude Prompt Engineering',
      description: 'Best practices for writing effective prompts',
      url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
      icon: Lightbulb,
    },
  ],
  externalTools: [
    {
      title: 'VS Code',
      description: 'The recommended code editor for Claude Code',
      url: 'https://code.visualstudio.com/',
      icon: Code2,
    },
    {
      title: 'Git',
      description: 'Version control system - essential for any project',
      url: 'https://git-scm.com/',
      icon: Github,
    },
    {
      title: 'Node.js',
      description: 'JavaScript runtime for running scripts and servers',
      url: 'https://nodejs.org/',
      icon: Wrench,
    },
    {
      title: 'Python',
      description: 'Popular language for data analysis and automation',
      url: 'https://www.python.org/',
      icon: Code2,
    },
  ],
  learning: [
    {
      title: 'Our Start Here Guide',
      description: 'Complete setup guide for beginners',
      url: '/start-here',
      internal: true,
      icon: GraduationCap,
    },
    {
      title: 'Data Analysis Track',
      description: 'Learn Python and R for data science',
      url: '/data-analysis',
      internal: true,
      icon: FileText,
    },
    {
      title: 'Git & GitHub Guide',
      description: 'Master version control from scratch',
      url: '/git-github',
      internal: true,
      icon: Github,
    },
    {
      title: 'AI Agents Track',
      description: 'Build autonomous AI agents',
      url: '/agents',
      internal: true,
      icon: Lightbulb,
    },
    {
      title: 'Best Practices Guide',
      description: 'Tips and techniques for working effectively with Claude Code',
      url: '/advanced-topics/best-practices',
      internal: true,
      icon: Lightbulb,
    },
  ],
  community: [
    {
      title: 'Anthropic Support',
      description: 'Official support channel for Claude products',
      url: 'https://support.anthropic.com/',
      icon: Users,
    },
    {
      title: 'r/ClaudeAI Subreddit',
      description: 'Reddit community discussing Claude',
      url: 'https://reddit.com/r/ClaudeAI',
      icon: Users,
    },
    {
      title: 'Claude Discord',
      description: 'Community Discord for Claude users',
      url: 'https://discord.gg/anthropic',
      icon: Users,
    },
  ],
  videos: [
    {
      title: 'Anthropic YouTube Channel',
      description: 'Official videos from Anthropic about Claude',
      url: 'https://www.youtube.com/@anthropic-ai',
      icon: Video,
    },
  ],
}

function ResourceCard({
  title,
  description,
  url,
  icon: Icon,
  internal = false,
}: {
  title: string
  description: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  internal?: boolean
}) {
  const Component = internal ? Link : 'a'
  const externalProps = internal
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <Component
      href={url}
      {...externalProps}
      className="group flex items-start gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 transition-all hover:border-claude-300 dark:hover:border-claude-600 hover:shadow-lg"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-claude-100 dark:bg-claude-900/50 text-claude-600 dark:text-claude-400 transition-colors group-hover:bg-claude-200 dark:group-hover:bg-claude-900">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-claude-600 dark:group-hover:text-claude-400 transition-colors">
            {title}
          </h3>
          {!internal && (
            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-claude-500" />
          )}
        </div>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </Component>
  )
}

function ResourceSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </section>
  )
}

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/"
            className="hover:text-claude-600 dark:hover:text-claude-400 transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Resources</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Resources
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          A curated collection of resources to help you master Claude Code and
          AI-powered development. From official documentation to community
          tools.
        </p>
      </div>

      {/* Quick Links */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-claude-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 p-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Start
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/start-here"
            className="inline-flex items-center gap-2 rounded-lg bg-claude-600 px-4 py-2 text-sm font-medium text-white hover:bg-claude-500 transition-colors"
          >
            <GraduationCap className="h-4 w-4" />
            Start Learning
          </Link>
          <a
            href="https://docs.anthropic.com/en/docs/claude-code/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:border-claude-300 dark:hover:border-claude-600 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Official Docs
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:border-claude-300 dark:hover:border-claude-600 transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Resource Sections */}
      <ResourceSection title="Quick Reference">
        {resources.quickReference.map((resource) => (
          <ResourceCard key={resource.url} {...resource} />
        ))}
      </ResourceSection>

      <ResourceSection title="Project Tools">
        {resources.projectTools.map((resource) => (
          <ResourceCard key={resource.url} {...resource} />
        ))}
      </ResourceSection>

      <ResourceSection title="Our Learning Tracks">
        {resources.learning.map((resource) => (
          <ResourceCard key={resource.url} {...resource} />
        ))}
      </ResourceSection>

      <ResourceSection title="Official Documentation">
        {resources.official.map((resource) => (
          <ResourceCard key={resource.url} {...resource} />
        ))}
      </ResourceSection>

      <ResourceSection title="External Tools">
        {resources.externalTools.map((resource) => (
          <ResourceCard key={resource.url} {...resource} />
        ))}
      </ResourceSection>

      <ResourceSection title="Community & Support">
        {resources.community.map((resource) => (
          <ResourceCard key={resource.url} {...resource} />
        ))}
      </ResourceSection>

      <ResourceSection title="Video Resources">
        {resources.videos.map((resource) => (
          <ResourceCard key={resource.url} {...resource} />
        ))}
      </ResourceSection>

      {/* Contribute Section */}
      <div className="mt-16 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Know a great resource?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Help us improve this list by suggesting resources that helped you.
        </p>
        <a
          href="https://github.com/anthropics/claude-code/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-claude-600 dark:text-claude-400 hover:text-claude-500 dark:hover:text-claude-300 font-medium"
        >
          <Github className="h-4 w-4" />
          Suggest a resource on GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
