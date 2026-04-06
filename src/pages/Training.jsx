import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Training.css';

// Şəkillərin importu
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.jpg';
import t6 from '../assets/t6.jpeg';

const trainings = [
  {
    id: 3,
    date: "04.04.2026",
    title: "Sığorta nədir və necə işləyir?",
    image: t6,
    description: `4 aprel 2026-cı il tarixində Atelier 61 məkanında “Güvən Təhsilin İnkişafına Dəstək Fondu” və “Qala” sığorta şirkətinin təşkilatçılığı ilə “Sığorta nədir və necə işləyir?” mövzusunda maarifləndirici təlim keçirilib. Təlimin məqsədi maliyyə savadlılığını artırmaq və sığorta biliklərini genişləndirmək olub.

Açılışda layihə koordinatoru Fatimə Quliyeva çıxış edib. Daha sonra Fondun direktoru D.Ş. Şıkarov fondun fəaliyyəti barədə məlumat verib, həmtəsisçi və himayəçi Rəşid Hüseynov isə belə təşəbbüslərin əhəmiyyətini vurğulayıb. Fondun təqdimatı və yeni rəsmi saytının tanıtımı da baş tutub.

Əsas sessiya anderrayter İlahə Ümidli tərəfindən keçirilib və burada risk, sığorta anlayışları, sığorta növləri və praktiki nümunələr izah olunub. Təlim interaktiv şəkildə davam edib.`,
    partner: "Tərəfdaş: Qala Sığorta",
    extra: "Daha sonra “Qala Sığorta” şirkətinin satış departamentinin rəhbəri İlkin Nəcəfov çıxış edərək şirkətin imkanları barədə məlumat verib. Tədbir promo məhsulların təqdimatı, xatirə fotosu və bağlanışla yekunlaşıb."
  },
  {
    id: 1,
    date: "28.06.2025",
    title: "Bir Addım Öndə: Qlobal düşüncə üçün xaricdə təhsil",
    image: t2,
    description: `“Güvən” Təhsilin İnkişafına Dəstək Fondunun növbəti tədbiri təşkil olunmuşdur. Fondun himayəsində olan tələbələrin istək və təkliflərini nəzərə alaraq təlim çox vacib və ilhamverici bir mövzuya həsr olunmuşdur. Xaricdə təhsil almaq sadəcə başqa ölkədə təhsil proqramına qoşulmaq deyil – bu, yeni həyat tərzi tanımaq, öz sərhədlərini aşmaq və özünü beynəlxalq bir məkanda yenidən kəşf etmək deməkdir.`,
    partner: "Tərəfdaş: Azstudy",
    extra: "Dünyanın bir çox ölkələrində təhsil imkanları təqdim edən Azstudy tələbələrin istəyinə və göstəricilərinə uyğun universitetlərin seçilməsində köməklik göstərir."
  },
  {
    id: 2,
    date: "29.05.2025",
    title: "Özünüinkişaf formulu: Bilik və bacarıqla uğura doğru",
    image: t1,
    description: `“Güvən” təhsilin inkişafına dəstək fondunun və “Antec Academy” təlim tədris mərkəzinin təşkilatçılığı ilə keçirilən bu təlim gənclərin şəxsi və peşəkar inkişafını dəstəkləmək məqsədi daşıyır.`,
    partner: "Tərəfdaş: Antec Academy",
    extra: "İştirakçılarda savadlı düşüncə, strateji yanaşma və davamlı inkişaf vərdişləri yaratmağa istiqamətlənmiş təlim boyunca aktual mövzular müzakirə olunub, maraqlı yarışmalar keçirilib."
  }
];

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="training-page">
      <section className="training-hero">
        <div className="t-container">
          <h1 className="training-main-title">Təlim və Seminarlar</h1>
          <p className="training-subtitle">Gənclərimizin fərdi və peşəkar inkişafı üçün təşkil olunan bilik platforması</p>
        </div>
      </section>

      <section className="trainings-list-section">
        <div className="t-container">
          {trainings.map((item) => (
            <div key={item.id} className="training-card">
              <div className="training-card-image">
                <img src={item.image} alt={item.title} />
                <div className="training-date-badge">{item.date}</div>
              </div>
              <div className="training-card-content">
                <span className="partner-tag">{item.partner}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="extra-info">
                  <p>{item.extra}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Training;