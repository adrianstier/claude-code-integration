'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Initialize on mount - read from localStorage and current DOM state
  useEffect(() => {
    setMounted(true)

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setThemeState(savedTheme)
    }

    // Set initial resolved theme based on current document class (set by inline script)
    const root = window.document.documentElement
    if (root.classList.contains('dark')) {
      setResolvedTheme('dark')
    } else {
      setResolvedTheme('light')
    }
  }, [])

  // Apply theme changes - only after mounted to avoid hydration mismatch
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement

    // Determine the actual theme to apply
    let actualTheme: 'light' | 'dark'
    if (theme === 'system') {
      actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    } else {
      actualTheme = theme
    }

    setResolvedTheme(actualTheme)

    // Apply theme class
    root.classList.remove('light', 'dark')
    root.classList.add(actualTheme)

    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  // Custom setTheme that always triggers the effect
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      setResolvedTheme(mediaQuery.matches ? 'dark' : 'light')
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(mediaQuery.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
