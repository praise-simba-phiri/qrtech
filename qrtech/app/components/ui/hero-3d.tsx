// app/components/ui/hero-3d.tsx
'use client'

import React, { Component } from 'react'
// ErrorBoundary for Spline runtime errors
class SplineErrorBoundary extends Component<{ children: React.ReactNode, onError: () => void }, { hasError: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: any) {
    if (this.props.onError) this.props.onError()
  }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}


import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function Hero3D() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Ensure we only run on client side
  useEffect(() => {
    setIsClient(true)
    // Simulate loading for UX
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleLoad = () => {
    setIsLoading(false)
    setError(false)
  }

  const handleError = () => {
  console.error('Failed to load 3D model')
  setError(true)
  setIsLoading(false)
  }

  // Enhanced fallback component
  const Fallback3D = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/30 dark:to-dark-secondary/30 rounded-3xl flex items-center justify-center border-2 border-dashed border-light-primary/30 dark:border-dark-primary/30"
    >
      <div className="text-center text-light-text-secondary dark:text-dark-text-secondary p-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-light-primary dark:border-dark-primary border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-lg font-semibold mb-2">Interactive 3D Experience</p>
        <p className="text-sm opacity-80 mb-4">Advanced technology visualization</p>
        
        {/* Animated tech elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-3 mb-4"
        >
          {['💻', '🚀', '🌟'].map((emoji, index) => (
            <motion.div
              key={emoji}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: index * 0.3 
              }}
              className="text-2xl"
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
        >
          Reload Experience
        </motion.button>
      </div>
    </motion.div>
  )

  // Minimal loading spinner
  const LoadingState = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-light-primary/10 to-light-secondary/10 dark:from-dark-primary/20 dark:to-dark-secondary/20 rounded-3xl z-10"
    >
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 border-4 border-light-primary dark:border-dark-primary border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Loading 3D Experience...</span>
      </div>
    </motion.div>
  )

  // Don't render anything during SSR
  if (!isClient) {
    return (
      <div className="relative h-96 lg:h-[600px] w-full bg-gradient-to-br from-light-primary/5 to-light-secondary/5 dark:from-dark-primary/10 dark:to-dark-secondary/10 rounded-3xl animate-pulse" />
    )
  }

  return (
    <div className="relative h-96 lg:h-[600px] w-full">
      {/* Loading State */}
      {isLoading && <LoadingState />}

      {/* 3D Container with iframe embed */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-light-primary/5 to-light-secondary/5 dark:from-dark-primary/10 dark:to-dark-secondary/10"
        >
          <iframe
            src="https://my.spline.design/nexbotrobotcharacterconcept-hhCRSEI1c4X4eot2XYcfCRAQ/"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ display: 'block', borderRadius: '1.5rem', background: 'transparent' }}
            allowFullScreen
            title="3D Experience"
          />
        </motion.div>
      )}

      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute -top-4 -right-4 w-8 h-8 bg-light-alert dark:bg-dark-alert rounded-full shadow-lg z-20"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-light-secondary dark:bg-dark-secondary rounded-full shadow-lg z-20"
      />

      {/* Connection dots animation removed for minimal look */}
    </div>
  )
}

// DynamicSpline removed: now using iframe embed