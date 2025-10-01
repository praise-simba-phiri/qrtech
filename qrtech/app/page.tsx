// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Header from './components/layout/header'
import Hero from './components/sections/hero'
import Services from './components/sections/services'
import About from './components/sections/about'
import Contact from './components/sections/contact'
import Footer from './components/layout/footer'
import LoadingScreen from './components/ui/loading-screen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Simulate minimum loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Don't render anything during SSR to avoid hydration mismatches
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-light-background dark:bg-dark-background">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-8 h-8 border-2 border-light-primary dark:border-dark-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}