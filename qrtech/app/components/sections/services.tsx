// app/components/sections/services.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Box, Cpu, Bot, Quote } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
    features: ['Next.js', 'React', 'Tailwind CSS', 'SEO Optimized']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative visual designs that communicate your brand message effectively and memorably.',
    features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Graphics']
  },
  {
    icon: Box,
    title: '3D Simulation & Rendering',
    description: 'Photorealistic 3D visualizations and simulations for architecture, products, and virtual experiences.',
    features: ['Architectural Viz', 'Product Design', 'Animation', 'VR Ready']
  },
  {
    icon: Cpu,
    title: 'PCB Designing',
    description: 'Professional printed circuit board design services for electronics and embedded systems.',
    features: ['Schematic Design', 'PCB Layout', 'Prototyping', 'Manufacturing Support']
  },
  {
    icon: Bot,
    title: 'AI & ChatBot Development',
    description: 'Intelligent AI solutions and conversational chatbots to automate and enhance customer interactions.',
    features: ['Custom AI Models', 'Natural Language', 'Integration', 'Analytics']
  },
  {
    icon: Quote,
    title: 'Quotation Services',
    description: 'Detailed project quotations and technical proposals for transparent pricing and planning.',
    features: ['Technical Analysis', 'Cost Breakdown', 'Timeline', 'Support Plan']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to drive your business forward 
            in the modern technological landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-light-background dark:bg-dark-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={24} />
              </div>
              
              <h3 className="mt-4 text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                {service.title}
              </h3>
              
              <p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary">
                {service.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-light-elevated dark:bg-dark-elevated text-light-text-secondary dark:text-dark-text-secondary rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}