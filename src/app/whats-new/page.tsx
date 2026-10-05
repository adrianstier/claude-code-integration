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
    title: "Mods let plugins change how Claude Code's interface behaves",
    category: 'extend',
    what: 'A new plugin capability called Mods goes beyond adding commands or tools: it lets a plugin modify Claude Code\'s own interface and deeper behavior. Anthropic shipped one itself, "You should know," a built-in mod where a side agent watches your session and flags things you or Claude might miss.',
    meaning:
      'This is a much bigger surface than earlier plugin hooks -- a Mod can draw its own UI and intercept more of what you see, so the trust bar for installing one should be higher too. Try the built-in one with /plugin enable cc-plugin-you-should-know@builtin (first-party sessions with telemetry on); treat any third-party Mod the way you would any other plugin you have not audited.',
    href: '/advanced-topics/plugins-and-hooks',
    hrefLabel: 'Plugins and hooks',
  },
  {
    title: 'A skill literally named "verify" now runs before every commit',
    category: 'workflow',
    what: 'If your project or user skills include one named exactly verify, Claude Code now runs it right before committing, skipping only docs-only and tests-only commits.',
    meaning:
      'Write a verify skill once -- tests, lint, whatever your project needs -- and Claude runs it as a pre-commit check without being asked each time. The name has to match exactly; a skill called something else is not picked up automatically.',
    href: '/advanced-topics/skills',
    hrefLabel: 'Working with skills',
  },
  {
    title: 'Auto mode is now the default permission mode everywhere',
    category: 'safety',
    what: 'Interactive terminal and VS Code sessions now start in auto mode by default on every plan and every provider, unless your settings already set permissions.defaultMode.',
    meaning:
      'A fresh install now asks for less manual approval out of the box than it used to. If you want the old behavior of confirming every action, set permissions.defaultMode explicitly -- it still overrides this new default.',
    href: '/advanced-topics/best-practices',
    hrefLabel: 'Configuring permissions',
  },
  {
    title: 'Claude Sonnet 5.5 is the new default Sonnet on the API',
    category: 'models',
    what: 'Claude Sonnet 5.5 shipped with a 1M-token context window and became the default Sonnet model for sessions on the Anthropic API, priced at $2/$10 per million input/output tokens with $0.20/Mtok cache reads.',
    meaning:
      'If you run Claude Code against the Anthropic API directly rather than through a claude.ai plan, your next session may start on a newer model with a much larger context window without you changing anything. Check /model if you want to confirm which version you are on or pin an older one.',
  },
  {
    title: 'Ultracode is now a standalone toggle, not tied to effort',
    category: 'models',
    what: 'Ultracode moved out from under the /effort slider into its own on/off switch (Tab in /effort, or /effort ultracode on|off). It no longer forces reasoning effort to xhigh, and now stays on regardless of the effort level you pick.',
    meaning:
      'If you relied on turning on Ultracode to also push effort to maximum, that side effect is gone -- set effort and Ultracode independently from now on.',
    href: '/advanced-topics/productivity-features',
    hrefLabel: 'Effort control and thinking modes',
  },
  {
    title: 'Opus 5.5 is the new default model',
    category: 'models',
    what: 'Claude Opus 5.5 shipped with a 1M-token context window, and replaced Sonnet as the default model on Pro and Team Standard plans (Max, Team Premium and Enterprise already defaulted to Opus).',
    meaning:
      'If you are on Pro or Team Standard, sessions now start on Opus instead of Sonnet by default -- more capable, but priced higher per token, so watch usage if you were relying on Sonnet cost. Switch back any time with /model.',
  },
  {
    title: '/doctor prompt-audit flags stale prompting patterns',
    category: 'extend',
    what: 'A new /doctor prompt-audit (also /checkup prompt-audit) command scans your CLAUDE.md files, skills, agents and commands for prompting patterns written for older Claude models.',
    meaning:
      'If your CLAUDE.md or custom skills have accumulated workaround instructions over many months, this gives you a concrete list of what may no longer be needed instead of leaving you to guess which lines still earn their keep.',
    href: '/advanced-topics/best-practices',
    hrefLabel: 'Writing an effective CLAUDE.md',
  },
  {
    title: '/insights estimates what auto mode would have caught',
    category: 'safety',
    what: '/insights now includes a recommendation showing how many permission prompts in your recent sessions auto mode could have resolved on its own.',
    meaning:
      'Instead of guessing whether auto mode fits how you work, you get a number pulled from your own session history before deciding to turn it on.',
  },
  {
    title: 'attribution: false hides commit and PR credit lines',
    category: 'config',
    what: 'A new attribution: false setting in settings.json turns off the Co-Authored-By and Claude Code footer lines added to commits and pull requests, in one place.',
    meaning:
      'Teams that do not want AI attribution in git history get an official switch instead of a CLAUDE.md workaround. Older Claude Code versions ignore a settings file that holds this as a plain boolean, so check compatibility before rolling it out on a team running mixed versions.',
  },
  {
    title: 'AGENTS.md now works without a CLAUDE.md',
    category: 'config',
    what: 'Projects that use the cross-tool AGENTS.md convention are read directly, rather than needing a CLAUDE.md to exist first.',
    meaning:
      'If you work in a repo shared with people on other AI coding tools, you can keep one instructions file instead of maintaining two that drift apart. If your project already has a CLAUDE.md, nothing changes for you.',
    href: '/advanced-topics/best-practices',
    hrefLabel: 'How project instructions are read',
  },
  {
    title: 'Auto mode moved to a server-side classifier',
    category: 'safety',
    what: 'For Claude API and Enterprise accounts, the decision about which actions need approval is now made server-side, and /status shows where that classifier is running.',
    meaning:
      'Permission prompts get more consistent between machines, because the decision no longer depends on your local build. If you have been tuning permission rules by hand, re-check them — the behaviour you were working around may be gone.',
    href: '/advanced-topics/best-practices',
    hrefLabel: 'Configuring permissions',
  },
  {
    title: 'Per-command allowed domains for sandboxed runs',
    category: 'safety',
    what: 'A sandboxed command can be granted its own list of reachable domains instead of inheriting one blanket network policy.',
    meaning:
      'The practical win is letting a build step reach your package registry without opening the whole network for everything else. This is the setting to reach for instead of disabling the sandbox.',
  },
  {
    title: 'Bash results now include a file diff',
    category: 'workflow',
    what: 'When a command changes files, the result shows what changed rather than only the command output.',
    meaning:
      'You can see the effect of a script without running git diff yourself, which matters most when a command does more than you expected and you want to catch it immediately.',
  },
  {
    title: 'Ctrl+Enter sends the current turn',
    category: 'workflow',
    what: 'A dedicated send key interrupts and submits, separate from Enter.',
    meaning:
      'Useful once you have run /terminal-setup and rebound Shift+Enter to newline — you get an explicit send that does not depend on where the cursor sits.',
    href: '/start-here/mac-setup',
    hrefLabel: 'Run /terminal-setup first',
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
            Covering releases through <strong>2.1.289</strong> · last reviewed{' '}
            <time dateTime="2026-10-05">5 October 2026</time> ·{' '}
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
