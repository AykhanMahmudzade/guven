import React, { useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
// --- ИМПОРТ LIGHTBOX И ПЛАГИНА ---
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video"; 
import "yet-another-react-lightbox/styles.css"; 
import './Gallery.css';

// Gallery clips: large sources are gitignored; ship a small shared clip with the repo.
import galleryClip from '../assets/hero-video1.mp4';

const videoList = [
  { id: 101, type: 'video', src: galleryClip },
  { id: 102, type: 'video', src: galleryClip },
];

// 2. Генерируем фото, УБИРАЯ 8, 12, 15
const missingIds = [8, 12, 15];
const imageList = Array.from({ length: 16 }, (_, i) => i + 1)
  .filter(id => !missingIds.includes(id))
  .map(id => ({
    id: id,
    type: 'image',
    src: new URL(`../assets/g${id}.jpg`, import.meta.url).href
  }));

// Объединяем контент
const galleryContent = [...videoList, ...imageList];

const Gallery = () => {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setOpenLightbox(true);
  };

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="g-container">
          <h1 className="gallery-title">Qalereya</h1>
          <p className="gallery-subtitle">Fondumuzun fəaliyyətini əks etdirən foto və video arxiv</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="g-container">
          <div className="gallery-grid">
            {galleryContent.map((item, index) => (
              <div 
                key={item.id} 
                className={`gallery-item ${item.type}`}
                onClick={() => handleOpenLightbox(index)}
              >
                {item.type === 'image' ? (
                  <div className="media-wrapper">
                    <img src={item.src} alt="Guven Gallery" loading="lazy" />
                  </div>
                ) : (
                  <div className="media-wrapper video-wrapper">
                    <video 
                      src={item.src} 
                      muted 
                      loop 
                      playsInline
                      onMouseOver={e => e.target.play()} 
                      onMouseOut={e => e.target.pause()} 
                    />
                    <div className="video-icon-hint">
                      <FaVideo />
                    </div>
                  </div>
                )}
                <div className="gallery-overlay">
                  <span>Tam ölçü</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ИСПРАВЛЕННЫЙ LIGHTBOX --- */}
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        index={currentIndex}
        plugins={[Video]} 
        slides={galleryContent.map(item => {
          if (item.type === 'video') {
            return {
              type: "video",
              width: 1280, // Оптимальные размеры для плеера
              height: 720,
              sources: [
                {
                  src: item.src,
                  type: "video/mp4",
                },
              ],
              autoPlay: true,
              controls: true,
              muted: false, // ЗВУК ВКЛЮЧЕН
              playsInline: true,
            };
          }
          return { src: item.src }; // Для фото оставляем просто src
        })}
      />
    </div>
  );
};

export default Gallery;