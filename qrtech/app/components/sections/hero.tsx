// app/components/sections/hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary leading-tight"
            >
              Empowering{' '}
              <span className="text-light-primary dark:text-dark-primary">
                Malawi
              </span>{' '}
              Through Smart Innovation
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-xl text-light-text-secondary dark:text-dark-text-secondary"
            >
              QuantumResolve Technologies brings cutting-edge digital solutions 
              to drive growth and innovation across Malawi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group bg-light-primary dark:bg-dark-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="group border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary px-8 py-4 rounded-lg font-semibold hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2" size={20} />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* 3D Visualization Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-20 h-20 border-4 border-white rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-lg font-semibold">3D Interactive Demo</p>
                <p className="text-sm opacity-80 mt-2">Spline integration ready</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-light-alert dark:bg-dark-alert rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-light-secondary dark:bg-dark-secondary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}