import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

import plate6 from '../Assets/plate 6.png'
import plate8 from '../Assets/plate 8.png'
import plate10 from '../Assets/plate 10.png'
import plate12 from '../Assets/plate 12.png'

import './Products.css'

const Products = () => {
  const productFeatures = [
    'Round plates in various sizes (6", 8", 10", 12")',
    'Square plates for modern presentation',
    'Rectangular plates for serving',
    'Bowls for soups and curries',
    'Custom sizes available on request',
    'Bulk packaging options',
    'Food-grade quality guaranteed',
    'ISO certified manufacturing'
  ]

  const sizes = [
    { size: '6"', description: 'Perfect for snacks and appetizers', img: plate6 },
    { size: '8"', description: 'Ideal for main courses', img: plate8 },
    { size: '10"', description: 'Great for large portions', img: plate10 },
    { size: '12"', description: 'Perfect for sharing platters', img: plate12 }
  ]

  return (
    <section id="products" className="products">
      <div className="products-container">

        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Premium quality areca leaf plates for every occasion
          </p>
        </motion.div>

        <div className="products-content">

          {/* LEFT SIDE TEXT */}
          <motion.div
            className="products-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Product Range</h3>

            <p>
              We offer a comprehensive range of areca leaf plates in various shapes and sizes
              to meet all your dining needs. Each plate is carefully crafted to ensure durability,
              elegance, and environmental sustainability.
            </p>

            <div className="product-features">
              <h4>Available Products:</h4>

              <ul>
                {productFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="check-icon" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE SIZE CARDS */}
          <motion.div
            className="products-sizes"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Available Sizes</h3>

            <div className="sizes-grid">
              {sizes.map((item, index) => (
                <motion.div
                  key={index}
                  className="size-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <img src={item.img} alt={item.size} className="size-image" />

                  <div className="size-number">{item.size}</div>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="products-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Interested in Our Products?</h3>
          <p>Contact us for pricing, bulk orders, and custom requirements</p>

          <motion.button
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Us Now
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}

export default Products
