'use client'

import { useState, ReactNode, Children, isValidElement, createContext, useContext } from 'react'
import { cn } from '@/lib/utils'

interface TabsContextType {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabsContext = createContext<TabsContextType | null>(null)

interface TabsProps {
  defaultTab?: string
  children: ReactNode
  className?: string
}

interface TabListProps {
  children: ReactNode
  className?: string
}

interface TabProps {
  value: string
  children: ReactNode
  icon?: ReactNode
  className?: string
}

interface TabPanelProps {
  value: string
  children: ReactNode
  className?: string
}

export function Tabs({ defaultTab, children, className }: TabsProps) {
  // Find the first Tab value to use as default
  let firstTabValue = defaultTab || ''

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === TabList) {
      const tabListChild = child as React.ReactElement<TabListProps>
      Children.forEach(tabListChild.props.children, (tabChild) => {
        if (isValidElement(tabChild) && tabChild.type === Tab && !firstTabValue) {
          const tabElement = tabChild as React.ReactElement<TabProps>
          firstTabValue = tabElement.props.value
        }
      })
    }
  })

  const [activeTab, setActiveTab] = useState(firstTabValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('my-6', className)}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabList({ children, className }: TabListProps) {
  return (
    <div
      className={cn(
        'flex gap-1 border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide',
        className
      )}
      role="tablist"
    >
      {children}
    </div>
  )
}

export function Tab({ value, children, icon, className }: TabProps) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('Tab must be used within Tabs')

  const { activeTab, setActiveTab } = context
  const isActive = activeTab === value

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={cn(
        'flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all whitespace-nowrap border-b-2 -mb-px',
        isActive
          ? 'border-claude-500 text-claude-600 dark:text-claude-400'
          : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600',
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  )
}

export function TabPanel({ value, children, className }: TabPanelProps) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('TabPanel must be used within Tabs')

  const { activeTab } = context
  const isActive = activeTab === value

  if (!isActive) return null

  return (
    <div
      role="tabpanel"
      className={cn('pt-6 animate-in fade-in-50 duration-200', className)}
    >
      {children}
    </div>
  )
}
