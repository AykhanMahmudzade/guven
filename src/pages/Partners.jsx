import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Partners.css';

// Импорт логотипов (убедись, что они в src/assets/)
import ilchinImg from '../assets/ilcin.jpg';
import azerishImg from '../assets/azerish.jpg';
import vumartImg from '../assets/vumart.jpg';
import yabanBulvarImg from '../assets/yabanbulvar.jpg';
import yabanSBImg from '../assets/yabansb.jpg';
import porterhouseImg from '../assets/porterhouse.jpg';
import bakupostImg from '../assets/bakupost.jpg';
import mpImg from '../assets/mp.jpg';
import atelier61 from '../assets/atelier61.jpg';
import antepImg from '../assets/antep.jpg';

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerList = [
    { name: 'Ilchin LTD', img: ilchinImg, link: 'https://www.instagram.com/ilchin.ltd?igsh=MTBjcTlsOW04eHM2aw%3D%3D' },
    { name: 'Azerish LTD', img: azerishImg, link: 'https://www.instagram.com/azerishltdmmc?igsh=MWRmbDA5NTkyaWF0MQ==' },
    { name: 'Vumart Gross', img: vumartImg, link: 'https://www.instagram.com/vumart.az?igsh=YXFvNTBybTFmaW56' },
    { name: 'Yaban Bulvar', img: yabanBulvarImg, link: 'https://www.instagram.com/yaban.bulvar?igsh=MTc5MDl4eHkycmp1ZA==' },
    { name: 'Yaban Sea Breeze', img: yabanSBImg, link: 'https://www.instagram.com/yaban.seabreeze?igsh=YjJqOHF5MWJuNWFh' },
    { name: 'Porterhouse Grill & Wine', img: porterhouseImg, link: 'https://www.instagram.com/porterhousebaku?igsh=OHlvdjJtaHRqZmpx' },
    { name: 'BakuPost', img: bakupostImg, link: 'https://www.instagram.com/bakupost_az?igsh=MXM0dWk5M2ZsaDhwcw==' },
    { name: 'Mirzayev and Partners', img: mpImg, link: 'https://www.instagram.com/mirzayevandpartners/' },
    { name: 'Atelier 61 Events Hall', img: atelier61, link: 'https://www.instagram.com/atelier61.eventshall/' },
    { name: 'Antec Academy', img: antepImg, link: 'https://www.instagram.com/antecacademy/' },
  ];

  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="partners-hero-content">
          <h1 className="partners-hero-title">Partnyorlar</h1>
          <p className="partners-hero-subtitle">
            Gələcəyi birlikdə qurduğumuz dəyərli tərəfdaşlarımız
          </p>
        </div>
      </section>

      <section className="partners-section">
        <div className="p-container">
          <div className="partners-grid">
            {partnerList.map((partner, index) => (
              <a 
                href={partner.link} 
                key={index} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="partner-card"
              >
                <div className="partner-img-wrapper">
                  {partner.img ? (
                    <img src={partner.img} alt={partner.name} className="partner-logo" />
                  ) : (
                    <div className="partner-img-placeholder">
                      <span>{partner.name.charAt(0)}</span>
                    </div>
                  )}

                </div>
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <span className="partner-link-text">Keçid et <FaExternalLinkAlt /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;