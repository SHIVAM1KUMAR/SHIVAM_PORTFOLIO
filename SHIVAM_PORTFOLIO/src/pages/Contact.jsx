import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../pages/Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-item">
        <button className="contact-button" onClick={() => window.location.href = 'tel:+91-9117283826'}>
          <FaPhoneAlt size={20} />
          <span>Call Me</span>
        </button>
      </div>
      <div className="contact-item">
        <button className="contact-button" onClick={() => window.location.href = 'mailto:shivamkradp1411@gmail.com.com'}>
          <FaEnvelope size={20} />
          <span>Email Me</span>
        </button>
      </div>
      <div className="contact-item">
        <button className="contact-button" onClick={() => window.open('https://www.linkedin.com/in/shivam11kumar', '_blank')}>
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </button>
      </div>
      <div className="contact-item">
        <button className="contact-button" onClick={() => window.open('https://github.com/SHIVAM1KUMAR', '_blank')}>
          <FaGithub size={20} />
          <span>GitHub</span>
        </button>
      </div>
      <div className="contact-item">
        <button className="contact-button" onClick={() => window.open('https://www.instagram.com/shivam_kumar_14', '_blank')}>
          <FaInstagram size={20} />
          <span>Instagram</span>
        </button>
      </div>
    </section>
  );
}

export default Contact;
