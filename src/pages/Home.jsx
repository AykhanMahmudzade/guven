import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
// Импорт Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Ассеты
import heroVideo from '../assets/hero-video1.mp4'; 
import main1 from '../assets/g14.jpg'; 

// Логотипы партнеров
import ilham from '../assets/İlhamAliyev.jpg';
import heyder from '../assets/HeyderAliyev.jpg';
import ze from '../assets/ze.jpg';
import mehriban from '../assets/MehribanAliyeva.jpg';
import flag from '../assets/flag.jpg';
import hef from '../assets/hef.jpg';
import mm from '../assets/mm.jpg';
import vq from '../assets/vq.png';
import tn from '../assets/tn.png';
import tk from '../assets/tk.png';
import tf from '../assets/tf.png';

import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [partnersSwiper, setPartnersSwiper] = useState(null);

  const partners = [
    { img: ilham, url: "https://president.az/" },
    { img: heyder, url: "https://president.az/az/pages/view/azerbaijan/leader" },
    { img: ze, url: "https://zarifa-aliyeva.az/" },
    { img: mehriban, url: "https://mehriban-aliyeva.az/" },
    { img: flag, url: "https://azerbaijan.az/" },
    { img: hef, url: "https://heydar-aliyev-foundation.org/az" },
    { img: mm, url: "https://www.meclis.gov.az/index.php?lang=az" },
    { img: vq, url: "https://www.virtualkarabakh.az/" },
    { img: tn, url: "https://edu.gov.az/" },
    { img: tk, url: "https://ttkf.edu.az/" },
    { img: tf, url: "https://tif.edu.az/" },
  ];

  return (
    <div className="home-page">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <video src={heroVideo} autoPlay muted loop playsInline className="hero-video-bg" />
        <div className="hero-overlay"></div> 
        <div className="hero-content">
          <span className="badge">2023-cü ildən fəaliyyətdə</span>
          <h1 className="main-title">Gələcəyə İnvestisiya</h1>
          <p className="hero-sub">Güvən Fondu-Azərbaycan təhsilinə dəstək verən və onun inkişafını təmin edən aparıcı təşkilatlardan biridir. </p>
          <div className="btn-group">
            <button className="primary-btn" onClick={() => navigate('/about')}>Haqqımızda</button>
            <button className="secondary-btn" onClick={() => navigate('/contact')}>Əlaqə</button>
          </div>
        </div>
      </section>

      {/* --- INFO CARDS --- */}
      <section className="info-section">
        <div className="grid-layout">
          {[
            { title: "Təhsil İmkanları", text: "Hər bir tələbə üçün yüksək keyfiyyətli və əlçatan təhsil imkanlarının yaradılmasını təmin edirik." },
            { title: "Təqaüd Proqramları", text: "İstedadlı gənclər üçün tam və qismən maliyyə dəstəyi göstərən təqaüd proqramları təqdim edirik." },
            { title: "İnnovativ Layihələr", text: "Təhsil sahəsində innovativ təşəbbüslərin inkişafını dəstəkləyir və onların həyata keçirilməsinə töhfə veririk." }
          ].map((item, index) => (
            <div key={index} className="info-card">
              <div className="icon-box">{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT PREVIEW --- */}
      <section className="about-preview-section">
        <div className="about-preview-container">
          <div className="about-preview-image">
            <img src={main1} alt="Güvən Fond" />
          </div>
          <div className="about-preview-text">
            <h2>GÜVƏN TƏHSİİLİN İNKİŞAFINA DƏSTƏK FONDU</h2>
            <p>Güvən Təhsilin İnkişafına Dəstək Fondu sosial baxımdan həssas ailələrdən olan tələbə gənclərin keyfiyyətli təhsil imkanlarına çıxışını təmin etmək məqsədilə təsis edilmişdir.</p>
            <button className="more-btn" onClick={() => navigate('/about')}>
              Daha ətraflı <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
      </section>

    

      {/* --- PARTNERS SLIDER (ТЕПЕРЬ В КОНЦЕ) --- */}
      <section className="partners-slider-section">
        <div className="partners-container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            onSwiper={setPartnersSwiper}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="partners-swiper"
          >
            {partners.map((item, index) => (
              <SwiperSlide key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="partner-link">
                  <div className="partner-card">
                    <img src={item.img} alt={`partner-${index}`} />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="partners-nav" aria-label="Partners slider controls">
            <button
              type="button"
              className="partners-nav-btn"
              aria-label="Previous"
              onClick={() => partnersSwiper?.slidePrev()}
            >
              &#8592;
            </button>
            <button
              type="button"
              className="partners-nav-btn"
              aria-label="Next"
              onClick={() => partnersSwiper?.slideNext()}
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;