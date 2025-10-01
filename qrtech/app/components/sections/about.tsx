// app/components/sections/about.tsx
'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Sparkles } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower Malawian businesses and organizations with innovative technology solutions that drive real growth and transformation.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Our Vision',
    description: 'A technologically advanced Malawi where every business has access to world-class digital solutions tailored to local needs.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Our Promise',
    description: 'Delivering exceptional quality, reliable support, and innovative solutions that make a meaningful impact on your business.',
    color: 'from-orange-500 to-red-500'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
  <section id="about" className="py-20 relative overflow-hidden glass-card parallax-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-background via-green-50/20 to-blue-50/10 dark:from-dark-background dark:via-green-900/5 dark:to-blue-900/5" />
  <div className="absolute inset-0 bg-gradient-to-br from-light-background via-green-50/20 to-blue-50/10 dark:from-dark-background dark:via-green-900/5 dark:to-blue-900/5 parallax-bg" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-light-primary/5 dark:bg-dark-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-light-secondary/5 dark:bg-dark-secondary/10 rounded-full blur-3xl" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-light-surface dark:bg-dark-surface px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-light-primary dark:text-dark-primary" />
              <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                About QR TECH
              </span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6 glass-card">
              About <span className="text-light-primary dark:text-dark-primary">QR TECH</span>
            </h2>
            
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg lg:text-xl text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"
              >
                QuantumResolve Technologies (QR TECH) is a premier technology solutions provider 
                based in Malawi, dedicated to bringing world-class digital innovation to local 
                businesses and organizations.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg lg:text-xl text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"
              >
                We combine international expertise with deep local understanding to create 
                solutions that are not just technologically advanced, but also perfectly 
                suited to the unique challenges and opportunities in the Malawian market.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8"
            >
              {[
                { number: '50+', label: 'Projects', delay: 0 },
                { number: '98%', label: 'Satisfaction', delay: 0.1 },
                { number: '24/7', label: 'Support', delay: 0.2 }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + stat.delay, type: "spring" }}
                    className="text-2xl lg:text-3xl font-bold text-light-primary dark:text-dark-primary mb-2"
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

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                <div className="relative glass-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-light-primary/20 dark:group-hover:border-dark-primary/20">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <value.icon className="text-white" size={28} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}