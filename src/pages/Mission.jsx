// pages/Mission.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBullseye, FaEye, FaStar, FaHeart, FaHandsHelping } from 'react-icons/fa';
import './Mission.css';

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ключевые ценности фонда
  const coreValues = [
    {
      icon: <FaStar />,
      title: 'Keyfiyyət',
      description: 'Təhsildə ən yüksək keyfiyyət standartlarına nail olmaq'
    },
    {
      icon: <FaHeart />,
      title: 'Milli-mənəvi dəyərlər',
      description: 'Azərbaycanın zəngin mədəni irsinə bağlılıq'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Əməkdaşlıq',
      description: 'Dövlət, biznes və cəmiyyət arasında sıx əlaqələr'
    },
    {
      icon: <FaBullseye />,
      title: 'İnnovasiya',
      description: 'Müasir təhsil texnologiyalarının tətbiqi'
    }
  ];

  // Основные направления деятельности
  const directions = [
    'Təqaüd proqramları',
    'Təlimlər və seminarlar',
    'Konfranslar',
    'Sosial layihələr',
    'Mentorluq proqramları',
    'Beynəlxalq əməkdaşlıq'
  ];

  return (
    <div className="mission-page">
      {/* Hero секция */}
      <section className="mission-hero">
        <div className="mission-hero-overlay"></div>
        <div className="mission-hero-content">
          <h1 className="mission-hero-title">Missiya və Vizyon</h1>
          <p className="mission-hero-subtitle">
            "Güvən Təhsilin İnkişafına Dəstək Fondu"nun dəyərləri və hədəfləri
          </p>
          <div className="mission-hero-breadcrumb">
            <Link to="/">Ana səhifə</Link> / <span>Missiya və Vizyon</span>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <div className="mission-main-content">
        <div className="mission-container">
          
          {/* Missiya bölməsi */}
          <section className="mission-section">
            <div className="section-header">
              <div className="section-icon">
                <FaBullseye />
              </div>
              <h2 className="section-title">Missiya</h2>
              <div className="title-underline"></div>
            </div>

            <div className="mission-content">
              <div className="mission-text-box mission-text-box-left">
                <p className="mission-paragraph">
                  <span className="dropcap">G</span>üvən Təhsilin İnkişafına Dəstək Fondu"nun missiyası Azərbaycanda təhsilin inkişafına dəstək vermək, gənclərin bilik və bacarıqlarının artırılmasına, onların intellektual və şəxsi potensialının üzə çıxarılmasına şərait yaratmaqdır. Fond təhsil sahəsində həyata keçirdiyi layihələr və təşəbbüslər vasitəsilə savadlı, yüksək düşüncə qabiliyyətinə malik, milli-mənəvi dəyərlərə bağlı, vətənpərvər və cəmiyyətin inkişafında fəal iştirak edən gənc nəslin formalaşmasına töhfə verməyi qarşısına məqsəd qoyur.
                </p>
              </div>

              <div className="mission-text-box mission-text-box-right">
                <p className="mission-paragraph">
                  Fond gənclərin müasir dövrün tələblərinə uyğun bilik və bacarıqlarla təmin olunmasını vacib hesab edir və bu istiqamətdə müxtəlif maarifləndirici proqramlar, təlimlər, seminarlar, konfranslar və sosial layihələr həyata keçirir. Bu fəaliyyətlər gənclərin təhsilə marağının artırılmasına, onların liderlik və yaradıcılıq qabiliyyətlərinin inkişafına, həmçinin əmək bazarında rəqabət qabiliyyətli mütəxəssislər kimi formalaşmasına xidmət edir.
                </p>
              </div>

              <div className="mission-highlight">
                <div className="highlight-content">
                  <p>
                    "Güvən" Fondu eyni zamanda dövlət qurumları, təhsil müəssisələri, qeyri-hökumət təşkilatları və digər tərəfdaşlarla əməkdaşlıq edərək təhsil sahəsində innovativ ideyaların və təşəbbüslərin həyata keçirilməsini dəstəkləyir. Fondun fəaliyyəti gənclərin sosial məsuliyyət hissinin gücləndirilməsinə, onların cəmiyyətə faydalı və aktiv vətəndaş kimi yetişməsinə yönəlib.
                  </p>
                </div>
              </div>

              <div className="mission-quote">
                <div className="quote-icon">"</div>
                <p className="quote-text">
                  Fond hesab edir ki, təhsil yalnız bilik əldə etmək vasitəsi deyil, həm də insanın dünyagörüşünü formalaşdıran, onun şəxsiyyət kimi inkişafına və gələcək həyatına istiqamət verən ən mühüm amillərdən biridir.
                </p>
              </div>
            </div>
          </section>

          {/* Vizyon bölməsi */}
          <section className="vision-section">
            <div className="section-header">
              <div className="section-icon">
                <FaEye />
              </div>
              <h2 className="section-title">Vizyon</h2>
              <div className="title-underline"></div>
            </div>

            <div className="vision-content">
              <div className="vision-card">
                <p className="vision-text">
                  "Güvən Təhsilin İnkişafına Dəstək Fondu"nun vizyonu Azərbaycanda təhsilin inkişafına töhfə verən, gənclərin intellektual və sosial inkişafını dəstəkləyən, cəmiyyətin tərəqqisinə xidmət edən nüfuzlu və etibarlı ictimai təşkilatlardan birinə çevrilməkdir.
                </p>
              </div>

              <div className="vision-grid">
                <div className="vision-grid-item">
                  <h3>Uzunmüddətli Hədəflər</h3>
                  <p>
                    Fond uzunmüddətli perspektivdə ölkədə təhsil mühitinin daha da inkişaf etdirilməsinə, gənclərin potensialının reallaşdırılmasına və onların qlobal bilik və bacarıqlara sahib, müasir dünyaya uyğun düşünən və fəaliyyət göstərən şəxslər kimi formalaşmasına dəstək verməyi hədəfləyir.
                  </p>
                </div>

                <div className="vision-grid-item">
                  <h3>İdeal Cəmiyyət Modeli</h3>
                  <p>
                    Fondun vizyonu həmçinin elə bir cəmiyyətin formalaşmasına töhfə verməkdir ki, burada təhsil ən yüksək dəyər kimi qəbul olunur, gənclərin inkişafı dövlət və cəmiyyət üçün əsas prioritetlərdən biri hesab edilir və hər bir gəncin öz potensialını reallaşdırmaq üçün bərabər imkanları mövcud olur.
                  </p>
                </div>
              </div>

              <div className="vision-future">
                <div className="future-content">
                  <h3>Gələcək Perspektivlər</h3>
                  <p>
                    "Güvən" Fondu gələcəkdə ölkədə və beynəlxalq səviyyədə tanınan, təhsil sahəsində nümunəvi layihələr həyata keçirən, gənclərin inkişafına real töhfə verən və innovativ təşəbbüsləri ilə seçilən bir təşkilat kimi fəaliyyət göstərməyi qarşısına məqsəd qoyur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dəyərlər bölməsi */}
          <section className="values-section">
            <h2 className="values-main-title">Əsas Dəyərlərimiz</h2>
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <div className="value-card" key={index}>
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fəaliyyət istiqamətləri */}
          <section className="directions-section">
            <div className="directions-container">
              <h2 className="directions-title">Fəaliyyət İstiqamətlərimiz</h2>
              <div className="directions-grid">
                {directions.map((direction, index) => (
                  <div className="direction-item" key={index}>
                    <div className="direction-number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="direction-text">{direction}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Bölməsi */}
          <section className="mission-cta">
            <div className="cta-content">
              <h2>Bizə Qoşulun!</h2>
              <p>Gəlin birlikdə Azərbaycan gəncliyinin gələcəyinə töhfə verək</p>
              <div className="cta-buttons">
                <Link to="/donate" className="cta-btn-primary">
                  Dəstək Ol <FaArrowRight />
                </Link>
                <Link to="/volunteer" className="cta-btn-secondary">
                  KÖNÜLLÜ OL
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Mission;