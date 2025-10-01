// app/teams/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Github, Sparkles } from 'lucide-react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

const team = [
  {
    name: "John Banda",
    role: "Lead Developer",
    image: "/team/john.jpg",
    bio: "Full-stack developer with 5+ years experience in modern web technologies.",
    social: {
      linkedin: "#",
      github: "#",
      email: "john@quantumresolve.mw"
    }
  },
  {
    name: "Sarah Mwale",
    role: "UI/UX Designer",
    image: "/team/sarah.jpg",
    bio: "Creative designer passionate about creating intuitive and beautiful user experiences.",
    social: {
      linkedin: "#",
      dribbble: "#",
      email: "sarah@quantumresolve.mw"
    }
  },
  {
    name: "Mike Phiri",
    role: "3D Artist",
    image: "/team/mike.jpg",
    bio: "3D visualization expert specializing in architectural and product rendering.",
    social: {
      linkedin: "#",
      artstation: "#",
      email: "mike@quantumresolve.mw"
    }
  },
  {
    name: "Grace Kumwenda",
    role: "AI Engineer",
    image: "/team/grace.jpg",
    bio: "Machine learning specialist focused on creating intelligent solutions for local challenges.",
    social: {
      linkedin: "#",
      github: "#",
      email: "grace@quantumresolve.mw"
    }
  }
]

export default function Teams() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
          <section className="min-h-screen py-20 relative overflow-hidden glass-card parallax-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
                Meet Our <span className="text-light-primary dark:text-dark-primary">Team</span>
              </h1>
              <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
                Passionate innovators dedicated to driving technological advancement in Malawi. 
                Our diverse team brings together expertise from various fields to deliver exceptional solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-light-surface dark:bg-dark-surface rounded-2xl p-6 text-center group cursor-pointer"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-32 h-32 bg-light-elevated dark:bg-dark-elevated rounded-full flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-light-text-secondary dark:text-dark-text-secondary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
                    {member.name}
                  </h3>
                  <p className="text-light-primary dark:text-dark-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <button className="p-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="p-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                      <Github size={18} />
                    </button>
                    <button className="p-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-light-surface dark:bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-light-text-primary dark:text-dark-text-primary">
                Our <span className="text-light-primary dark:text-dark-primary">Culture</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
                },
                {
                  title: "Collaborative Spirit",
                  description: "Teamwork and open communication are at the heart of everything we do."
                },
                {
                  title: "Local Impact",
                  description: "We're committed to creating solutions that address real challenges in our community."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}