import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaLeaf, 
  FaRecycle, 
  FaShieldAlt, 
  FaFire, 
  FaWater, 
  FaHeart,
  FaTree,
  FaGlobeAmericas
} from 'react-icons/fa'
import './Benefits.css'

const Benefits = () => {
  const benefits = [
    {
      icon: <FaRecycle />,
      title: '100% Biodegradable',
      description: 'Naturally decomposes within 60-90 days without leaving any harmful residues. Perfect for composting and completely safe for the environment.',
      color: '#4ade80'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Chemical-Free',
      description: 'No chemicals, bleaches, or additives used in production. Made purely from natural areca palm leaves, ensuring food safety and health.',
      color: '#60a5fa'
    },
    {
      icon: <FaFire />,
      title: 'Microwave Safe',
      description: 'Can be safely used in microwaves for heating food. Durable and heat-resistant, perfect for hot meals and beverages.',
      color: '#f59e0b'
    },
    {
      icon: <FaWater />,
      title: 'Leak-Proof',
      description: 'Naturally water-resistant and leak-proof. Perfect for serving both dry and wet foods, including soups and curries.',
      color: '#3b82f6'
    },
    {
      icon: <FaHeart />,
      title: 'Healthy & Safe',
      description: 'No harmful toxins or chemicals that can leach into food. Safe for children and adults, maintaining the natural taste of food.',
      color: '#ef4444'
    },
    {
      icon: <FaTree />,
      title: 'Sustainable Sourcing',
      description: 'Made from naturally fallen areca palm leaves. No trees are cut down, making it a truly sustainable and renewable resource.',
      color: '#22c55e'
    },
    {
      icon: <FaLeaf />,
      title: 'Elegant Appearance',
      description: 'Beautiful natural texture and patterns make every plate unique. Adds an elegant, rustic touch to any dining experience.',
      color: '#10b981'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Carbon Neutral',
      description: 'Minimal carbon footprint in production. Helps reduce plastic waste and contributes to a cleaner, greener planet.',
      color: '#06b6d4'
    }
  ]

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <motion.div
          className="benefits-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Why Choose Areca Leaf Plates?</h2>
          <p className="section-subtitle">
            Discover the amazing benefits of our eco-friendly areca leaf plates
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="benefit-icon"
                style={{ color: benefit.color }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {benefit.icon}
              </motion.div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="benefits-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Join the Green Revolution</h3>
          <p>Make a positive impact on the environment with every meal</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

