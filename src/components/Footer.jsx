import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-logo">
              <FaLeaf className="footer-logo-icon" />
              <h3>AVS ECO INDUSTRIES</h3>
            </div>
            <p>
              Leading the green revolution with premium eco-friendly areca leaf plates.
              Sustainable, biodegradable, and beautiful.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/919444730165" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div> */}

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <FaEnvelope />
                <a href="mailto:avsecoindustries@gmail.com">avsecoindustries@gmail.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:9444730165">+91 94447 30165</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>
                  No.3/44, Middle Street,<br />
                  Veeraragavapuram Village & Post<br />
                  Thiruvalangadu, Tiruttani (Tk),<br />
                  Thiruvallur (Dt) - 631210
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Why Choose Us?</h4>
            <ul>
              <li>✓ 100% Natural & Biodegradable</li>
              <li>✓ Chemical-Free Production</li>
              <li>✓ Premium Quality Guaranteed</li>
              <li>✓ Eco-Friendly & Sustainable</li>
              <li>✓ Custom Sizes Available</li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} AVS ECO INDUSTRIES. All rights reserved.</p>
          {/* <p>Made with <span className="heart">❤️</span> for a greener planet</p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer

