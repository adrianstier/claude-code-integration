import Link from 'next/link'
import { Metadata } from 'next'
import {
  Rocket,
  BarChart3,
  Hammer,
  Zap,
  Target,
  Bot,
  Wrench,
  Settings,
  Keyboard,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Sparkles,
  Brain
} from 'lucide-react'
import { siteConfig, generateFAQSchema } from '@/lib/metadata'

// Homepage-specific metadata with full OG image support for social sharing
const ogImageUrl = `${siteConfig.url}/opengraph-image`
const twitterImageUrl = `${siteConfig.url}/twitter-image`

export const metadata: Metadata = {
  title: 'Claude Code Learning Hub - Master AI-Powered Development',
  description:
    'Learn Claude Code, VS Code, Git/GitHub, Python, and R with hands-on tutorials. Build real-world projects with AI assistance. Free comprehensive guides for beginners to advanced developers.',
  keywords: [
    'Claude Code tutorial',
    'learn Claude Code',
    'AI coding assistant',
    'VS Code setup',
    'Git tutorial',
    'GitHub for beginners',
    'Python tutorial',
    'R programming',
    'AI development',
    'coding with AI',
    'Anthropic Claude',
    'free programming course',
  ],
  // Open Graph for Facebook, LinkedIn, Discord, Slack
  openGraph: {
    title: 'Claude Code Learning Hub - Master AI-Powered Development',
    description:
      'Learn Claude Code, VS Code, Git/GitHub, Python, and R with hands-on tutorials. Build real-world projects with AI assistance.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Claude Code Learning Hub - Master AI-Powered Development',
        type: 'image/png',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: 'Claude Code Learning Hub - Master AI-Powered Development',
    description:
      'Learn Claude Code, VS Code, Git/GitHub, Python, and R with hands-on tutorials. Build real-world projects with AI assistance.',
    images: {
      url: twitterImageUrl,
      alt: 'Claude Code Learning Hub',
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

// FAQ data for structured data
const faqs = [
  {
    question: 'What is Claude Code?',
    answer:
      'Claude Code is an AI-powered coding assistant by Anthropic that helps you write, debug, and understand code directly in your terminal or IDE. It can assist with various programming languages and frameworks.',
  },
  {
    question: 'Is Claude Code Learning Hub free?',
    answer:
      'Yes, all tutorials and learning materials on Claude Code Learning Hub are completely free. We provide comprehensive guides for Claude Code, VS Code, Git/GitHub, Python, and R.',
  },
  {
    question: 'Do I need programming experience to start?',
    answer:
      'No prior programming experience is required. Our Start Here track guides you through setting up your development environment from scratch, including VS Code, Claude Code, and Git.',
  },
  {
    question: 'What can I build with Claude Code?',
    answer:
      'With Claude Code, you can build web applications, automate repetitive tasks, analyze data with Python or R, create AI agents, and much more. Our learning tracks cover practical projects you can add to your portfolio.',
  },
  {
    question: 'Does Claude Code work on Mac and Windows?',
    answer:
      'Yes, Claude Code works on both Mac and Windows. Our tutorials include platform-specific setup guides to ensure a smooth installation regardless of your operating system.',
  },
]

export default function Home() {
  // Generate FAQ schema for search engines
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      {/* FAQ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8">
            <Link href="/start-here/claude-code-for-researchers" className="inline-flex items-center gap-2 rounded-full bg-claude-50 dark:bg-claude-900/50 px-4 py-2 text-sm font-medium text-claude-700 dark:text-claude-300 ring-1 ring-inset ring-claude-600/10 dark:ring-claude-400/20 hover:bg-claude-100 dark:hover:bg-claude-900/70 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-claude-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-claude-600"></span>
              </span>
              New: Claude Code Guide for Researchers
            </Link>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
            Learn{' '}
            <span className="bg-gradient-to-r from-claude-600 to-orange-500 bg-clip-text text-transparent">
              Claude Code
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
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
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/git-github"
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-8 py-3.5 text-base font-semibold text-gray-900 dark:text-white transition-all hover:border-claude-600 dark:hover:border-claude-500 hover:bg-claude-50 dark:hover:bg-gray-700"
            >
              Learn Git & GitHub
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span>Free & Open Source</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Production Ready</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span>Beginner Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Paths Section */}
      <div id="tracks" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-claude-600 dark:text-claude-400">
            Learning Tracks
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Choose Your Learning Path
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Start with any track that matches your goals. All paths include hands-on projects and Claude Code integration.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* Start Here Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all hover:border-claude-300 dark:hover:border-claude-600 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-claude-100 to-orange-100 dark:from-claude-900/50 dark:to-orange-900/50 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-claude-500 to-orange-500 shadow-lg">
                <Rocket className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                Start Here
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Install and configure Claude Code, VS Code, and Git/GitHub on Mac or Windows
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-claude-600 dark:text-claude-400">
                <span>Begin setup</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <Link href="/start-here" className="absolute inset-0">
                <span className="sr-only">Start Here</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
                60-75 min
              </span>
              <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/50 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
                Essential
              </span>
            </div>
          </div>

          {/* Data Analysis Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                Data Analysis
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Learn Python or R for data cleaning, visualization, and modeling with Claude
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <span>Start analyzing</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <Link href="/data-analysis" className="absolute inset-0">
                <span className="sr-only">Data Analysis</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
                4-6 hours
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                Popular
              </span>
            </div>
          </div>

          {/* App Builder Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <Hammer className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                App Builder
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Build and deploy small web apps and APIs with Claude as your co-developer
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                <span>Build an app</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <Link href="/app-builder" className="absolute inset-0">
                <span className="sr-only">App Builder</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
                Varies
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/50 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
                Advanced
              </span>
            </div>
          </div>

          {/* Automation Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all hover:border-yellow-300 dark:hover:border-yellow-600 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/50 dark:to-amber-900/50 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                Automation
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Create scripts and workflows to automate repetitive tasks with Claude
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                <span>Automate tasks</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <Link href="/automation" className="absolute inset-0">
                <span className="sr-only">Automation</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
                2-3 hours
              </span>
              <span className="inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/50 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:text-yellow-300">
                Practical
              </span>
            </div>
          </div>

          {/* AI Agents Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                AI Agents
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Build autonomous agents that can reason, plan, and take actions
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                <span>Build agents</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <Link href="/agents" className="absolute inset-0">
                <span className="sr-only">AI Agents</span>
              </Link>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
                8-10 hours
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-300">
                Advanced
              </span>
            </div>
          </div>
        </div>

        {/* For Researchers Highlight */}
        <div className="mt-16">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-gradient-to-r from-blue-400 to-indigo-400 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 p-12 shadow-2xl transition-all hover:shadow-3xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </span>
                  NEW: For Academic Researchers
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Claude Code for Researchers
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  A comprehensive guide designed specifically for academic researchers, analysts, and scientists who want to accelerate their work with AI-powered coding assistance.
                </p>
                <ul className="mt-6 space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white" />
                    <span><strong>Data analysis workflows</strong> with Python & R</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white" />
                    <span><strong>Literature review automation</strong> and synthesis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white" />
                    <span><strong>Statistical analysis</strong> and visualization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white" />
                    <span><strong>Reproducible research</strong> best practices</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/start-here/claude-code-for-researchers"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-blue-600 shadow-lg transition hover:bg-gray-50 hover:scale-105"
                  >
                    <span>Read the Researcher Guide</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl bg-slate-950 p-6 shadow-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    <span className="ml-2 text-xs text-gray-400 font-mono">analysis.py</span>
                  </div>
                  <pre className="text-sm text-green-400 font-mono leading-relaxed overflow-x-auto">
{`# Load and clean survey data
import pandas as pd

df = pd.read_csv("survey_data.csv")
df = df.dropna(subset=["response"])

# Run sentiment analysis
from transformers import pipeline
analyzer = pipeline("sentiment-analysis")

df["sentiment"] = df["response"].apply(
    lambda x: analyzer(x)[0]["label"]
)

# Generate summary statistics
print(df.groupby("sentiment").size())`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tools Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-claude-600 dark:text-claude-400">
            Interactive Tools
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Boost Your Productivity
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Use our free tools to supercharge your Claude Code workflow
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* CLAUDE.md Generator Tool */}
          <Link href="/tools/claude-md-generator" className="group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-claude-200 dark:border-claude-700 bg-white dark:bg-gray-800 p-8 shadow-md transition-all hover:border-claude-400 dark:hover:border-claude-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-br from-claude-100 to-orange-100 dark:from-claude-900/50 dark:to-orange-900/50 opacity-50 blur-3xl transition-opacity group-hover:opacity-75"></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-claude-500 to-orange-500 shadow-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                  CLAUDE.md Generator
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                  Create customized CLAUDE.md files for your projects with our interactive form.
                  Choose your stack, define coding standards, and export ready-to-use configuration.
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-claude-600 dark:text-claude-400" />
                    <span>Project type templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-claude-600 dark:text-claude-400" />
                    <span>Framework-specific configurations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-claude-600 dark:text-claude-400" />
                    <span>Copy & download functionality</span>
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-base font-semibold text-claude-600 dark:text-claude-400">
                  <span>Generate CLAUDE.md</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* Slash Commands Library */}
          <Link href="/tools/slash-commands" className="group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 bg-white dark:bg-gray-800 p-8 shadow-md transition-all hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 opacity-50 blur-3xl transition-opacity group-hover:opacity-75"></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
                  <Keyboard className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Slash Commands Library
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                  Browse and copy ready-to-use slash commands for common development tasks.
                  Search by category, copy with one click, and customize for your needs.
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                    <span>12+ production-ready commands</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                    <span>Search & filter by category</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                    <span>Usage examples included</span>
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-base font-semibold text-indigo-600 dark:text-indigo-400">
                  <span>Browse Commands</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-claude-50 via-orange-50 to-amber-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-12 shadow-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-gray-700 shadow-lg">
                <Target className="h-8 w-8 text-claude-600 dark:text-claude-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                Guided Learning
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-700 dark:text-gray-300">
                Step-by-step tutorials designed for beginners and experienced developers alike.
                No prior experience required.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-gray-700 shadow-lg">
                <Bot className="h-8 w-8 text-claude-600 dark:text-claude-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                AI-Powered
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-700 dark:text-gray-300">
                Learn how to effectively partner with Claude for real coding tasks.
                Write better code, faster.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-gray-700 shadow-lg">
                <Wrench className="h-8 w-8 text-claude-600 dark:text-claude-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                Practical Projects
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-700 dark:text-gray-300">
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
                href="/#tracks"
                className="rounded-lg border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                View All Tracks
              </Link>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
