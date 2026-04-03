import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız göndərildi! Tezliklə sizinlə əlaqə saxlanılacaq.");
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Bizimlə Əlaqə</h1>
        <p className="contact-subtitle">Sualınız və ya təklifiniz var? Bizə yazın!</p>
      </div>

      <div className="contact-main-grid">
        <div className="contact-info-section">
          <div className="contact-info-card">
            <div className="contact-icon-box"><FaMapMarkerAlt /></div>
            <div>
              <h4 className="contact-card-header">Ünvan</h4>
              <p className="contact-card-text">Bakı şəhəri, Nərimanov rayonu, Dərnəgül şossesi, 2082-ci məhəllə</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-box"><FaPhoneAlt /></div>
            <div>
              <h4 className="contact-card-header">Telefon</h4>
              <p className="contact-card-text">+994 99 711 91 97</p>
              <p className="contact-card-text">+994 12 567 19 19</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-box"><FaEnvelope /></div>
            <div>
              <h4 className="contact-card-header">E-poçt</h4>
              <p className="contact-card-text">info@guven.az</p>
              <p className="contact-card-text">support@guven.az</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-box"><FaClock /></div>
            <div>
              <h4 className="contact-card-header">İş Saatları</h4>
              <p className="contact-card-text">Bazar ertəsi – Cümə: 09:00 – 18:00</p>
              <p className="contact-card-text">Şənbə və Bazar: Bağlıdır</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-input-group">
              <input type="text" placeholder="Adınız və Soyadınız" className="contact-input" required />
              <input type="email" placeholder="E-poçt ünvanınız" className="contact-input" required />
            </div>
            <input type="text" placeholder="Mövzu" className="contact-input" required />
            <textarea placeholder="Mesajınız..." className="contact-textarea" required></textarea>
            <button type="submit" className="contact-submit-btn">Mesajı Göndər</button>
          </form>
        </div>
      </div>

      <div className="contact-map-container">
        <iframe 
          title="Guven Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.043644917616!2d49.8669433!3d40.4189393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzA4LjIiTiA0OcKwNTInMDAuOSJF!5e0!3m2!1saz!2saz!4v1700000000000" 
          width="100%" 
          height="400" 
          style={{ border: 0, borderRadius: '15px' }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;