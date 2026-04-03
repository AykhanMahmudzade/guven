import React, { useEffect } from 'react';
import main2 from '../assets/main2.jpeg';
import './About.css';

const About = () => {
  // Автоматический скролл вверх при открытии страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero-секция */}
      <section className="about-hero">
        <h1 className="reveal-text">Haqqımızda</h1>
        <p className="reveal-sub">Təhsilin gələcəyini birlikdə quraq</p>
      </section>

      <div className="content-wrapper-custom">
        {/* Основной блок: Картинка слева, текст справа */}
        <section className="about-main-section">
          <div className="about-flex-container">
            <div className="about-image-side animate-left">
              <img src={main2} alt="Güvən Fond" />
            </div>
            <div className="about-text-side animate-right">
              <h2>GÜVƏN TƏHSİLİN İNKİŞAFINA DƏSTƏK FONDU</h2>
              <p>
                Güvən Təhsilin İnkişafına Dəstək Fondu 2023-cü ildə təsis edilmiş, 
                13 dekabr 2023-cü il tarixində Azərbaycan Respublikası Ədliyyə Nazirliyində 
                dövlət qeydiyyatına alınmışdır (qeydiyyat nömrəsi: 1123-Q83-4253).
              </p>
              <p>
                Fondun məqsədi ölkəmizin müxtəlif bölgələrindən olan istedadlı, bacarıqlı, 
                yüksək balla ali məktəblərə qəbul olmuş tələbələrin müəyyənləşdirilməsi, 
                onların təhsil imkanlarının genişləndirilməsi, şəxsi inkişafına və milli-mənəvi 
                dəyərlərə sadiq, cəmiyyətə faydalı mütəxəssis kimi yetişdirilməsinə dəstək göstərilməsidir.
              </p>
              <p>
                Fondun fəaliyyət istiqamətlərinə yalnız maddi dəstəyin göstərilməsi deyil, 
                həm də gənclərin fərdi inkişaf proqramlarında iştirakına, elmi araşdırmalarının 
                stimullaşdırılmasına, beynəlxalq və yerli layihələrdə iştirak imkanlarının 
                artırılmasına, innovativ təşəbbüslərinin dəstəklənməsinə və gələcək karyera 
                planlamasına yardım edilməsi daxildir.
              </p>
              <p>
                Güvən Təhsilin İnkişafına Dəstək Fondu dövlətin həyata keçirdiyi sosial siyasətə 
                dəstək göstərməklə yanaşı, özəl sektorun sosial məsuliyyət təşəbbüslərinin 
                inkişaf etdirilməsinə töhfə verməyi də qarşısına məqsəd qoyur.
              </p>
            </div>
          </div>
        </section>

        {/* Блок Миссия и Видение
        <section className="mission-vision-grid">
          <div className="mv-card animate-up">
            <h3>Missiyamız</h3>
            <p>Hər bir gənc üçün əlçatan və keyfiyyətli təhsil mühitini təmin etmək.</p>
          </div>
          <div className="mv-card animate-up" style={{ animationDelay: '0.2s' }}>
            <h3>Vizyonumuz</h3>
            <p>Azərbaycanın təhsil sahəsində ən etibarlı və aparıcı fondlarından biri olmaq.</p>
          </div>
        </section> */}

        {/* Секция: Направления деятельности */}
        <section className="faliyet-section animate-up">
          <h2 className="section-title">Fondun Fəaliyyət İstiqamətləri</h2>
          <div className="faliyet-content">
            <p>Güvən Təhsilin İnkişafına Dəstək Fondu, ilk növbədə, seçilən namizədlərin təqaüd proqramına cəlb olunmaqlarına köməklik göstərir, təhsil müddəti ərzində tələbələri yataqxana ilə və ya təhsil aldıqları ərazidə müvafiq qaydada müvəqqəti yaşayış yeri ilə təmin edir.</p>
            <p>Daha bir fəaliyyətimiz tələbələrin müxtəlif təhsil pilləsinə qəbul olmaq üçün müəyyən fənlərdən hazırlaşmasında köməklik göstərmək, bunun üçün müvafiq kurslar təşkil etməkdən ibarətdir.</p>
            <p>Fondun himayəsində olan gənclərimizin asudə vaxtlarının səmərəli təşkil olunmasını təmin etmək, bunun üçün müxtəlif bölgələrə səfərlər, səmərəli tədbirlər təşkil etmək də əsas missiyalarımızdandır.</p>
            <p>Fəaliyyətimizin preoritet istiqamətlərindən biri də tələbələrə sosial-psixoloji dəstək olmaq, bunun üçün psixoloqlarla fərdi və qrup şəklində seanslar və təlimlər təşkil etməkdir.</p>
            <p>Gənc alim və tədqiqatçıların elmi araşdırmalarına dəstək olması, elmi fəaliyyətlərinin stimullaşdırılması və onlara elmi tədqiqatlar aparmaq üçün əlverişli imkanların yaradılması Fondun gələcək fəaliyyətində nəzərdə tutulub.</p>
            <p>Tələbələrin əldə etdikləri nəzəri biliklərin praktiki tətbiqini təşkil etmək üçün onları könüllülük fəaliyyətinə istiqamətləndirmək və təcrübə keçməklərinə şərait yaratmaq da fondun bir istiqamətidir.</p>
            <p>Sağlamlıq imkanları məhdud olan və ya səhhətində problem olan tələbələrin müvafiq tibbi dəstəklə təmin olunması da hədəflərimiz arasındadır.</p>
            
            <div className="about-final-note">
              <p><strong>Yekun olaraq:</strong> Güvən Fondunun əsas missiyası Azərbaycanın işgüzar və siyasi həyatına tövhələr verə biləcək savadlı, bilikli, güclü vətənpərvərlik hissinə malik, dövlətinə bağlı gənc nəslin formalaşmasıdır.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;