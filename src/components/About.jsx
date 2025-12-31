import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaRecycle, FaGlobe, FaAward } from 'react-icons/fa'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: '100% Natural',
      description: 'Made from naturally fallen areca palm leaves, no trees are cut down.'
    },
    {
      icon: <FaRecycle />,
      title: 'Fully Biodegradable',
      description: 'Compostable within 60-90 days, leaving no harmful residues.'
    },
    {
      icon: <FaGlobe />,
      title: 'Eco-Friendly',
      description: 'Zero plastic, zero chemicals, 100% sustainable and safe for the environment.'
    },
    {
      icon: <FaAward />,
      title: 'Premium Quality',
      description: 'Durable, leak-proof, and perfect for any occasion or event.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About AVS ECO INDUSTRIES</h2>
          <p className="section-subtitle">
            Leading the way in sustainable, eco-friendly disposable tableware
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Our Mission</h3>
            <p>
              At AVS ECO INDUSTRIES, we are committed to providing premium quality areca leaf plates
              that are not only beautiful and functional but also completely sustainable. Our products
              are made from naturally fallen areca palm leaves, ensuring no harm to the environment.
            </p>
            <p>
              We believe in creating a greener future, one plate at a time. Our areca leaf plates are
              perfect for parties, events, restaurants, and everyday use, offering a natural alternative
              to plastic and paper products.
            </p>
            <p>
              With years of experience in the industry, we ensure the highest quality standards while
              maintaining our commitment to environmental sustainability and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

