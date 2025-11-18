import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-claude-50 px-4 py-2 text-sm font-medium text-claude-700 ring-1 ring-inset ring-claude-600/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-claude-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-claude-600"></span>
            </span>
            New: Best Practices from Anthropic Engineers
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Learn{' '}
            <span className="bg-gradient-to-r from-claude-600 to-orange-500 bg-clip-text text-transparent">
              Claude Code
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600">
            Master AI-powered development with Claude Code, VS Code, Git/GitHub, Python, and R.
            Build real projects, not just tutorials.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/start-here"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-claude-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-claude-500 hover:shadow-xl hover:scale-105"
            >
              <span className="relative flex items-center gap-2">
                Get Started
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/git-github"
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:border-claude-600 hover:bg-claude-50"
            >
              Learn Git & GitHub
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Free & Open Source</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Production Ready</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Beginner Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Paths Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-claude-600">
            Learning Tracks
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Learning Path
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Start with any track that matches your goals. All paths include hands-on projects and Claude Code integration.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Start Here Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-claude-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-claude-100 to-orange-100 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-claude-500 to-orange-500 text-3xl shadow-lg">
                🚀
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Start Here
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Install and configure Claude Code, VS Code, and Git/GitHub on Mac or Windows
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-claude-600">
                <span>Begin setup</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <Link href="/start-here" className="absolute inset-0">
                <span className="sr-only">Start Here</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                60-75 min
              </span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Essential
              </span>
            </div>
          </div>

          {/* Data Analysis Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-3xl shadow-lg">
                📊
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Data Analysis
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Learn Python or R for data cleaning, visualization, and modeling with Claude
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                <span>Start analyzing</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <Link href="/data-analysis" className="absolute inset-0">
                <span className="sr-only">Data Analysis</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                4-6 hours
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                Popular
              </span>
            </div>
          </div>

          {/* App Builder Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-purple-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-3xl shadow-lg">
                🏗️
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                App Builder
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Build and deploy small web apps and APIs with Claude as your co-developer
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-600">
                <span>Build an app</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <Link href="/app-builder" className="absolute inset-0">
                <span className="sr-only">App Builder</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                Varies
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                Advanced
              </span>
            </div>
          </div>

          {/* Automation Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-yellow-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 text-3xl shadow-lg">
                ⚡
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Automation
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Create scripts and workflows to automate repetitive tasks with Claude
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-600">
                <span>Automate tasks</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <Link href="/automation" className="absolute inset-0">
                <span className="sr-only">Automation</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                2-3 hours
              </span>
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                Practical
              </span>
            </div>
          </div>
        </div>

        {/* Best Practices Highlight - NEW */}
        <div className="mt-16">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-gradient-to-r from-claude-400 to-orange-400 bg-gradient-to-br from-claude-600 via-orange-500 to-amber-500 p-12 shadow-2xl transition-all hover:shadow-3xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </span>
                  NEW: Pro Tips from Anthropic Engineers
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Master Claude Code Best Practices
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Learn proven workflows, optimization strategies, and advanced techniques directly from the team that built Claude Code. Includes CLAUDE.md customization, TDD workflows, multi-Claude patterns, and more.
                </p>
                <ul className="mt-6 space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Explore → Plan → Code → Commit</strong> workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>CLAUDE.md files</strong> for persistent instructions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Custom slash commands</strong> and tool permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Multi-Claude workflows</strong> for complex tasks</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/advanced-topics/best-practices"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-claude-600 shadow-lg transition hover:bg-gray-50 hover:scale-105"
                  >
                    <span>Read Best Practices Guide</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl bg-slate-950 p-6 shadow-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    <span className="ml-2 text-xs text-gray-400 font-mono">CLAUDE.md</span>
                  </div>
                  <pre className="text-sm text-green-400 font-mono leading-relaxed overflow-x-auto">
{`# Project Guidelines

## Important Rules
IMPORTANT: Use TypeScript strict mode
YOU MUST: Write tests before code
NEVER: Commit without running tests

## Common Commands
npm run dev    # Start dev server
npm test       # Run tests
/init          # Generate CLAUDE.md

## Architecture
src/app/       # Next.js routes
src/components # React components
tests/         # Jest tests`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tools Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-claude-600">
            Interactive Tools
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Boost Your Productivity
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Use our free tools to supercharge your Claude Code workflow
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* CLAUDE.md Generator Tool */}
          <Link href="/tools/claude-md-generator" className="group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-claude-200 bg-white p-8 shadow-md transition-all hover:border-claude-400 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-br from-claude-100 to-orange-100 opacity-50 blur-3xl transition-opacity group-hover:opacity-75"></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-claude-500 to-orange-500 text-4xl shadow-lg">
                  ⚙️
                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  CLAUDE.md Generator
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Create customized CLAUDE.md files for your projects with our interactive form.
                  Choose your stack, define coding standards, and export ready-to-use configuration.
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-claude-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Project type templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-claude-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Framework-specific configurations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-claude-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copy & download functionality</span>
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-base font-semibold text-claude-600">
                  <span>Generate CLAUDE.md</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Slash Commands Library */}
          <Link href="/tools/slash-commands" className="group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-indigo-200 bg-white p-8 shadow-md transition-all hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-50 blur-3xl transition-opacity group-hover:opacity-75"></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-4xl shadow-lg">
                  ⌨️
                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Slash Commands Library
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  Browse and copy ready-to-use slash commands for common development tasks.
                  Search by category, copy with one click, and customize for your needs.
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>12+ production-ready commands</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Search & filter by category</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Usage examples included</span>
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-base font-semibold text-indigo-600">
                  <span>Browse Commands</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-claude-50 via-orange-50 to-amber-50 p-12 shadow-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-lg">
                🎯
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Guided Learning
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Step-by-step tutorials designed for beginners and experienced developers alike.
                No prior experience required.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-lg">
                🤖
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                AI-Powered
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Learn how to effectively partner with Claude for real coding tasks.
                Write better code, faster.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-lg">
                🔧
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Practical Projects
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-700">
                Build real projects you can use and share, not just toy examples.
                Portfolio-ready work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-claude-600 to-orange-500 px-8 py-16 shadow-2xl sm:px-16">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Building?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-claude-100">
              Join developers learning to build better software with AI assistance.
              Get started in less than 10 minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link
                href="/start-here"
                className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-claude-600 shadow-lg transition hover:bg-gray-50 hover:scale-105"
              >
                Get Started Now
              </Link>
              <Link
                href="/git-github"
                className="rounded-lg border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                View All Tracks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
