import Link from 'next/link'
import { Rocket, BarChart3, Hammer, Zap, Bot } from 'lucide-react'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <NewsletterSignup variant="hero" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-claude-600 to-orange-500 shadow-md">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold bg-gradient-to-r from-claude-600 to-orange-500 bg-clip-text text-transparent">
                  Claude Code
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Learning Hub</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 max-w-md">
              Master AI-powered development with Claude Code. Learn to build real projects with VS Code, Git/GitHub, Python, and R.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/anthropics/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all hover:bg-claude-100 dark:hover:bg-claude-900/50 hover:text-claude-600 dark:hover:text-claude-400 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://docs.claude.com/en/docs/claude-code/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all hover:bg-claude-100 dark:hover:bg-claude-900/50 hover:text-claude-600 dark:hover:text-claude-400 hover:scale-110"
                aria-label="Documentation"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </a>
            </div>
          </div>

          {/* Learn Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Learn
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/start-here"
                  className="group inline-flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  <Rocket className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Start Here
                </Link>
              </li>
              <li>
                <Link
                  href="/data-analysis"
                  className="group inline-flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  <BarChart3 className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/app-builder"
                  className="group inline-flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  <Hammer className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  App Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/automation"
                  className="group inline-flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  <Zap className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/git-github"
                  className="text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  Git & GitHub
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.claude.com/en/docs/claude-code/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  Claude Code Docs
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://code.visualstudio.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  VS Code Docs
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/anthropics/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://support.anthropic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://www.anthropic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-claude-600 dark:hover:text-claude-400"
                >
                  Anthropic
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Claude Code Learning.{' '}
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="text-claude-600 dark:text-claude-400 hover:text-claude-500 dark:hover:text-claude-300">MIT License</a>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Built with{' '}
            <a
              href="https://docs.claude.com/en/docs/claude-code/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-claude-600 dark:text-claude-400 hover:text-claude-500 dark:hover:text-claude-300"
            >
              Claude Code
            </a>
            {' '}& Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
