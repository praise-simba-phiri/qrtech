// app/components/sections/about.tsx
'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower Malawian businesses and organizations with innovative technology solutions that drive real growth and transformation.'
  },
  {
    icon: Users,
    title: 'Our Vision',
    description: 'A technologically advanced Malawi where every business has access to world-class digital solutions tailored to local needs.'
  },
  {
    icon: Award,
    title: 'Our Promise',
    description: 'Delivering exceptional quality, reliable support, and innovative solutions that make a meaningful impact on your business.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary">
              About <span className="text-light-primary dark:text-dark-primary">QR TECH</span>
            </h2>
            
            <p className="mt-6 text-lg text-light-text-secondary dark:text-dark-text-secondary">
              QuantumResolve Technologies (QR TECH) is a premier technology solutions provider 
              based in Malawi, dedicated to bringing world-class digital innovation to local 
              businesses and organizations.
            </p>
            
            <p className="mt-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
              We combine international expertise with deep local understanding to create 
              solutions that are not just technologically advanced, but also perfectly 
              suited to the unique challenges and opportunities in the Malawian market.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary">50+</div>
                <div className="text-light-text-secondary dark:text-dark-text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary">98%</div>
                <div className="text-light-text-secondary dark:text-dark-text-secondary">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary">24/7</div>
                <div className="text-light-text-secondary dark:text-dark-text-secondary">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-surface dark:bg-dark-surface rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary">
                      {value.description}
                    </p>
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