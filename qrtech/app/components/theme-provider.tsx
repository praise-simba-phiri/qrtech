// app/components/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

// Custom hook to use theme with your color system
export function useTheme() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme()
  
  const isDark = resolvedTheme === 'dark'
  const isLight = resolvedTheme === 'light'
  const isSystem = theme === 'system'

  return {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
    isDark,
    isLight,
    isSystem,
    toggleTheme: () => setTheme(isDark ? 'light' : 'dark')
  }
}

// Theme initializer to prevent flash
function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Apply theme class to HTML element for CSS variables
  React.useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    if (resolvedTheme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [resolvedTheme, mounted])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div 
        className="flex items-center justify-center min-h-screen bg-light-background dark:bg-dark-background"
        style={{ 
          // Prevent layout shift
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-light-primary dark:border-dark-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            Loading QuantumResolve...
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="quantumresolve-theme"
      {...props}
    >
      <ThemeInitializer>
        {children}
      </ThemeInitializer>
    </NextThemesProvider>
  )
}