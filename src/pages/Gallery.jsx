import React, { useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
// --- ИМПОРТ LIGHTBOX И ПЛАГИНА ---
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video"; 
import "yet-another-react-lightbox/styles.css"; 
import './Gallery.css';

import galleryClip0 from '../assets/v6.mp4';
import galleryClip1 from '../assets/g2vg.mp4';
import galleryClip2 from '../assets/g1v.mp4';
import t5 from '../assets/t5.jpeg';
import t6 from '../assets/t6.jpeg';
import t8 from '../assets/t8.jpeg';

const videoList = [
  { id: 100, type: 'video', src: galleryClip0 },
  { id: 101, type: 'video', src: galleryClip1 },
  { id: 102, type: 'video', src: galleryClip2 },
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

const extraImageList = [
  { id: 201, type: 'image', src: t5 },
  { id: 202, type: 'image', src: t6 },
  { id: 203, type: 'image', src: t8 },
];

// Объединяем контент
const galleryContent = [...videoList, ...extraImageList, ...imageList];

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