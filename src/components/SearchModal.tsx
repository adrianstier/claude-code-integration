'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, FileText, Rocket, BarChart3, Hammer, Zap, BookOpen, ArrowRight, Command, FolderOpen, Code, FileCode, Server, Brain } from 'lucide-react'

interface SearchItem {
  title: string
  description: string
  href: string
  category: string
  icon: React.ReactNode
}

const searchItems: SearchItem[] = [
  {
    title: 'Start Here',
    description: 'Get started with Claude Code - installation and setup',
    href: '/start-here',
    category: 'Learning Tracks',
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: 'Claude Code vs Web',
    description: 'Compare Claude Code CLI with the web interface, permissions, and prompt optimization',
    href: '/start-here/claude-code-vs-web',
    category: 'Learning Tracks',
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: 'Claude Code for Researchers',
    description: 'Research workflows with Python, R, and Claude Code for data analysis',
    href: '/start-here/claude-code-for-researchers',
    category: 'Learning Tracks',
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: 'Research Case Studies',
    description: 'Real-world examples from raw data to publication-ready figures',
    href: '/start-here/research-case-studies',
    category: 'Learning Tracks',
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: 'Collaboration Workflows',
    description: 'Working with grad students, co-authors, and research teams',
    href: '/start-here/collaboration-workflows',
    category: 'Learning Tracks',
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: 'Research Limitations',
    description: 'When not to use Claude Code - for skeptical PIs',
    href: '/start-here/research-limitations',
    category: 'Learning Tracks',
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: 'Grant & Manuscript Pipeline',
    description: 'BCO-DMO documentation, supplementary materials, grant proposals',
    href: '/start-here/academic-pipeline',
    category: 'Learning Tracks',
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: 'First 30 Minutes Exercise',
    description: 'Guided hands-on exercise with your own data',
    href: '/start-here/quick-start-exercise',
    category: 'Learning Tracks',
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: 'Data Analysis',
    description: 'Learn data analysis workflows with Python and R',
    href: '/data-analysis',
    category: 'Learning Tracks',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: 'Python Track',
    description: 'Learn pandas, matplotlib, and scikit-learn for data analysis',
    href: '/data-analysis/python-intro',
    category: 'Learning Tracks',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: 'R Track',
    description: 'Learn tidyverse, ggplot2, and statistical analysis with R',
    href: '/data-analysis/r-intro',
    category: 'Learning Tracks',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: 'App Builder',
    description: 'Build full-stack applications with Claude Code',
    href: '/app-builder',
    category: 'Learning Tracks',
    icon: <Hammer className="h-4 w-4" />,
  },
  {
    title: 'Automation',
    description: 'Automate tasks and workflows with Claude Code',
    href: '/automation',
    category: 'Learning Tracks',
    icon: <Zap className="h-4 w-4" />,
  },
  {
    title: 'Git & GitHub Basics',
    description: 'Learn version control with Git and collaboration with GitHub',
    href: '/git-github',
    category: 'Resources',
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: 'Best Practices',
    description: 'Learn best practices for working with Claude Code',
    href: '/advanced-topics/best-practices',
    category: 'Advanced',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: 'MCP & Cursor',
    description: 'Model Context Protocol and Cursor integration',
    href: '/advanced-topics/mcp-and-cursor',
    category: 'Advanced',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: 'CLAUDE.md Generator',
    description: 'Generate custom CLAUDE.md files for your projects',
    href: '/tools/claude-md-generator',
    category: 'Tools',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: 'Slash Commands Library',
    description: 'Browse and use pre-built slash commands',
    href: '/tools/slash-commands',
    category: 'Tools',
    icon: <Command className="h-4 w-4" />,
  },
  {
    title: 'Project Templates',
    description: 'Ready-to-use project templates with CLAUDE.md files',
    href: '/tools/templates',
    category: 'Tools',
    icon: <FolderOpen className="h-4 w-4" />,
  },
  {
    title: 'Code Snippets',
    description: 'Copy-paste code snippets for common patterns',
    href: '/tools/snippets',
    category: 'Tools',
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: 'Cheat Sheets',
    description: 'Printable quick reference guides',
    href: '/tools/cheatsheets',
    category: 'Tools',
    icon: <FileCode className="h-4 w-4" />,
  },
  {
    title: 'MCP Server Explorer',
    description: 'Browse and install MCP servers',
    href: '/tools/mcp-explorer',
    category: 'Tools',
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: 'AI Agents',
    description: 'Build, use, and deploy autonomous AI agents',
    href: '/agents',
    category: 'Learning Tracks',
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: 'Building Agents',
    description: 'Learn to build agents from scratch with Claude Agent SDK',
    href: '/agents/building-agents',
    category: 'Learning Tracks',
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: 'Using Agents',
    description: 'Master prompting, tool selection, and output handling',
    href: '/agents/using-agents',
    category: 'Learning Tracks',
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: 'Agent Products',
    description: 'Build and deploy production-ready agent products',
    href: '/agents/agent-products',
    category: 'Learning Tracks',
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: 'Multi-Agent Architectures',
    description: 'Design and build systems with multiple collaborating agents',
    href: '/agents/multi-agent-architectures',
    category: 'Learning Tracks',
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: 'MCP Integration',
    description: 'Connect Claude to databases, APIs, and external tools with Model Context Protocol',
    href: '/mcp',
    category: 'Learning Tracks',
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: 'MCP Fundamentals',
    description: 'Core concepts of the Model Context Protocol',
    href: '/mcp/mcp-fundamentals',
    category: 'Learning Tracks',
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: 'Essential MCP Servers',
    description: 'Must-know MCP servers for common workflows',
    href: '/mcp/essential-servers',
    category: 'Learning Tracks',
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: 'Building Custom MCPs',
    description: 'Create your own MCP servers for custom integrations',
    href: '/mcp/building-custom-mcps',
    category: 'Learning Tracks',
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: 'MCP Workflows & Troubleshooting',
    description: 'Real-world MCP workflows and debugging common issues',
    href: '/mcp/workflows-and-troubleshooting',
    category: 'Learning Tracks',
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: 'Skills',
    description: 'Create and manage custom Claude Code skills and slash commands',
    href: '/advanced-topics/skills',
    category: 'Advanced',
    icon: <FileText className="h-4 w-4" />,
  },
]

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filteredItems = useMemo(() => {
    if (!query) return searchItems
    const lowerQuery = query.toLowerCase()
    return searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
    )
  }, [query])

  // Group items by category
  const groupedItems = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {}
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = []
      }
      groups[item.category].push(item)
    })
    return groups
  }, [filteredItems])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }

      // Close with Escape
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
    if (!isOpen) {
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, filteredItems.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault()
      router.push(filteredItems[selectedIndex].href)
      setIsOpen(false)
    }
  }

  const handleItemClick = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }

  // Pre-compute item indices for keyboard navigation (must be before early return)
  const itemIndices = useMemo(() => {
    const indices: Map<string, number> = new Map()
    let idx = 0
    Object.values(groupedItems).forEach((items) => {
      items.forEach((item) => {
        indices.set(item.href, idx++)
      })
    })
    return indices
  }, [groupedItems])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm text-gray-500 dark:text-gray-400 transition-colors hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed left-1/2 top-[20%] z-[300] w-full max-w-xl -translate-x-1/2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation">
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation..."
            aria-label="Search documentation"
            className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="rounded p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              No results found for "{query}"
            </div>
          ) : (
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="mb-2">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {category}
                </div>
                {items.map((item) => {
                  const currentIndex = itemIndices.get(item.href) ?? 0
                  const isSelected = currentIndex === selectedIndex
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleItemClick(item.href)}
                      onMouseEnter={() => setSelectedIndex(currentIndex)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                        isSelected
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          isSelected
                            ? 'bg-primary-100 dark:bg-primary-800/50 text-primary-600 dark:text-primary-400'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{item.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {item.description}
                        </div>
                      </div>
                      {isSelected && (
                        <ArrowRight className="h-4 w-4 text-primary-500" />
                      )}
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <kbd className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5">↑↓</kbd>
            <span>Navigate</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5">↵</kbd>
            <span>Select</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5">Esc</kbd>
            <span>Close</span>
          </div>
        </div>
      </div>
    </>
  )
}
