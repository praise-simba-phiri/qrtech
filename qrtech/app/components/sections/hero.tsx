// app/components/sections/hero.tsx (Enhanced)
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import Hero3D from '../ui/hero-3d'

export default function Hero() {
  return (
  <section id="home" className="min-h-screen relative overflow-hidden pt-20 glass-card parallax-section">
      {/* Enhanced Animated Background */}
  <div className="absolute inset-0 parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-light-background via-blue-50/30 to-purple-50/20 dark:from-dark-background dark:via-blue-900/10 dark:to-purple-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-light-primary/5 to-transparent dark:from-transparent dark:via-dark-primary/10 dark:to-transparent" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-light-secondary/10 dark:bg-dark-secondary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-light-primary/40 dark:bg-dark-primary/50 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full shadow-sm"
            >
              
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-light-text-primary dark:text-dark-text-primary leading-tight heading-shadow"
            >
              Empowering{' '}
              <span className="gradient-text heading-shadow animate-text-shine inline-block">
                Malawi
              </span>{' '}
              through <span className="font-bold gradient-text">smart innovation</span> that matters
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl lg:text-2xl text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"
            >
              Transforming businesses with cutting-edge digital solutions, <span className="text-light-primary dark:text-dark-primary font-semibold">built for Malawi's future.</span>
              <br />
              <span className="text-light-secondary dark:text-dark-secondary font-semibold">Empowering Malawi through smart innovation that matters.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-light-primary dark:bg-dark-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden glass-card btn-glow"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group text-light-primary dark:text-dark-primary px-8 py-4 rounded-xl font-semibold hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-white transition-all duration-300 flex items-center justify-center glass-card btn-glow"
              >
                <Play className="mr-2" size={20} />
                Watch Our Story
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="grid grid-cols-3 gap-8 pt-8 glass-card"
            >
              {[
                { number: '50+', label: 'Projects', delay: 0 },
                { number: '98%', label: 'Satisfaction', delay: 0.1 },
                { number: '24/7', label: 'Support', delay: 0.2 }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + stat.delay, type: "spring" }}
                    className="text-2xl lg:text-3xl font-bold text-light-primary dark:text-dark-primary mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced 3D Visualization Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
            className="relative"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-light-primary/50 dark:border-dark-primary/50 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-light-primary dark:bg-dark-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
