import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAward } from 'react-icons/fa';
import './Management.css';

import dasginImg from '../assets/dasgin.jpeg';

const Management = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leader = {
    id: 1,
    name: 'Daşqın Məzi oğlu Şikarov',
    position: 'Direktor',
    foundation: '“Güvən” Təhsilin İnkişafına Dəstək Fondu',
    icon: <FaAward />,
    image: dasginImg,
    fullBio: `Daşqın Məzi oğlu Şikarov - “Güvən” Təhsilin İnkişafına Dəstək Fondunun həmtəsisçisi və direktorudur. Azərbaycan Respublikasının xarici siyasətində əhəmiyyətli rolu olan tanınmış diplomat və dövlət xadimidir.`
  };

  return (
    <div className="management-page">
      <section className="management-hero">
        <div className="management-hero-content">
          <h1 className="management-hero-title">Rəhbərlik</h1>
          <p className="management-hero-subtitle">Fondun strateji hədəflərini reallaşdıran peşəkar komandamız</p>
          
        </div>
      </section>

      <section className="management-team-section">
        <div className="m-container">
          {/* Основная карточка с фото и краткой инфой */}
          <div className="management-single">
            <div className="m-card-single">
              <div className="m-card-image-box">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="m-photo" 
                />
                <div className="m-icon-badge">{leader.icon}</div>
              </div>
              
              <div className="m-card-body">
                <h3 className="m-name">{leader.name}</h3>
                <span className="m-position">{leader.position}</span>
                <div className="m-foundation">{leader.foundation}</div>
                <div className="m-divider"></div>
                <p className="m-bio-full">{leader.fullBio}</p>
              </div>
            </div>
          </div>

          {/* Блок с полной биографией */}
          <div className="management-details">
            <div className="details-bio-full">
              <h2 className="details-title">Biografiya</h2>
              <div className="details-text">
                <p>Daşqın Şikarov diplomatik karyerası ərzində Azərbaycanın <strong>Pakistan, Əfqanıstan və Birləşmiş Ərəb Əmirliklərində</strong> fövqəladə və səlahiyyətli səfiri vəzifəsində fəaliyyət göstərmiş, bu ölkələrlə ikitərəfli münasibətlərin inkişafında, eləcə də iqtisadi, turizm və humanitar sahələrdə əməkdaşlığın güclənməsində əhəmiyyətli töhfələr vermişdir.</p>
                
                <p>Diplomatik fəaliyyəti dövründə xüsusilə <strong>Dağlıq Qarabağ münaqişəsi</strong> ilə bağlı Azərbaycanın haqlı mövqeyinin beynəlxalq ictimaiyyətə çatdırılması və ölkəmizin imicinin möhkəmləndirilməsi, eləcə də <strong>Xocalı soyqırımının Pakistan senatı tərəfindən tanınması</strong> istiqamətində əhəmiyyətli işlər görmüşdür.</p>
                
                <p>Daşqın Şikarov <strong>2023-cü ildə</strong> respublikamızın savadlı, intellektual potensiala malik, milli-mənəvi dəyərlər əsasında tərbiyə olunmuş gənclərin formalaşmasına tövhə vermək məqsədilə <strong>“Güvən” Təhsilin İnkişafına Dəstək Fondunu</strong> təsis etmişdir və hal hazırda fonda rəhbərlik edir.</p>
                
                <p>Fond maddi ehtiyacı olan, yüksək akademik göstəricilərlə fərqlənən gənclərin təqaüd proqramları ilə dəstəkləmək, regionlarda yaşayan tələbələr üçün təhsil bərabərliyini təmin etmək məqsədi ilə yaradılmışdır. Gənclərin şəxsi inkişafı, liderlik bacarıqları və peşəkar hazırlığı istiqamətində müxtəlif proqram və layihələr həyata keçirilməsinə yönəldilmişdir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;