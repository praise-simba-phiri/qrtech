// app/components/sections/contact.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
  <section id="contact" className="py-20 relative overflow-hidden glass-card parallax-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-surface via-purple-50/20 to-pink-50/10 dark:from-dark-surface dark:via-purple-900/5 dark:to-pink-900/5" />
  <div className="absolute inset-0 bg-gradient-to-br from-light-surface via-purple-50/20 to-pink-50/10 dark:from-dark-surface dark:via-purple-900/5 dark:to-pink-900/5 parallax-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-light-primary/5 dark:bg-dark-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-light-secondary/5 dark:bg-dark-secondary/10 rounded-full blur-3xl" />
      
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
            className="inline-flex items-center space-x-2 bg-light-background dark:bg-dark-background px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-light-primary dark:text-dark-primary" />
            <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              Get In Touch
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
            Let's <span className="text-light-primary dark:text-dark-primary">Connect</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can 
            bring your ideas to life with innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email Us',
                  content: 'info@quantumresolve.mw',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Phone,
                  title: 'Call Us',
                  content: '+265 xxx xxx xxx',
                  gradient: 'from-green-500 to-teal-500'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Lilongwe, Malawi',
                  gradient: 'from-purple-500 to-pink-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-6 p-6 rounded-2xl bg-light-background dark:bg-dark-background border border-light-elevated dark:border-dark-elevated hover:border-light-primary/30 dark:hover:border-dark-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <item.icon className="text-white" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary text-lg">
                      {item.title}
                    </h4>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 p-8 bg-light-background dark:bg-dark-background rounded-3xl border border-light-elevated dark:border-dark-elevated"
            >
              <h4 className="font-bold text-light-text-primary dark:text-dark-text-primary text-xl mb-6">
                Why Choose QR TECH?
              </h4>
              <ul className="space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
                {[
                  'Local expertise with global standards',
                  '24/7 dedicated support',
                  'Competitive pricing',
                  'Quick project turnaround',
                  'Proven track record'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-light-background dark:bg-dark-background border border-light-elevated dark:border-dark-elevated rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 placeholder-light-text-secondary/50 dark:placeholder-dark-text-secondary/50"
                    placeholder="Your full name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-light-background dark:bg-dark-background border border-light-elevated dark:border-dark-elevated rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 placeholder-light-text-secondary/50 dark:placeholder-dark-text-secondary/50"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-light-background dark:bg-dark-background border border-light-elevated dark:border-dark-elevated rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 placeholder-light-text-secondary/50 dark:placeholder-dark-text-secondary/50"
                  placeholder="What is this regarding?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-light-background dark:bg-dark-background border border-light-elevated dark:border-dark-elevated rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 resize-none placeholder-light-text-secondary/50 dark:placeholder-dark-text-secondary/50"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-light-primary dark:bg-dark-primary text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.span
                  animate={isSubmitting ? { opacity: 0 } : { opacity: 1 }}
                  className="flex items-center"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </motion.span>
                
                {isSubmitting && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  </motion.div>
                )}
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}