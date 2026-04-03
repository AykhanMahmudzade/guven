import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Structure.css';

const Structure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="structure-page">
      {/* Hero Seksiyası */}
      <section className="structure-hero">
        <div className="structure-hero-content">
          <h1 className="structure-hero-title">Təşkilati Struktur</h1>
          <p className="structure-hero-subtitle">
            "Güvən" Təhsil Fondunun idarəetmə və şöbələr iyerarxiyası
          </p>
        </div>
      </section>

      {/* Struktur Diaqram Seksiyası */}
      <section className="structure-chart-section">
        <div className="s-container">
          <div className="org-chart-wrapper">
            
            {/* Səviyyə 1: Təsisçi */}
            <div className="chart-level level-1">
              <div className="chart-node main-node">
                <h2>Təsisçi</h2>
              </div>
            </div>

            {/* Səviyyə 2: Müşahidə şurası */}
            <div className="chart-level level-2">
              <div className="chart-node standard-node">
                <h3>Müşahidə şurası</h3>
              </div>
            </div>

            {/* Səviyyə 3: Direktor */}
            <div className="chart-level level-3">
              <div className="chart-node standard-node">
                <h3>Direktor</h3>
              </div>
            </div>

            {/* Səviyyə 4: Şöbələr (Üçlü sütun) */}
            <div className="chart-level level-4 department-row">
              
              {/* Şöbə 1 */}
              <div className="department-col">
                <div className="chart-node dept-node">
                  <h4>Layihələrin idarəolunması şöbəsi</h4>
                </div>
                <div className="staff-list">
                  <div className="staff-node">Müdir</div>
                  <div className="staff-node">Layihə meneceri</div>
                  <div className="staff-node">Layihə koordinatorları</div>
                  <div className="staff-node">İctimaiyyətlə əlaqələr üzrə mütəxəssis</div>
                </div>
              </div>

              {/* Şöbə 2 */}
              <div className="department-col">
                <div className="chart-node dept-node">
                  <h4>Maliyyə və iqtisadiyyat şöbəsi</h4>
                </div>
                <div className="staff-list">
                  <div className="staff-node">Müdir</div>
                  <div className="staff-node">Mühasib</div>
                  <div className="staff-node">Büdcə və planlaşdırma üzrə mütəxəssis</div>
                  <div className="staff-node">Satınalma və təchizat üzrə mütəxəssis</div>
                </div>
              </div>

              {/* Şöbə 3 */}
              <div className="department-col">
                <div className="chart-node dept-node">
                  <h4>Hüquq və insan resursları şöbəsi</h4>
                </div>
                <div className="staff-list">
                  <div className="staff-node">Müdir</div>
                  <div className="staff-node">Hüquqi sənədləşmə üzrə mütəxəssis</div>
                  <div className="staff-node">Əmək münasibətləri üzrə mütəxəssis</div>
                  <div className="staff-node">HR menecer</div>
                </div>
              </div>

            </div> {/* end level-4 */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Structure;