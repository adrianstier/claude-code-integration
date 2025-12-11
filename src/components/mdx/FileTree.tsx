'use client'

import { useState, ReactNode, Children } from 'react'
import { cn } from '@/lib/utils'
import { ChevronRight, Folder, FolderOpen, File, FileCode, FileJson, FileText } from 'lucide-react'

interface FileTreeProps {
  children: ReactNode
  className?: string
}

interface FolderNodeProps {
  name: string
  children?: ReactNode
  defaultOpen?: boolean
  className?: string
}

interface FileNodeProps {
  name: string
  highlight?: boolean
  className?: string
}

// Get appropriate icon based on file extension
function getFileIcon(filename: string) {
  const ext = filename.split('.').pop()?.toLowerCase()

  const codeExtensions = ['ts', 'tsx', 'js', 'jsx', 'py', 'rb', 'go', 'rs', 'java', 'cpp', 'c', 'h']
  const jsonExtensions = ['json', 'yaml', 'yml', 'toml']
  const textExtensions = ['md', 'mdx', 'txt', 'rst']

  if (codeExtensions.includes(ext || '')) {
    return <FileCode className="h-4 w-4 text-blue-500 dark:text-blue-400" />
  }
  if (jsonExtensions.includes(ext || '')) {
    return <FileJson className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
  }
  if (textExtensions.includes(ext || '')) {
    return <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
  }
  return <File className="h-4 w-4 text-gray-400 dark:text-gray-500" />
}

export function FileTree({ children, className }: FileTreeProps) {
  return (
    <div
      className={cn(
        'my-6 rounded-xl border border-gray-200 dark:border-gray-700',
        'bg-gray-50 dark:bg-gray-900/50 p-4 font-mono text-sm',
        'overflow-x-auto',
        className
      )}
    >
      <ul className="space-y-1">{children}</ul>
    </div>
  )
}

export function FolderNode({ name, children, defaultOpen = false, className }: FolderNodeProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const hasChildren = Children.count(children) > 0

  return (
    <li className={cn('', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 w-full text-left py-1 px-2 -ml-2 rounded-md',
          'hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors',
          'text-gray-700 dark:text-gray-300'
        )}
        disabled={!hasChildren}
      >
        <ChevronRight
          className={cn(
            'h-3 w-3 text-gray-400 transition-transform',
            isOpen && 'rotate-90',
            !hasChildren && 'invisible'
          )}
        />
        {isOpen ? (
          <FolderOpen className="h-4 w-4 text-claude-500 dark:text-claude-400" />
        ) : (
          <Folder className="h-4 w-4 text-claude-500 dark:text-claude-400" />
        )}
        <span className="font-medium">{name}</span>
      </button>

      {hasChildren && isOpen && (
        <ul className="ml-6 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-4">
          {children}
        </ul>
      )}
    </li>
  )
}

export function FileNode({ name, highlight = false, className }: FileNodeProps) {
  return (
    <li
      className={cn(
        'flex items-center gap-2 py-1 px-2 -ml-2 rounded-md',
        highlight && 'bg-claude-100/50 dark:bg-claude-900/30',
        'text-gray-600 dark:text-gray-400',
        className
      )}
    >
      <span className="w-3" /> {/* Spacer to align with folders */}
      {getFileIcon(name)}
      <span className={cn(highlight && 'text-claude-700 dark:text-claude-300 font-medium')}>
        {name}
      </span>
    </li>
  )
}
