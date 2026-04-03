import React, { useEffect, useState } from 'react';
import { 
  FaMapMarkedAlt, FaDirections, FaBuilding, FaTimes, FaExternalLinkAlt 
} from 'react-icons/fa';
import './Address.css';

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addressText = "Bakı şəhəri, Nərimanov rayon, Dərnəgül şossesi, 2082-ci məhəllə";
  
  // Координаты для района Дарнагюль (более точные)
  const lat = 40.4187; 
  const lng = 49.8642;

  // Ссылки для разных навигаторов (исправлены опечатки в URL)
  const maps = [
    { 
      name: 'Google Maps', 
      icon: '🌐', 
      url: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}` 
    },
    { 
      name: 'Waze', 
      icon: '🚙', 
      url: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes` 
    },
    { 
      name: 'Yandex Maps', 
      icon: '🚕', 
      url: `https://yandex.com/maps/?pt=${lng},${lat}&z=16&l=map` 
    },
    { 
      name: 'Apple Maps', 
      icon: '🍎', 
      url: `http://maps.apple.com/?daddr=${lat},${lng}` 
    }
  ];

  return (
    <div className="address-page">
      <section className="address-hero">
        <div className="a-container">
          <FaMapMarkedAlt className="address-hero-icon" />
          <h1>Ünvanımız</h1>
          <p>Ofisimizə gəlmək üçün naviqasiya tətbiqini seçin</p>
        </div>
      </section>

      <section className="address-content">
        <div className="a-container address-grid">
          
          <div className="address-info-card">
            <div className="info-item">
              <FaBuilding className="info-icon" />
              <div>
                <h3>Baş Ofis</h3>
                <p>{addressText}</p>
              </div>
            </div>

            <button className="directions-btn" onClick={() => setIsModalOpen(true)}>
              <FaDirections /> Naviqatorda açın
            </button>
          </div>

          <div className="address-map-container">
            {/* Реальная карта для предпросмотра (заменил src на рабочий эмбед) */}
            <iframe 
              title="Guven Location"
              src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.476472439818!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JDA3LjMiTiA0OcKwNTEnNTEuMSJF!5e0!3m2!1sen!2saz!4v1711000000000!5m2!1sen!2saz`}
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- MODAL FOR MAPS --- */}
      {isModalOpen && (
        <div className="maps-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="maps-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Naviqator seçin</h3>
              <button className="close-modal" onClick={() => setIsModalOpen(false)}><FaTimes /></button>
            </div>
            <div className="maps-list">
              {maps.map((map, index) => (
                <a key={index} href={map.url} target="_blank" rel="noopener noreferrer" className="map-option">
                  <span className="map-icon">{map.icon}</span>
                  <span className="map-name">{map.name}</span>
                  <FaExternalLinkAlt className="ext-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;