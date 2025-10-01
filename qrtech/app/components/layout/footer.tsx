// app/components/layout/footer.tsx
'use client'

import { motion } from 'framer-motion'
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
     <footer className="w-full py-8 text-center text-xs text-light-text-secondary dark:text-dark-text-secondary border-t border-light-elevated/50 dark:border-dark-elevated/50 bg-light-surface dark:bg-dark-surface glass-card">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-light-primary/5 to-transparent dark:via-dark-primary/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <Sparkles className="w-8 h-8 text-light-primary dark:text-dark-primary" />
              <h3 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                QR <span className="text-light-primary dark:text-dark-primary">TECH</span>
              </h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-light-text-secondary dark:text-dark-text-secondary max-w-md text-lg leading-relaxed mb-6"
            >
              QuantumResolve Technologies - Empowering Malawi Through Smart Innovation That Matters. 
              Your trusted partner for comprehensive digital solutions.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-light-text-secondary dark:text-dark-text-secondary">
                <Mail className="w-4 h-4" />
                <span>info@quantumresolve.mw</span>
              </div>
              <div className="flex items-center space-x-3 text-light-text-secondary dark:text-dark-text-secondary">
                <Phone className="w-4 h-4" />
                <span>+265 xxx xxx xxx</span>
              </div>
              <div className="flex items-center space-x-3 text-light-text-secondary dark:text-dark-text-secondary">
                <MapPin className="w-4 h-4" />
                <span>Lilongwe, Malawi</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">
              Services
            </h4>
            <motion.ul className="space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
              {[
                'Website Design',
                'Graphic Design',
                '3D Simulation',
                'PCB Design',
                'AI Development'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5, color: 'var(--light-primary)' }}
                  className="transition-all duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">
              Quick Links
            </h4>
            <motion.ul className="space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
              {[
                'Home',
                'About',
                'Services',
                'Teams',
                'Portfolio',
                'Contact'
              ].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, color: 'var(--light-primary)' }}
                  className="transition-all duration-300 cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-light-elevated dark:border-dark-elevated mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
            © {currentYear} QuantumResolve Technologies. All rights reserved.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 mt-4 md:mt-0"
          >
            <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full animate-pulse" />
            <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              Building Malawi's Digital Future
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}