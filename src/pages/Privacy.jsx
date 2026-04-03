import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaUserShield, FaCookieBite, FaEnvelopeOpenText } from 'react-icons/fa';
import './Privacy.css';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="p-container">
          <FaShieldAlt className="privacy-hero-icon" />
          <h1 className="privacy-title">Məxfilik Siyasəti</h1>
          <p className="privacy-subtitle">Məlumatlarınızın təhlükəsizliyi bizim prioritetimizdir</p>
        </div>
      </section>

      <section className="privacy-body">
        <div className="p-container">
          <div className="privacy-card">
            <p className="privacy-intro">
              <strong>GÜVƏN TƏHSİLİN İNKİŞAFINA DƏSTƏK FONDU</strong> ("Fond", "biz", "bizim") olaraq şəxsi məlumatlarınızın təhlükəsizliyinə böyük əhəmiyyət veririk. 
              Bu sənəd bizim məxfilik təcrübələrimizi və sizin məlumatlarınızla bağlı hüquqlarınızı izah edir. 
              Xahiş edirik, veb saytımızdan istifadə etməzdən əvvəl bu siyasəti diqqətlə oxuyun.
            </p>

            <div className="privacy-section">
              <h3><FaUserShield className="s-icon" /> 1. Topladığımız Məlumatlar</h3>
              <ul>
                <li><strong>Şəxsi Məlumatlar:</strong> Ad, soyad, doğum tarixi, e-poçt, telefon nömrəsi.</li>
                <li><strong>Təhsil Məlumatları:</strong> Müəssisə, ixtisas, dərəcə və akademik nailiyyətlər.</li>
                <li><strong>Maliyyə Məlumatları:</strong> İanə və təqaüd proqramları üçün ödəniş məlumatları.</li>
                <li><strong>Avtomatik Məlumatlar:</strong> İP ünvanı, brauzer növü, saytda keçirilən vaxt və analitika.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3><FaLock className="s-icon" /> 2. Məlumatların İstifadəsi</h3>
              <p>Topladığımız məlumatları aşağıdakı məqsədlər üçün istifadə edirik:</p>
              <ul>
                <li>Təqaüd proqramları və layihələrin idarə edilməsi.</li>
                <li>Sizinlə əlaqə saxlamaq və sorğularınıza cavab vermək.</li>
                <li>Xidmətlərimizi və veb saytımızı təkmilləşdirmək.</li>
                <li>Yeni təlim və təhsil imkanları haqqında məlumat vermək.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3>3. Məlumatların Paylaşılması</h3>
              <p>Məlumatlarınız üçüncü tərəflərlə paylaşılmayacaqdır, istisna hallar:</p>
              <ul>
                <li>Qanuni tələblər əsasında (məhkəmə qərarı və s.).</li>
                <li>Fondun fəaliyyətində iştirak edən etibarlı tərəfdaşlar ilə.</li>
                <li>Sizin razılığınız olduğu halda.</li>
              </ul>
              <p className="highlight-text">Biz şəxsi məlumatlarınızı heç vaxt kommersiya məqsədləri üçün satmırıq.</p>
            </div>

            <div className="privacy-section">
              <h3>4. Məlumatların Qorunması</h3>
              <p>Təhlükəsizliyi təmin etmək üçün məlumatların şifrələnməsi, təhlükəsiz serverlər və giriş məhdudiyyətləri kimi texniki tədbirlər həyata keçiririk.</p>
            </div>

            <div className="privacy-section">
              <h3><FaCookieBite className="s-icon" /> 5. Kukilər (Cookies)</h3>
              <p>Veb saytımız kukilərdən istifadə edir. Onlar saytın işləməsinə kömək edir və sizə daha yaxşı istifadəçi təcrübəsi təmin edir.</p>
            </div>

            <div className="privacy-section">
              <h3>6. Sizin Hüquqlarınız</h3>
              <p>Siz məlumatlarınıza giriş, onların düzəldilməsi, silinməsi və ya işlənməsinə etiraz etmək hüququna sahibsiniz.</p>
              <div className="contact-box">
                <FaEnvelopeOpenText /> 
                <span>Hüquqlarınızdan istifadə üçün: <strong>info@guven.az</strong></span>
              </div>
            </div>

            <div className="privacy-footer-info">
              <p><strong>Ən son dəyişiklik tarixi:</strong> 1 İyun 2023</p>
              <hr />
              <h4>Əlaqə Məlumatları</h4>
              <p>E-poçt: info@guven.az | Telefon: +994 99 711 91 97</p>
              <p>Ünvan: Bakı şəhəri, Nərimanov rayon, Dərnəgül şossesi, 2082-ci məhəllə</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;