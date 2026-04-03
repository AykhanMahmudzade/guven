import React from 'react';
import { FaRocket, FaEye, FaGraduationCap, FaHandsHelping, FaLightbulb, FaGlobe } from 'react-icons/fa';
import './Vision.css';
import g4 from '../assets/g4.jpg';

const VisionMission = () => {
  return (
    /* Заменили content-wrapper на vision-page-container, чтобы убрать гигантский отступ */
    <div className="vision-page-container">
      {/* Hero-заголовок страницы */}
      <section className="page-header">
        <div className="container">
          <h1 className="reveal-text">Vizyon və Missiyamız</h1>
          <p className="reveal-sub">Gələcəyin təhsilini birlikdə quraq</p>
        </div>
      </section>

      <div className="container section-padding">
        
        {/* Блок МИССИЯ */}
        <div className="mission-vision-container">
          <div className="mission-content">
            <div className="section-title-box">
              <FaRocket className="section-icon" />
              <h2>Missiyamız</h2>
            </div>
            <div className="text-block">
              <p>
                <strong>“Güvən Təhsilin İnkişafına Dəstək Fondu”nun</strong> missiyası Azərbaycanda təhsilin inkişafına dəstək vermək, gənclərin bilik və bacarıqlarının artırılmasına, onların intellektual və şəxsi potensialının üzə çıxarılmasına şərait yaratmaqdır.
              </p>
              <p>
                Fond təhsil sahəsində həyata keçirdiyi layihələr və təшəbbüslər vasitəsilə savadlı, yüksək düşüncə qabiliyyətinə malik, milli-mənəvi dəyərlərə bağlı, vətənpərvər və cəmiyyətin inkişafında fəal iştirak edən gənc nəslin formalaşmasına töhfə verməyi qarşısına məqsəd qoyur.
              </p>
            </div>
          </div>
          <div className="mission-image">
             <img src={g4} alt="Təhsil Gələcəkdir" className="vision-photo" />
          </div>
        </div>

        {/* Блок Визьон */}
        <div className="vision-grid section-padding">
          <div className="vision-card main-vision">
            <div className="section-title-box">
              <FaEye className="section-icon" />
              <h2>Vizyonumuz</h2>
            </div>
            <p>
              Azərbaycanda təhsilin inkişafına töhfə verən, gənclərin intellektual və sosial inkişafını dəstəkləyən, cəmiyyətin tərəqqisinə xidmət edən nüfuzlu və etibarlı ictimai təşkilatlardan birinə çevrilməkdir.
            </p>
          </div>

          <div className="vision-features">
            <div className="feature-item">
              <FaGraduationCap className="f-icon" />
              <p>Təhsilin ən yüksək dəyər kimi qəbul olunduğu cəmiyyət formalaşdırmaq.</p>
            </div>
            <div className="feature-item">
              <FaLightbulb className="f-icon" />
              <p>İnnovativ ideyaların və təhsil təşəbbüslərinin reallaşdırılması.</p>
            </div>
            <div className="feature-item">
              <FaGlobe className="f-icon" />
              <p>Beynəlxalq səviyyədə tanınan layihələr icra edən təşkilat olmaq.</p>
            </div>
          </div>
        </div>

        {/* Дополнительный блок: Наши принципы */}
        <div className="principles-section">
            <div className="principle-card">
                <FaHandsHelping className="p-icon" />
                <h3>Əməkdaşlıq</h3>
                <p>Dövlət qurumları və beynəlxalq təşkilatlarla sıx əməkdaşlıq edirik.</p>
            </div>
            <div className="principle-card">
                <FaLightbulb className="p-icon" />
                <h3>İnnovasiya</h3>
                <p>Müasir dövrün tələblərinə uyğun yeni təhsil metodlarını dəstəkləyirik.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;