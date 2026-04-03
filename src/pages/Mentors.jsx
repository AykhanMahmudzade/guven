import React, { useEffect } from 'react';
import './Mentors.css';
import fatima from '../assets/fatima.jpeg';
import vusal from '../assets/vusal.jpeg';
import saiq from '../assets/saiq.jpeg';

const mentors = [
  {
    name: 'Fatimə Ağayar qızı Quliyeva',
    title: 'Riyaziyyat üzrə fəlsəfə doktoru, dosent',
    photo: fatima,
    bio: 'Ali və orta ixtisas təhsili sahəsi üzrə peşəkar mütəxəssis, təhsil ekspertidir. Ali təhsil müəssisələrində riyaziyyat fənlərinin tədrisi və müxtəlif istiqamətlər üzrə yüksək keyfiyyətli təlimlərin təşkili və effektiv idarə edilməsi sahəsində zəngin təcrübəyə malikdir. Təhsil sahəsindəki müasir yanaşmaları və peşəkarlığı ilə Fatimə Quliyeva təhsil müəssisələrində təlim-tədris prosesinin təşkili və idarə edilməsi istiqamətində mühüm töhfələr verməkdə davam edir. O, həmçinin səriştə əsaslı kurikulumların hazırlanmasında da fəal iştirak edir. Onun elmi maraq dairəsinə qeyri-səlis sistemlərin müxtəlif tətbiqləri, xüsusilə idarəetmə və süni intellekt sahəsində araşdırmalar daxildir.',
  },
  {
    name: 'Vüsal Şərifov',
    title: 'Biznes və Marketinq Mütəxəssisi',
    photo: vusal,
    photoPosition: 'center 15%',
    bio: 'FMCG sektorunda, retail, istehsalat, marketinq strategiyaları, bazar araşdırmaları, təchizat və satış zəncirinin effektiv idarə olunması, satış kanallarının qurulması və optimallaşdırılması, müştəri məmnuniyyətinin təmin edilməsi sahələrində geniş təcrübəyə malik peşəkar mütəxəssisdir. O, strateji düşüncə qabiliyyəti və dərin bazar analizlərinə əsaslanan qərarvermə bacarığı ilə seçilir. Vüsal Şərifov ölkənin aparıcı şirkətlərində müxtəlif strateji və rəhbər vəzifələrdə uğurla fəaliyyət göstərərək biznesin davamlı inkişafı və rəqabət qabiliyyətinin artırılması üçün önəmli layihələr həyata keçirir.',
  },
  {
    name: 'Şaiq Səyyad oğlu Mirzəyev',
    title: 'Hüquq elmləri üzrə fəlsəfə doktoru, vəkil',
    photo: saiq,
    bio: 'Azərbaycan Respublikasının Vəkillər Kollegiyasının üzvü və hüquq sahəsində tanınmış peşəkar mütəxəssisdir. O, "Mirzayev and Partners Legal Firm" hüquq şirkətinin təsisçisi və direktoru kimi fəaliyyət göstərir, eyni zamanda "e-huquq" ictimai-siyasi informasiya portalının təsisçisi və rəhbəridir. Hüququn müxtəlif sahələrində – mülki, kommersiya, əmlak və insan hüquqları üzrə geniş təcrübəyə malikdir və ölkədə hüquqi mədəniyyətin formalaşmasına töhfə verən fəal hüquqşünaslardan biridir.',
  },
  {
    name: 'Rəşid Məhəmmədəli oğlu Hüseynov',
    title: 'Hüquqşünas, Sosial Layihə Rəhbəri',
    photo: null,
    bio: 'İlk ali təhsilini tarix ixtisası üzrə alsa da, sonradan təhsilini davam etdirərək hüquqşünas ixtisasına yiyələnmişdir. Qanunvericilik və hüquq sahəsində, xüsusilə məhkəmə hökmü ilə azadlıqdan məhrum edilmiş şəxslərin cəzalarının qanunvericiliyə uyğun icrası və hüquqlarının qorunması sahəsində peşəkar mütəxəssisdir. Cəza müddəti başa çatmaqda olan məhbusların müxtəlif ixtisaslar üzrə peşə bacarıqları ilə təmin olunması və cəmiyyətə inteqrasiyası istiqamətində bir sıra sosial layihələrə rəhbərlik etmişdir.',
  },
];

const Mentors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mentors-page">
      <section className="mentors-hero">
        <div className="mentors-container">
          <h1>Mentorlarımız</h1>
          <p>Fondumuzun inkişafına töhfə verən peşəkar mütəxəssislər</p>
        </div>
      </section>

      <section className="mentors-body">
        <div className="mentors-container">
          <div className="mentors-grid">
            {mentors.map((mentor, i) => (
              <div className="mentor-card" key={i}>
                <div className="mentor-photo-wrap">
                  {mentor.photo ? (
                    <img
                      src={mentor.photo}
                      alt={mentor.name}
                      className="mentor-photo"
                      style={mentor.photoPosition ? { objectPosition: mentor.photoPosition } : {}}
                    />
                  ) : (
                    <div className="mentor-photo-placeholder">
                      <span>{mentor.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="mentor-info">
                  <h2 className="mentor-name">{mentor.name}</h2>
                  <span className="mentor-title">{mentor.title}</span>
                  <p className="mentor-bio">{mentor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;
