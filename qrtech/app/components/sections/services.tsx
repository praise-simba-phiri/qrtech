// app/components/sections/services.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Box, Cpu, Bot, Quote, ArrowRight } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
    features: ['Next.js', 'React', 'Tailwind CSS', 'SEO Optimized'],
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative visual designs that communicate your brand message effectively and memorably.',
    features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Graphics'],
    gradient: 'from-green-500 to-teal-600'
  },
  {
    icon: Box,
    title: '3D Simulation & Rendering',
    description: 'Photorealistic 3D visualizations and simulations for architecture, products, and virtual experiences.',
    features: ['Architectural Viz', 'Product Design', 'Animation', 'VR Ready'],
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Cpu,
    title: 'PCB Designing',
    description: 'Professional printed circuit board design services for electronics and embedded systems.',
    features: ['Schematic Design', 'PCB Layout', 'Prototyping', 'Manufacturing Support'],
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: Bot,
    title: 'AI & ChatBot Development',
    description: 'Intelligent AI solutions and conversational chatbots to automate and enhance customer interactions.',
    features: ['Custom AI Models', 'Natural Language', 'Integration', 'Analytics'],
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Quote,
    title: 'Quotation Services',
    description: 'Detailed project quotations and technical proposals for transparent pricing and planning.',
    features: ['Technical Analysis', 'Cost Breakdown', 'Timeline', 'Support Plan'],
    gradient: 'from-yellow-500 to-orange-600'
  }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-20 relative overflow-hidden glass-card parallax-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-background via-blue-50/20 to-purple-50/10 dark:from-dark-background dark:via-blue-900/5 dark:to-purple-900/5" />
  <div className="absolute inset-0 bg-gradient-to-br from-light-background via-blue-50/20 to-purple-50/10 dark:from-dark-background dark:via-blue-900/5 dark:to-purple-900/5 parallax-bg" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-light-primary/5 dark:bg-dark-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-light-secondary/5 dark:bg-dark-secondary/10 rounded-full blur-3xl" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-light-surface dark:bg-dark-surface px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full animate-pulse" />
            <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              Our Expertise
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
            What We <span className="text-light-primary dark:text-dark-primary">Offer</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to drive your business forward 
            in the modern technological landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
                <div className="relative glass-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-light-primary/20 dark:group-hover:border-dark-primary/20 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <motion.span
                        key={feature}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-light-background dark:bg-dark-background text-light-text-secondary dark:text-dark-text-secondary rounded-full text-sm font-medium border border-light-elevated dark:border-dark-elevated group-hover:border-light-primary/30 dark:group-hover:border-dark-primary/30 transition-colors duration-300"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-light-primary dark:text-dark-primary font-semibold text-sm group/btn mt-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-light-primary dark:bg-dark-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}