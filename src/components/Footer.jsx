import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube,
  FaChevronRight 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const form = useRef();
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribing(true);

    // Твои ключи для подписки
    const SERVICE_ID = "service_zkn2o9k";
    const TEMPLATE_ID = "template_7wwepyi";
    const PUBLIC_KEY = "J8XxMTxwiPDYuMLC4";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert("Təbrik edirik! Uğurla abunə oldunuz.");
        e.target.reset(); // Очистить поле после подписки
      }, (error) => {
        console.error("Xəta:", error.text);
        alert("Xəta baş verdi, yenidən cəhd edin.");
      })
      .finally(() => {
        setSubscribing(false);
      });
  };

  return (
    <footer className="footer-main">
      <div className="footer-wrapper">
        <div className="footer-grid">
          
          {/* Колонка 1: О нас */}
          <div className="footer-column">
            <h3 className="footer-logo">GÜVƏN</h3>
            <p className="footer-description">
              Azərbaycanın təhsil sisteminin inkişafı və gənclərin gələcəyinə dəstək üçün fəaliyyət göstərən aparıcı fond.
            </p>
            <div className="social-icons-row">
              <a href="#" target="_blank"><FaFacebook /></a>
              <a href="#" target="_blank"><FaTwitter /></a>
              <a href="#" target="_blank"><FaInstagram /></a>
              <a href="#" target="_blank"><FaLinkedin /></a>
              <a href="#" target="_blank"><FaYoutube /></a>
            </div>
          </div>

          {/* Колонка 2: Naviqasiya */}
          <div className="footer-column">
            <h4>Naviqasiya</h4>
            <ul className="footer-links">
              <li><Link to="/"><FaChevronRight className="arrow-icon-min" /> Əsas Səhifə</Link></li>
              <li><Link to="/about"><FaChevronRight className="arrow-icon-min" /> Haqqımızda</Link></li>
              <li><Link to="/vision"><FaChevronRight className="arrow-icon-min" /> Vizyonumuz</Link></li>
              <li><Link to="/mission"><FaChevronRight className="arrow-icon-min" /> Missiyamız</Link></li>
              <li><Link to="/values"><FaChevronRight className="arrow-icon-min" /> Dəyərlərimiz</Link></li>
              <li><Link to="/gallery"><FaChevronRight className="arrow-icon-min" /> Qalereya</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Faydalı Linklər */}
          <div className="footer-column">
            <h4>Faydalı Linklər</h4>
            <ul className="footer-links">
              <li><Link to="/events"><FaChevronRight className="arrow-icon-min" /> Tədbirlər</Link></li>
              <li><Link to="/reviews"><FaChevronRight className="arrow-icon-min" /> Rəylər</Link></li>
              <li><Link to="/news"><FaChevronRight className="arrow-icon-min" /> Xəbərlər</Link></li>
              <li><Link to="/contact"><FaChevronRight className="arrow-icon-min" /> Əlaqə</Link></li>
              <li><Link to="/donate"><FaChevronRight className="arrow-icon-min" /> İanə Et</Link></li>
              <li><Link to="/volunteer"><FaChevronRight className="arrow-icon-min" /> Könüllü Ol</Link></li>
            </ul>
          </div>

          {/* Колонка 4: Контакты и Подписка */}
          <div className="footer-column">
            <h4>Əlaqə Məlumatları</h4>
            <ul className="contact-list-new">
              <li><FaMapMarkerAlt /> <span>Bakı şəhəri, Nərimanov rayon, Dərnəgül şossesi, 2082-ci məhəllə</span></li>
              <li><FaPhone /> <span>+994 99 711 91 97</span></li>
              <li><FaPhone /> <span>+994 12 342 19 19 (daxili 110)</span></li>
              <li><FaEnvelope /> <span>info@guven.az</span></li>
              <li><FaClock /> <span>Bazar ertəsi - Cümə: 09:00 - 18:00</span></li>
            </ul>

            <div className="subscribe-section">
              <h4>Abunə Ol</h4>
              <form ref={form} onSubmit={handleSubscribe} className="sub-box">
                {/* name="email" должен совпадать с {{email}} в EmailJS */}
                <input 
                  type="email" 
                  name="email" 
                  placeholder="E-poçt ünvanınız" 
                  required 
                />
                <button type="submit" disabled={subscribing}>
                  {subscribing ? "..." : "Göndər"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Нижняя черная панель */}
      <div className="footer-bottom-black">
        <div className="footer-wrapper footer-bottom-flex">
          <div className="copyright-text">
            © 2026 GÜVƏN TƏHSİLİN İNKİŞAFINA DƏSTƏK FONDU. Bütün hüquqlar qorunur.
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy">Məxfilik Siyasəti</Link>
            <Link to="/terms">İstifadə Şərtləri</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;