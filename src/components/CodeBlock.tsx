'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export default function CodeBlock({
  code,
  language = 'bash',
  title,
  showLineNumbers: _showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const languageColors: Record<string, string> = {
    bash: 'bg-gray-700',
    javascript: 'bg-yellow-600',
    typescript: 'bg-blue-600',
    python: 'bg-blue-500',
    r: 'bg-blue-700',
    json: 'bg-gray-600',
    css: 'bg-purple-600',
    html: 'bg-orange-600',
  }

  const bgColor = languageColors[language.toLowerCase()] || 'bg-gray-700'

  return (
    <div className="group my-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl">
      {/* Header */}
      <div className={`flex items-center justify-between ${bgColor} px-4 py-3 text-white`}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          {title && (
            <span className="text-sm font-medium">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-white/20 px-2 py-1 text-xs font-medium uppercase backdrop-blur-sm">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium transition-all hover:bg-white/20 active:scale-95"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative bg-gray-900">
        <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
          <code className={`language-${language} font-mono text-gray-100`}>{code}</code>
        </pre>

        {/* Fade overlay for long code */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
      </div>
    </div>
  )
}
