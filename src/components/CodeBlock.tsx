'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Check, Copy, Terminal, FileCode } from 'lucide-react'
import { trackCodeCopy } from '@/lib/analytics'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  filename?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
  caption?: string
}

export default function CodeBlock({
  code,
  language = 'bash',
  title,
  filename,
  showLineNumbers = false,
  highlightLines = [],
  caption,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim())
    setCopied(true)
    trackCodeCopy(language, filename || title || 'inline')
    setTimeout(() => setCopied(false), 2000)
  }

  const languageConfig: Record<
    string,
    { color: string; label: string; icon?: 'terminal' | 'file' }
  > = {
    bash: { color: 'bg-gray-700', label: 'Bash', icon: 'terminal' },
    shell: { color: 'bg-gray-700', label: 'Shell', icon: 'terminal' },
    zsh: { color: 'bg-gray-700', label: 'Zsh', icon: 'terminal' },
    javascript: { color: 'bg-yellow-600', label: 'JavaScript', icon: 'file' },
    js: { color: 'bg-yellow-600', label: 'JavaScript', icon: 'file' },
    typescript: { color: 'bg-blue-600', label: 'TypeScript', icon: 'file' },
    ts: { color: 'bg-blue-600', label: 'TypeScript', icon: 'file' },
    tsx: { color: 'bg-blue-600', label: 'TSX', icon: 'file' },
    jsx: { color: 'bg-yellow-600', label: 'JSX', icon: 'file' },
    python: { color: 'bg-blue-500', label: 'Python', icon: 'file' },
    py: { color: 'bg-blue-500', label: 'Python', icon: 'file' },
    r: { color: 'bg-blue-700', label: 'R', icon: 'file' },
    json: { color: 'bg-gray-600', label: 'JSON', icon: 'file' },
    css: { color: 'bg-purple-600', label: 'CSS', icon: 'file' },
    scss: { color: 'bg-pink-600', label: 'SCSS', icon: 'file' },
    html: { color: 'bg-orange-600', label: 'HTML', icon: 'file' },
    markdown: { color: 'bg-gray-600', label: 'Markdown', icon: 'file' },
    md: { color: 'bg-gray-600', label: 'Markdown', icon: 'file' },
    yaml: { color: 'bg-red-600', label: 'YAML', icon: 'file' },
    yml: { color: 'bg-red-600', label: 'YAML', icon: 'file' },
    sql: { color: 'bg-orange-700', label: 'SQL', icon: 'file' },
    graphql: { color: 'bg-pink-600', label: 'GraphQL', icon: 'file' },
    rust: { color: 'bg-orange-800', label: 'Rust', icon: 'file' },
    go: { color: 'bg-cyan-600', label: 'Go', icon: 'file' },
    java: { color: 'bg-red-700', label: 'Java', icon: 'file' },
    c: { color: 'bg-blue-800', label: 'C', icon: 'file' },
    cpp: { color: 'bg-blue-800', label: 'C++', icon: 'file' },
    plaintext: { color: 'bg-gray-600', label: 'Text', icon: 'file' },
    text: { color: 'bg-gray-600', label: 'Text', icon: 'file' },
  }

  const config = languageConfig[language.toLowerCase()] || {
    color: 'bg-gray-700',
    label: language,
    icon: 'file' as const,
  }

  const lines = code.trimEnd().split('\n')
  const displayTitle = filename || title

  // Determine if we should show line numbers (auto-enable for 5+ lines)
  const shouldShowLineNumbers = showLineNumbers || lines.length >= 5

  return (
    <div className="group my-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition-all hover:shadow-md">
      {/* Header */}
      <div
        className={cn(
          'flex items-center justify-between px-4 py-2.5 text-white',
          config.color
        )}
      >
        <div className="flex items-center gap-3">
          {/* macOS-style window buttons */}
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400 opacity-80" />
            <div className="h-3 w-3 rounded-full bg-yellow-400 opacity-80" />
            <div className="h-3 w-3 rounded-full bg-green-400 opacity-80" />
          </div>

          {/* File icon and title */}
          {displayTitle && (
            <div className="flex items-center gap-2 ml-2">
              {config.icon === 'terminal' ? (
                <Terminal className="h-4 w-4 opacity-70" />
              ) : (
                <FileCode className="h-4 w-4 opacity-70" />
              )}
              <span className="text-sm font-medium opacity-90">{displayTitle}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Language badge */}
          <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs font-medium uppercase tracking-wide backdrop-blur-sm">
            {config.label}
          </span>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={cn(
              'flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all',
              'bg-white/10 hover:bg-white/20 active:scale-95',
              copied && 'bg-green-500/30'
            )}
            aria-label={copied ? 'Copied' : 'Copy code'}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative bg-gray-950 dark:bg-gray-950">
        <pre className="overflow-x-auto p-0 text-sm">
          <code className={`language-${language} block`}>
            {lines.map((line, index) => {
              const lineNumber = index + 1
              const isHighlighted = highlightLines.includes(lineNumber)

              return (
                <div
                  key={index}
                  className={cn(
                    'flex',
                    isHighlighted &&
                      'bg-claude-500/10 border-l-2 border-claude-500'
                  )}
                >
                  {shouldShowLineNumbers && (
                    <span
                      className={cn(
                        'flex-shrink-0 select-none px-4 py-0.5 text-right text-gray-500',
                        'border-r border-gray-800 w-12',
                        isHighlighted && 'text-claude-400'
                      )}
                      aria-hidden="true"
                    >
                      {lineNumber}
                    </span>
                  )}
                  <span
                    className={cn(
                      'flex-1 px-4 py-0.5 text-gray-100',
                      !shouldShowLineNumbers && 'px-6'
                    )}
                  >
                    {line || ' '}
                  </span>
                </div>
              )
            })}
          </code>
        </pre>
      </div>

      {/* Caption */}
      {caption && (
        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-4 py-2">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {caption}
          </p>
        </div>
      )}
    </div>
  )
}
