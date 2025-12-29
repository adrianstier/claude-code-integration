import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  description: string
  href?: string
  icon?: string
  children?: ReactNode
  className?: string
  badge?: string
  badgeColor?: 'primary' | 'sage' | 'plum' | 'amber' | 'cobalt'
}

export default function Card({
  title,
  description,
  href,
  icon,
  children,
  className = '',
  badge,
  badgeColor = 'primary',
}: CardProps) {
  const badgeColors = {
    primary: 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300',
    sage: 'bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-300',
    plum: 'bg-plum-100 dark:bg-plum-900/40 text-plum-700 dark:text-plum-300',
    amber: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
    cobalt: 'bg-cobalt-100 dark:bg-cobalt-900/40 text-cobalt-700 dark:text-cobalt-300',
  }

  const content = (
    <>
      <div className="relative">
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/40 text-2xl shadow-sm">
            {icon}
          </div>
        )}
        {badge && (
          <div className="absolute top-0 right-0">
            <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium', badgeColors[badgeColor])}>
              {badge}
            </span>
          </div>
        )}
      </div>

      <h3 className="font-display text-lg font-bold text-ink-900 dark:text-paper-50">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
        {description}
      </p>

      {children && <div className="mt-4">{children}</div>}

      {href && (
        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 transition-colors group-hover:text-primary-500 dark:group-hover:text-primary-300">
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </>
  )

  const baseClasses = cn(
    'group relative overflow-hidden rounded-2xl',
    'border border-ink-100 dark:border-ink-800',
    'bg-white dark:bg-ink-900',
    'p-6 shadow-card',
    'transition-all duration-300',
    'hover:border-ink-200 dark:hover:border-ink-700',
    'hover:shadow-card-hover hover:-translate-y-1'
  )

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, 'block', className)}>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-amber-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Corner glow */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary-200 to-amber-200 dark:from-primary-900/30 dark:to-amber-900/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-60" />
        <div className="relative">{content}</div>
      </Link>
    )
  }

  return (
    <div className={cn(baseClasses, className)}>
      {/* Corner glow */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary-200 to-amber-200 dark:from-primary-900/30 dark:to-amber-900/30 opacity-30 blur-2xl" />
      <div className="relative">{content}</div>
    </div>
  )
}
