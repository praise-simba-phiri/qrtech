// app/components/analytics.tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views with your analytics service
    const url = pathname + searchParams.toString()
    
    // Example: Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: url,
      })
    }
    
    // You can add other analytics services here
    console.log('Page view:', url)
  }, [pathname, searchParams])

  return null
}