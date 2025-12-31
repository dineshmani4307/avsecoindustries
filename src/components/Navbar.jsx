import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa'
import logo from '../Assets/avs-logo.png'   // 👈 IMPORT HERE
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">

        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          <img
            src={logo}
            alt="AVS ECO INDUSTRIES"
            className="logo-image"
          />
        </motion.div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => scrollToSection('hero')}>Home</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#benefits" onClick={() => scrollToSection('benefits')}>Benefits</a>
          <a href="#products" onClick={() => scrollToSection('products')}>Products</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
