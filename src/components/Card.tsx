import Link from 'next/link'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  description: string
  href?: string
  icon?: string
  children?: ReactNode
  className?: string
  badge?: string
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange'
}

export default function Card({
  title,
  description,
  href,
  icon,
  children,
  className = '',
  badge,
  badgeColor = 'blue',
}: CardProps) {
  const badgeColors = {
    blue: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300',
    green: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300',
    orange: 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300',
  }

  const content = (
    <>
      <div className="relative">
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-claude-100 to-orange-100 dark:from-claude-900/50 dark:to-orange-900/50 text-2xl shadow-sm">
            {icon}
          </div>
        )}
        {badge && (
          <div className="absolute top-0 right-0">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeColors[badgeColor]}`}>
              {badge}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
      {children && <div className="mt-4">{children}</div>}
      {href && (
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-claude-600 dark:text-claude-400 transition-colors group-hover:text-claude-500 dark:group-hover:text-claude-300">
          <span>Learn more</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  )

  const baseClasses =
    'group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all hover:border-claude-300 dark:hover:border-claude-600 hover:shadow-xl hover:-translate-y-1'

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} block ${className}`}>
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-claude-100 to-orange-100 dark:from-claude-900/50 dark:to-orange-900/50 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"></div>
        <div className="relative">{content}</div>
      </Link>
    )
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-claude-100 to-orange-100 dark:from-claude-900/50 dark:to-orange-900/50 opacity-50 blur-2xl"></div>
      <div className="relative">{content}</div>
    </div>
  )
}
