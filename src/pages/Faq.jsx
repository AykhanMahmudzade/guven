import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaQuestionCircle, FaGraduationCap, FaHandsHelping, FaInfoCircle } from 'react-icons/fa';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      category: "Təqaüd proqramları",
      icon: <FaGraduationCap />,
      questions: [
        {
          q: "Təqaüd proqramına kimlər müraciət edə bilər?",
          a: "Fondun təqaüd proqramlarına Azərbaycanın müxtəlif ali təhsil müəssisələrində təhsil alan, akademik göstəriciləri yüksək olan və sosial dəstəyə ehtiyacı olan tələbələr müraciət edə bilər."
        },
        {
          q: "Müraciət üçün hansı sənədlər tələb olunur?",
          a: "Əsasən şəxsiyyət vəsiqəsi, tələbə bileti, transkript (akademik göstəricilər) və ailə tərkibi haqqında arayış tələb olunur. Hər proqramın xüsusi şərtləri elan bölməsində qeyd edilir."
        }
      ]
    },
    {
      category: "Könüllülük",
      icon: <FaHandsHelping />,
      questions: [
        {
          q: "Könüllü olmaq üçün yaş məhdudiyyəti varmı?",
          a: "Xeyr, təhsilin inkişafına töhfə vermək istəyən hər bir şəxs könüllü ola bilər. Lakin əsas hədəf kütləmiz 16-25 yaş arası gənclərdir."
        },
        {
          q: "Könüllülük fəaliyyətinin sonunda sertifikat verilirmi?",
          a: "Bəli, proqramı uğurla başa vuran hər bir könüllü rəsmi sertifikat və Fond tərəfindən tövsiyə məktubu ilə təmin olunur."
        }
      ]
    },
    {
      category: "Ümumi suallar",
      icon: <FaInfoCircle />,
      questions: [
        {
          q: "Fondun ofisi harada yerləşir?",
          a: "Ofisimiz Bakı şəhəri, Nərimanov rayon, Dərnəgül şossesi, 2082-ci məhəllə ünvanında yerləşir. İş saatlarımız həftə içi 09:00 - 18:00 arasıdır."
        },
        {
          q: "Layihələrinizdə necə tərəfdaş ola bilərik?",
          a: "Tərəfdaşlıq təklifləriniz üçün info@guven.az ünvanına rəsmi məktub yaza və ya əlaqə nömrələrimizlə əlaqə saxlaya bilərsiniz."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="faq-container">
          <FaQuestionCircle className="faq-main-icon" />
          <h1>Tez-tez verilən suallar</h1>
          <p>Suallarınıza burada cavab tapa bilərsiniz</p>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="faq-category-group">
              <h2 className="faq-cat-title">{category.icon} {category.category}</h2>
              {category.questions.map((item, qIndex) => {
                const globalIndex = `${catIndex}-${qIndex}`;
                return (
                  <div 
                    key={globalIndex} 
                    className={`faq-item ${activeIndex === globalIndex ? 'active' : ''}`}
                    onClick={() => toggleFAQ(globalIndex)}
                  >
                    <div className="faq-question">
                      <span>{item.q}</span>
                      <FaChevronDown className="faq-arrow" />
                    </div>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;