import React, { useState, useRef } from 'react';
import { FaHandsHelping, FaUserEdit, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Volunteer.css';

const Volunteer = () => {
  const form = useRef(); 
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Твои личные ключи EmailJS
    const SERVICE_ID = "service_zkn2o9k"; 
    const TEMPLATE_ID = "template_gbxybhp"; 
    const PUBLIC_KEY = "J8XxMTxwiPDYuMLC4"; 

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log("Müraciət uğurla göndərildi!", result.text);
        setSubmitted(true);
      }, (error) => {
        console.error("Göndərmə xətası:", error.text);
        alert("Xəta baş verdi. Zəhmət olmasa interneti yoxlayın və ya sonra yenidən cəhd edin.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="volunteer-container">
      <div className="volunteer-hero">
        <h1 className="volunteer-main-title">Könüllü Ol</h1>
        <p className="volunteer-subtitle">Gənclərin gələcəyini birlikdə dəyişək!</p>
      </div>

      <div className="volunteer-content">
        <div className="volunteer-grid">
          <div className="volunteer-info-section">
            <div className="volunteer-icon-box"><FaHandsHelping /></div>
            <h2>Niyə bizə qoşulmalı?</h2>
            <p className="volunteer-text">
              Könüllü olaraq siz həm cəmiyyətə fayda verəcək, həm də yeni dostlar və 
              peşəkar təcrübə qazanacaqsınız. Bizim komandada hər kəs üçün yer var!
            </p>
            <ul className="volunteer-list">
              <li><FaCheckCircle className="volunteer-list-icon" /> Təşkilati işlərdə təcrübə</li>
              <li><FaCheckCircle className="volunteer-list-icon" /> Yeni network və dostluqlar</li>
              <li><FaCheckCircle className="volunteer-list-icon" /> Sertifikat və tövsiyə məktubu</li>
            </ul>
          </div>

          <div className="volunteer-form-section">
            {submitted ? (
              <div className="volunteer-success-message">
                <FaCheckCircle size={50} color="#28a745" />
                <h3>Müraciətiniz qəbul olundu!</h3>
                <p>Tezliklə sizinlə əlaqə saxlayacağıq.</p>
                <button onClick={() => setSubmitted(false)} className="volunteer-back-btn">Geri qayıt</button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="volunteer-form">
                <div className="volunteer-input-group">
                  <label><FaUserEdit /> Ad və Soyad</label>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="Məsələn: Əli Əliyev" 
                    required 
                    className="volunteer-input" 
                  />
                </div>
                
                <div className="volunteer-input-group">
                  <label><FaEnvelope /> E-poçt</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="example@mail.com" 
                    required 
                    className="volunteer-input" 
                  />
                </div>

                <div className="volunteer-input-group">
                  <label><FaPhone /> Telefon</label>
                  <input 
                    name="phone" 
                    type="tel" 
                    placeholder="+994 50 000 00 00" 
                    required 
                    className="volunteer-input" 
                  />
                </div>

                <div className="volunteer-input-group">
                  <label>Niyə bizə qoşulmaq istəyirsiniz?</label>
                  <textarea 
                    name="message" 
                    placeholder="Fikirlərinizi bölüşün..." 
                    rows="4" 
                    className="volunteer-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="volunteer-submit-btn" disabled={loading}>
                  {loading ? "Göndərilir..." : "Müraciət et"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;