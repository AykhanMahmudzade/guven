import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFileSignature, FaInfoCircle, FaRegHandshake, FaExclamationTriangle } from 'react-icons/fa';
import './Terms.css';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="t-container">
          <FaFileSignature className="terms-hero-icon" />
          <h1 className="terms-title">İstifadə Şərtləri</h1>
          <p className="terms-subtitle">Veb saytımızdan istifadə qaydaları və hüquqi öhdəliklər</p>
          <div className="terms-breadcrumb">
            <Link to="/">Ana səhifə</Link> / <span>İstifadə Şərtləri</span>
          </div>
        </div>
      </section>

      <section className="terms-body">
        <div className="t-container">
          <div className="terms-card">
            <div className="terms-intro">
              <FaInfoCircle className="intro-icon" />
              <p>
                Bu İstifadə Şərtləri <strong>GÜVƏN TƏHSİLİN İNKİŞAFINA DƏSTƏK FONDU</strong> saytından istifadə qaydalarını tənzimləyir. 
                Sayta daxil olmaqla siz bu şərtlərlə tam razılaşdığınızı təsdiq edirsiniz.
              </p>
            </div>

            <div className="terms-section">
              <h3>1. Ümumi müddəalar</h3>
              <p>
                Fondun veb saytı məlumatlandırma və təhsil layihələrinə müraciət məqsədi daşıyır. 
                Saytın məzmunu (mətnlər, loqo, dizayn elementləri) Fondun mülkiyyətidir və müəllif hüquqları ilə qorunur.
              </p>
            </div>

            <div className="terms-section">
              <h3>2. İstifadəçi öhdəlikləri</h3>
              <p>İstifadəçilər saytdan istifadə edərkən aşağıdakı qaydalara əməl etməlidir:</p>
              <ul>
                <li>Yalnız doğru və dəqiq məlumatlar təqdim etmək (müraciət formalarında).</li>
                <li>Saytın işinə mane olacaq hər hansı zərərli proqram təminatından istifadə etməmək.</li>
                <li>Fondun icazəsi olmadan saytdakı məlumatları kommersiya məqsədilə kopyalamamaq.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3><FaRegHandshake className="s-icon" /> 3. Təqaüd və Müraciətlər</h3>
              <p>
                Təqaüd proqramlarına müraciət edən tələbələr təqdim etdikləri sənədlərin həqiqiliyinə görə birbaşa məsuliyyət daşıyırlar. 
                Yalan məlumat aşkarlandığı təqdirdə Fond müraciəti ləğv etmək hüququnu özündə saxlayır.
              </p>
            </div>

            <div className="terms-section">
              <h3><FaExclamationTriangle className="s-icon" /> 4. Məsuliyyətin məhdudlaşdırılması</h3>
              <p>
                Fond saytdakı məlumatların hər zaman dəqiq olmasına çalışsa da, texniki fasilələr və ya məlumat yenilənməsi zamanı yarana biləcək 
                müvəqqəti yanlışlıqlara görə məsuliyyət daşımır. Saytdakı məlumatlar məsləhət xarakterlidir.
              </p>
            </div>

            <div className="terms-section">
              <h3>5. Üçüncü tərəf keçidləri</h3>
              <p>
                Saytımızda digər resurslara (məsələn: tərəfdaş şirkətlər) linklər ola bilər. 
                Həmin saytların məzmununa və məxfilik qaydalarına görə GÜVƏN Fondu məsuliyyət daşımır.
              </p>
            </div>

            <div className="terms-section">
              <h3>6. Dəyişikliklər</h3>
              <p>
                Fond bu istifadə şərtlərini istənilən vaxt əvvəlcədən xəbərdarlıq etmədən dəyişdirə bilər. 
                Yenilənmiş şərtlər saytda dərc edildiyi andan qüvvəyə minir.
              </p>
            </div>

            <div className="terms-footer">
              <p>Son yenilənmə: <strong>01 Aprel 2026</strong></p>
              <p>Sualınız olarsa: <strong>info@guven.az</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;