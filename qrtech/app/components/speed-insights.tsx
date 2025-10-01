// app/components/speed-insights.tsx
'use client'

import { useEffect } from 'react'

export function SpeedInsights() {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log('Performance Entry:', entry)
          // Send to your analytics service
        })
      })

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })

      return () => observer.disconnect()
    }
  }, [])

  return null
}