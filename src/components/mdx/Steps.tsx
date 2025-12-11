'use client'

import { ReactNode, Children, isValidElement } from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface StepsProps {
  children: ReactNode
  className?: string
}

interface StepProps {
  title: string
  children: ReactNode
  className?: string
}

export function Steps({ children, className }: StepsProps) {
  const steps = Children.toArray(children).filter(isValidElement)

  return (
    <div className={cn('my-8', className)}>
      <ol className="relative space-y-8">
        {steps.map((step, index) => {
          if (!isValidElement(step)) return null

          return (
            <li key={index} className="relative pl-10">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[15px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-claude-300 to-gray-200 dark:from-claude-700 dark:to-gray-700" />
              )}

              {/* Step number circle */}
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-claude-500 to-orange-500 text-sm font-bold text-white shadow-md">
                {index + 1}
              </div>

              {step}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export function Step({ title, children, className }: StepProps) {
  return (
    <div className={cn('', className)}>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h4>
      <div className="text-gray-600 dark:text-gray-300 [&>p]:mb-3 [&>p:last-child]:mb-0 [&>ul]:mt-2 [&>ol]:mt-2">
        {children}
      </div>
    </div>
  )
}

// Alternative numbered list with completion states
interface ChecklistProps {
  children: ReactNode
  className?: string
}

interface ChecklistItemProps {
  children: ReactNode
  checked?: boolean
  className?: string
}

export function Checklist({ children, className }: ChecklistProps) {
  return (
    <ul className={cn('my-6 space-y-3', className)} role="list">
      {children}
    </ul>
  )
}

export function ChecklistItem({ children, checked = false, className }: ChecklistItemProps) {
  return (
    <li className={cn('flex items-start gap-3', className)}>
      <div
        className={cn(
          'mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition-colors',
          checked
            ? 'border-green-500 bg-green-500 text-white'
            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
        )}
      >
        {checked && <Check className="h-3 w-3" strokeWidth={3} />}
      </div>
      <span
        className={cn(
          'text-gray-700 dark:text-gray-300',
          checked && 'line-through text-gray-400 dark:text-gray-500'
        )}
      >
        {children}
      </span>
    </li>
  )
}
