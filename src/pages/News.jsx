import React from 'react';
import './News.css';

const News = () => {
  const newsData = [
    {
      id: 1,
      date: "20 Fevral, 2024",
      title: "Tələbələr üçün yeni təqaüd proqramı elan edildi",
      desc: "Fondumuz yüksək göstəriciləri olan tələbələrə dəstək məqsədilə aylıq təqaüd ayırır.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80"
    },
    {
      id: 2,
      date: "15 Fevral, 2024",
      title: "Regionlarda təhsil seminarları keçirildi",
      desc: "Gəncə və Şəki şəhərlərində gənclərin inkişafı üçün növbəti təlimlərimiz baş tutdu.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&q=80"
    },
    {
      id: 3,
      date: "10 Fevral, 2024",
      title: "Könüllülük proqramına qeydiyyat başladı",
      desc: "Siz də GÜVƏN ailəsinin bir parçası olmaq istəyirsinizsə, bizə qoşulun!",
      image: "https://images.unsplash.com/photo-1559027615-cd99713b8a7f?w=500&q=80"
    }
  ];

  return (
    <div className="news-container">
      <h1 className="news-page-title">Xəbərlər</h1>
      <div className="news-grid">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-card-body">
              <span className="news-date">{item.date}</span>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-desc">{item.desc}</p>
              <button className="news-more-btn">Daha ətraflı</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;