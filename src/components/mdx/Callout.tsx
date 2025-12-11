'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  Lightbulb,
  Terminal,
  Zap,
} from 'lucide-react'

type CalloutType = 'info' | 'success' | 'warning' | 'error' | 'tip' | 'terminal' | 'note'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
  className?: string
}

const calloutConfig: Record<
  CalloutType,
  {
    icon: typeof Info
    iconColor: string
    bgColor: string
    borderColor: string
    titleColor: string
  }
> = {
  info: {
    icon: Info,
    iconColor: 'text-blue-500 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/50',
    borderColor: 'border-blue-200 dark:border-blue-800',
    titleColor: 'text-blue-900 dark:text-blue-100',
  },
  success: {
    icon: CheckCircle2,
    iconColor: 'text-green-500 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950/50',
    borderColor: 'border-green-200 dark:border-green-800',
    titleColor: 'text-green-900 dark:text-green-100',
  },
  warning: {
    icon: AlertTriangle,
    iconColor: 'text-amber-500 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/50',
    borderColor: 'border-amber-200 dark:border-amber-800',
    titleColor: 'text-amber-900 dark:text-amber-100',
  },
  error: {
    icon: AlertCircle,
    iconColor: 'text-red-500 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950/50',
    borderColor: 'border-red-200 dark:border-red-800',
    titleColor: 'text-red-900 dark:text-red-100',
  },
  tip: {
    icon: Lightbulb,
    iconColor: 'text-claude-500 dark:text-claude-400',
    bgColor: 'bg-claude-50 dark:bg-claude-950/50',
    borderColor: 'border-claude-200 dark:border-claude-800',
    titleColor: 'text-claude-900 dark:text-claude-100',
  },
  terminal: {
    icon: Terminal,
    iconColor: 'text-gray-500 dark:text-gray-400',
    bgColor: 'bg-gray-50 dark:bg-gray-900/50',
    borderColor: 'border-gray-200 dark:border-gray-700',
    titleColor: 'text-gray-900 dark:text-gray-100',
  },
  note: {
    icon: Zap,
    iconColor: 'text-purple-500 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-950/50',
    borderColor: 'border-purple-200 dark:border-purple-800',
    titleColor: 'text-purple-900 dark:text-purple-100',
  },
}

const defaultTitles: Record<CalloutType, string> = {
  info: 'Info',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  tip: 'Pro Tip',
  terminal: 'Terminal',
  note: 'Note',
}

export default function Callout({
  type = 'info',
  title,
  children,
  className,
}: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon
  const displayTitle = title ?? defaultTitles[type]

  return (
    <div
      className={cn(
        'my-6 rounded-xl border-l-4 p-4',
        config.bgColor,
        config.borderColor,
        className
      )}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className={cn('mt-0.5 flex-shrink-0', config.iconColor)}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          {displayTitle && (
            <p className={cn('font-semibold mb-1', config.titleColor)}>
              {displayTitle}
            </p>
          )}
          <div className="text-sm text-gray-700 dark:text-gray-300 [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
