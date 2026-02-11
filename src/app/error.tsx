'use client'

import Link from 'next/link'
import { Home, RefreshCw, AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Visual */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-claude-100 dark:bg-claude-900/50">
            <AlertTriangle className="h-10 w-10 text-claude-600 dark:text-claude-400" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          An unexpected error occurred. You can try again or head back to the
          homepage to continue your learning journey.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-claude-600 to-orange-500 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105"
          >
            <RefreshCw className="h-5 w-5" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-claude-600 px-6 py-3 text-base font-semibold text-claude-600 dark:text-claude-400 transition-all hover:bg-claude-50 dark:hover:bg-claude-900/30"
          >
            <Home className="h-5 w-5" />
            Go home
          </Link>
        </div>

        {/* Expandable Error Details */}
        <details className="text-left mx-auto max-w-lg rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-4">
          <summary className="cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            Error details
          </summary>
          <div className="mt-3 rounded-lg bg-gray-50 dark:bg-gray-900 p-3">
            <p className="text-sm font-mono text-gray-700 dark:text-gray-300 break-words">
              {error.message || 'An unknown error occurred'}
            </p>
            {error.digest && (
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                Digest: {error.digest}
              </p>
            )}
          </div>
        </details>

        {/* Help Text */}
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-500">
          If this keeps happening,{' '}
          <a
            href="https://github.com/anthropics/claude-code/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-claude-600 dark:text-claude-400 hover:underline"
          >
            report an issue
          </a>
        </p>
      </div>
    </main>
  )
}
