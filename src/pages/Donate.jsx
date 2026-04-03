import React from 'react';
import { FaUniversity, FaCopy, FaInfoCircle } from 'react-icons/fa';
import './Donate.css';

const Donate = () => {
  // Функция для быстрого копирования текста
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Kopyalandı: " + text);
  };

  const bankDetails = [
    { label: "Valyuta", value: "AZN" },
    { label: "Benefisiarın bankı", value: "Kapital Bank ASC, C.Cabbarlı filialı" },
    { label: "Filialın kodu", value: "200048" },
    { label: "VÖEN", value: "9900003611" },
    { label: "SWIFT kod", value: "AIIBAZ2XXXX" },
    { label: "Müxbir hesab", value: "AZ37NABZ01350100000000001944" },
    { label: "Benefisiarın adı", value: "GÜVƏN TƏHSİLİN İNKİŞAFINA DƏSTƏK FONDU" },
    { label: "Benefisiarın hesabı", value: "AZ71AIIB400900H9441890984104" },
    { label: "Benefisiarın VÖEN-i", value: "1906027401" },
    { label: "Ünvan", value: "AZ 1009, Bakı şəhəri, C.Cabbarlı küç. 5A" },
  ];

  return (
    <div className="donate-page">
      <section className="donate-hero">
        <h1>İanə Et</h1>
        <p>Təhsilin gələcəyinə yatırılan hər bir ianə dəyərlidir.</p>
      </section>

      <div className="bank-details-container">
        <div className="bank-card">
          <div className="bank-card-header">
            <FaUniversity className="bank-icon" />
            <h2>Bank Hesab Məlumatları</h2>
          </div>
          
          <div className="details-grid">
            {bankDetails.map((item, index) => (
              <div key={index} className="detail-item">
                <span className="detail-label">{item.label}</span>
                <div className="detail-value-wrapper">
                  <span className="detail-value">{item.value}</span>
                  <button 
                    className="copy-btn" 
                    onClick={() => copyToClipboard(item.value)}
                    title="Kopyala"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <FaInfoCircle />
          <p>Bank köçürməsi zamanı təyinat bölməsində <strong>"İanə"</strong> qeyd etməyi unutmayın.</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;