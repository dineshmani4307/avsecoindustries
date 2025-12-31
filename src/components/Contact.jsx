import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaUser, 
  FaBriefcase,
  FaWhatsapp
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:avsecoindustries@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
  }

  const contacts = [
    {
      name: 'Ashok Kumar',
      role: 'Managing Director',
      phone: '9444730165',
      icon: <FaBriefcase />
    },
    {
      name: 'Vamsi',
      role: 'Sales Manager',
      phone: '8072638066',
      icon: <FaUser />
    },
    {
      name: 'Kumar',
      role: 'Sales Executive',
      phone: '8098802581',
      icon: <FaUser />
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We'd love to hear from you. Contact us for inquiries, orders, or partnerships.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-cards">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  className="contact-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <h3>{contact.name}</h3>
                  <p className="contact-role">{contact.role}</p>
                  <div className="contact-phone">
                    <FaPhone />
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </div>
                  <a 
                    href={`https://wa.me/91${contact.phone}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="contact-details"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:avsecoindustries@gmail.com">avsecoindustries@gmail.com</a>
                </div>
              </div>

              <div className="detail-item">
                <FaMapMarkerAlt className="detail-icon" />
                <div>
                  <h4>Address</h4>
                  <p>
                    No.3/44, Middle Street, Veeraragavapuram Village & Post<br />
                    Thiruvalangadu, Tiruttani (Tk),<br />
                    Thiruvallur (Dt) - 631210
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your Message..."
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

