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

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

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