import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaClipboardList, FaUserCheck, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import './Scholarships.css';

const Scholarships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="scholar-page">
      {/* Hero Section */}
      <section className="scholar-hero">
        <div className="s-container">
          <h1 className="scholar-title">Təqaüd Proqramı</h1>
          <p className="scholar-subtitle">Gələcəyin qurucuları üçün təhsilə dəstək platforması</p>
        </div>
      </section>

      <section className="scholar-content-section">
        <div className="s-container">
          
          {/* 1. Ümumi Şərtlər */}
          <div className="scholar-card main-criteria">
            <div className="card-header">
              <FaUserCheck className="header-icon" />
              <h2>Təqaüd proqramının şərtləri</h2>
            </div>
            <ul>
              <li>Azərbaycan Respublikasının vətəndaşı olmaq;</li>
              <li>Cari il ərzində ali məktəbin bakalavr səviyyəsinə qəbul olunmaq;</li>
              <li>Motivasiyalı və məqsədyönlü olmaq.</li>
            </ul>
          </div>

          <div className="scholar-grid">
            {/* 2. Akademik Meyarlar */}
            <div className="scholar-card">
              <div className="card-header">
                <FaGraduationCap className="header-icon" />
                <h3>Akademik meyarlar</h3>
              </div>
              <div className="score-box">
                <p><strong>I və IV qrup:</strong> ən azı 500 bal</p>
                <p><strong>II və III qrup:</strong> ən azı 550 bal</p>
              </div>
            </div>

            {/* 3. Sosial Meyarlar */}
            <div className="scholar-card">
              <div className="card-header">
                <FaFileAlt className="header-icon" />
                <h3>Sosial meyarlar</h3>
              </div>
              <p>Ailənin aztəminatlı olduğunu təsdiq edən rəsmi sənədlərin təqdim olunması zəruridir.</p>
            </div>
          </div>

          {/* 4. Şəxsi Keyfiyyətlər */}
          <div className="scholar-card wide-card">
            <div className="card-header">
              <FaClipboardList className="header-icon" />
              <h3>Şəxsi keyfiyyətlər və mərhələlər</h3>
            </div>
            <div className="qualities-grid">
              <div className="q-item">Məktəbdən müsbət xasiyyətnamə</div>
              <div className="q-item">İctimai fəaliyyət və liderlik (sertifikatlar)</div>
              <div className="q-item">Motivasiya məktubu (300–500 söz)</div>
              <div className="q-item">Müsahibə mərhələsində uğurlu çıxış</div>
            </div>
          </div>

          {/* 5. Təqaüdün davamı və Sənədlər */}
          <div className="scholar-two-col">
            <div className="scholar-list-box">
              <h4>Təqaüdün davam etmə şərtləri</h4>
              <ul>
                <li>Semestr üzrə akademik göstərici: <strong>GPA {'>'} 80</strong></li>
                <li>Fondun təlim və layihələrində aktiv iştirak</li>
                <li>İntizam və ya qanun pozuntusuna yol verməmək</li>
              </ul>
            </div>
            <div className="scholar-list-box alt-bg">
              <h4>Təqdim olunacaq sənədlər</h4>
              <ul className="docs-list">
                <li>Şəxsiyyət vəsiqəsinin surəti</li>
                <li>Qəbul imtahanı nəticəsi / Transkript</li>
                <li>Maddi vəziyyəti göstərən arayışlar</li>
                <li>Motivasiya və Tövsiyə məktubları</li>
                <li>Könüllülük sertifikatları</li>
              </ul>
            </div>
          </div>

          {/* 6. Müraciət Vaxtı */}
          <div className="apply-banner">
            <div className="banner-info">
              <FaCalendarAlt className="banner-icon" />
              <div>
                <h4>Müraciət vaxtı</h4>
                <p><strong>1 Avqust — 30 Sentyabr</strong></p>
              </div>
            </div>
            <div className="banner-action">
              <p>Müraciət online formatda Fondun rəsmi saytı vasitəsilə həyata keçirilir.</p>
              <button className="apply-btn" disabled>Tezliklə</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Scholarships;