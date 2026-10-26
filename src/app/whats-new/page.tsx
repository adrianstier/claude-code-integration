import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, ArrowLeft, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: "What's New in Claude Code — Changes That Matter",
  description:
    'A plain-English digest of recent Claude Code releases: what changed, and what it actually means for how you work. Updated as new versions ship.',
  keywords: [
    'Claude Code changelog',
    "Claude Code what's new",
    'Claude Code updates',
    'Claude Code new features',
    'Claude Code release notes',
    'Claude Code version history',
  ],
  openGraph: {
    title: "What's New in Claude Code | Claude Code Learning Hub",
    description:
      'A plain-English digest of recent Claude Code releases and what they mean for your workflow.',
    url: `${siteConfig.url}/whats-new`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What's New in Claude Code",
    description:
      'What changed in recent Claude Code releases, and what it means for how you work.',
  },
  alternates: { canonical: `${siteConfig.url}/whats-new` },
}

/**
 * Each entry is our own summary of a change plus, more importantly, what it
 * changes about the way you work. Anthropic's changelog says what shipped;
 * this says whether you should care.
 */
interface Change {
  title: string
  category: 'config' | 'workflow' | 'safety' | 'extend' | 'models'
  what: string
  meaning: string
  href?: string
  hrefLabel?: string
}

const CATEGORY_LABEL: Record<Change['category'], string> = {
  config: 'Configuration',
  workflow: 'Everyday workflow',
  safety: 'Permissions & safety',
  extend: 'Extending Claude Code',
  models: 'Models & effort',
}

const CATEGORY_STYLE: Record<Change['category'], string> = {
  config:
    'bg-cobalt-100 text-cobalt-800 dark:bg-cobalt-900/50 dark:text-cobalt-200',
  workflow: 'bg-sage-100 text-sage-800 dark:bg-sage-900/50 dark:text-sage-200',
  safety:
    'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
  extend: 'bg-plum-100 text-plum-800 dark:bg-plum-900/50 dark:text-plum-200',
  models:
    'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200',
}

const CHANGES: Change[] = [
  {
    title: '/auto-mode-setup teaches auto mode your project\'s conventions',
    category: 'config',
    what: 'A new /auto-mode-setup command reads your project and recent sessions, then uses what it learns to tune how auto mode behaves in this project. It now also runs on Bedrock, Vertex, Foundry, the Claude apps gateway, and sessions with telemetry turned off.',
    meaning:
      "If auto mode keeps asking you things it should already know -- your test command, which directories are safe to write to -- run /auto-mode-setup once instead of tuning permission rules by hand. It's a one-time setup step, not something that runs for you automatically.",
  },
  {
    title: 'Resuming an old conversation now warns about your 5-hour limit',
    category: 'workflow',
    what: 'On Pro and Max plans, resuming a conversation that has gone inactive now warns you first if doing so would use a noticeable share of your 5-hour usage limit, before you are committed to it.',
    meaning:
      "You get a real choice at that point: resume anyway, or start a fresh conversation and ask Claude to look up the old one when you need something from it. Worth knowing if you habitually resume old sessions -- the cost of doing so used to be invisible until it hit.",
  },
  {
    title: 'A new sandbox setting lets Linux commands create user namespaces',
    category: 'safety',
    what: 'A new sandbox.allowNestedUserNamespaces setting lets sandboxed commands on Linux create their own user namespaces, which is what tools like Chromium and rootless podman need in order to run.',
    meaning:
      "Turning it on is a real tradeoff, not a free unlock: the same mechanism also lets a sandboxed command get around the sandbox's file protections. Only enable it if you actually run Chromium-based tools or rootless podman through Claude Code, and go in knowing you're loosening the sandbox to do it.",
  },
  {
    title: 'Dangerous rm commands no longer stall unattended sessions',
    category: 'safety',
    what: 'In bypass permissions mode in the Desktop app and VS Code, a dangerous rm or rmdir command used to still stop for a confirmation prompt. It is now denied immediately, with a hint for Claude to rewrite the command, instead of waiting on an answer nobody is there to give.',
    meaning:
      "If you run bypass-permissions sessions unattended, they no longer hang indefinitely on a risky delete waiting for a prompt that will never be answered -- Claude gets steered toward a safer rewrite and keeps working. The safety check itself didn't get weaker, only the blocking confirmation step did.",
    href: '/advanced-topics/best-practices',
    hrefLabel: 'Configuring permissions',
  },
  {
    title: "sed -i now runs for real, and /rewind can't undo it",
    category: 'workflow',
    what: 'Claude Code used to show sed -i commands through a simulated file-edit preview, similar to the Edit tool. It now goes through the same approval as any other Bash command and runs exactly as written.',
    meaning:
      "The practical change is that /rewind no longer undoes a sed -i edit, the same as it already couldn't undo other file changes made through Bash. If you lean on /rewind as a safety net, don't assume it covers edits made with sed -i.",
  },
  {
    title: 'Idle sessions now compact themselves before the cache expires',
    category: 'workflow',
    what: 'A terminal conversation over roughly 200K tokens that sits idle for about 54 minutes is now compacted automatically, just before its one-hour prompt cache would lapse. A new "Idle compaction" row in /config turns it off, and CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS changes the 200K-token minimum.',
    meaning:
      "If you step away from a long session and come back later, don't be alarmed to find it already compacted -- that's this working as designed, and it saves you from reprocessing the whole history on your next message. If you'd rather keep full history until you run /compact yourself, turn it off in /config.",
    href: '/advanced-topics/productivity-features',
    hrefLabel: 'Managing your context window',
  },
  {
    title: 'Forked subagents are now on by default outside the terminal too',
    category: 'workflow',
    what: 'Background subagents started with subagent_type: "fork" -- which inherit the parent session\'s full context instead of starting cold -- are now on by default in claude -p, the Agent SDK, the desktop app and VS Code, matching what the terminal already did.',
    meaning:
      "If you script claude -p or build with the Agent SDK and relied on forked subagents being opt-in, they'll start running by default; set CLAUDE_CODE_FORK_SUBAGENT=0 if you need the old behavior back. claude mcp serve sessions still never get them.",
  },
  {
    title: 'Sonnet 5.5 cache reads got cheaper',
    category: 'models',
    what: "Claude Code's /cost, the status line, --max-budget-usd and the SDK's cost figures now price Sonnet 5.5 cache reads at $0.10 per million tokens, down from $0.20.",
    meaning:
      'If you track spend with /cost or a budget cap, expect reported Sonnet 5.5 costs to drop on sessions that lean on prompt caching. The lower rate applies automatically -- there is no setting to change.',
  },
  {
    title: 'Hooks can now block on failure instead of failing open',
    category: 'safety',
    what: 'A new onFailure: "block" setting for command and HTTP hooks makes a hook that can\'t start, times out, or exits with an unexpected code block the action it was checking, instead of letting it through.',
    meaning:
      "If you write hooks to enforce rules -- blocking risky commands, requiring tests -- a broken or slow hook used to silently fail open. Add onFailure: 'block' to the hooks that matter so a hook outage closes the gate instead of opening it.",
    href: '/advanced-topics/plugins-and-hooks',
    hrefLabel: 'Writing hooks',
  },
  {
    title: 'Claude Haiku 5.5 is the new default Haiku model',
    category: 'models',
    what: 'Claude Haiku 5.5 shipped with a 1M-token context window and became the default Haiku model on the Anthropic API, priced at $0.10/$0.50 per million input/output tokens ($0.50/$2.50 above 100K tokens of input).',
    meaning:
      'If you run Claude Code against the Anthropic API and lean on Haiku for fast, cheap work, your next session may start on a newer, larger-context model with no change on your end. Check /model if you want to confirm the version or pin an older one.',
  },
  {
    title: 'Network-path file reads can no longer skip the permission prompt',
    category: 'safety',
    what: 'A security fix closed a gap where PreToolUse hook approvals and auto mode could bypass the permission prompt for file reads from network (UNC) paths.',
    meaning:
      'If you rely on hooks or auto mode to gate file access, this closes a real hole -- reads from network shares now go through the same prompt as any other file read. No action needed beyond updating.',
  },
  {
    title: '/code-review reports more by default on Opus 5.5 and Sonnet 5.5',
    category: 'workflow',
    what: "At medium effort, /code-review now also reports cleanup and CLAUDE.md-convention findings on models without tuned review settings, which includes Opus 5.5 and Sonnet 5.5.",
    meaning:
      'Running /code-review on the newest models will surface a few more findings than before at the same effort level -- the review is covering ground it used to skip, not getting stricter about bugs.',
  },
  {
    title: 'WebSearch no longer has a hard per-session cap',
    category: 'workflow',
    what: 'Interactive sessions used to stop WebSearch after 200 calls; it now refills at 100 calls an hour instead (CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR sets the rate, or 0 turns it off).',
    meaning:
      "Long research sessions that lean on web search won't hit a hard wall partway through anymore. If you want the old all-or-nothing limit back, or a different refill rate, it's one environment variable.",
  },
  {
    title: 'claude attach and claude logs take a partial session name',
    category: 'workflow',
    what: 'claude attach <name> and claude logs <name> now match on part of a session\'s name, not just its full id.',
    meaning:
      'You can reattach to or tail the logs of a background session by typing a few recognizable characters instead of hunting down the full session id first.',
  },
]

export default function WhatsNewPage() {
  const byCategory = CHANGES.reduce(
    (acc, c) => {
      ;(acc[c.category] ||= []).push(c)
      return acc
    },
    {} as Record<Change['category'], Change[]>
  )
  const categories = Object.keys(byCategory) as Change['category'][]

  return (
    <div className="min-h-screen bg-paper-50 dark:bg-ink-950">
      <div className="border-b border-ink-100 bg-white dark:border-ink-800 dark:bg-ink-900">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-ink-600 hover:text-primary-700 dark:text-ink-300 dark:hover:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/50">
              <Sparkles className="h-6 w-6 text-primary-700 dark:text-primary-400" />
            </div>
            <h1 className="text-3xl font-bold text-ink-900 dark:text-paper-50">
              What&apos;s New in Claude Code
            </h1>
          </div>

          <p className="max-w-2xl text-lg text-ink-600 dark:text-ink-300">
            Claude Code ships constantly, and the official release notes are
            written for people who already know what every line refers to. This
            page covers the changes worth knowing about and, for each one, what
            it changes about the way you work.
          </p>

          <p className="mt-4 text-sm text-ink-600 dark:text-ink-300">
            Covering releases through <strong>2.1.310</strong> · last reviewed{' '}
            <time dateTime="2026-10-26">26 October 2026</time> ·{' '}
            <a
              href="https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-700 underline underline-offset-2 dark:text-primary-400"
            >
              official changelog
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {categories.map((cat) => (
          <section key={cat} className="mb-12">
            <h2
              id={cat}
              className="mb-6 scroll-mt-24 text-xl font-bold text-ink-900 dark:text-paper-50"
            >
              {CATEGORY_LABEL[cat]}
            </h2>

            <div className="space-y-4">
              {byCategory[cat].map((c) => (
                <article
                  key={c.title}
                  className="rounded-xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-50">
                      {c.title}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_STYLE[c.category]}`}
                    >
                      {CATEGORY_LABEL[c.category]}
                    </span>
                  </div>

                  <p className="mb-3 text-ink-600 dark:text-ink-300">
                    {c.what}
                  </p>

                  <p className="border-l-2 border-primary-400 pl-4 text-ink-700 dark:text-ink-200">
                    <strong className="font-semibold">What it means: </strong>
                    {c.meaning}
                  </p>

                  {c.href && (
                    <Link
                      href={c.href}
                      className="mt-4 inline-block text-sm font-medium text-primary-700 hover:underline dark:text-primary-400"
                    >
                      {c.hrefLabel} →
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="rounded-xl border border-ink-100 bg-white p-8 dark:border-ink-800 dark:bg-ink-900">
          <h2 className="mb-2 font-display text-xl font-bold text-ink-900 dark:text-paper-50">
            Get this as it happens
          </h2>
          <p className="mb-6 text-ink-600 dark:text-ink-300">
            We read the release notes so you don&apos;t have to, and send a
            short digest when something actually changes how you work. No
            release-note dumps.
          </p>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  )
}
