import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import './Events.css';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.jpg';
import t6 from '../assets/t6.jpeg';

const getShortText = (text, maxLength = 82) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};

const Events = () => {
  const eventsData = [
    {
      id: 1,
      date: "15 Mart, 2024",
      title: "Gənc Liderlər Forumu",
      location: "Bakı, ADA Universiteti",
      type: "Gələcək Tədbir",
      image: t1,
      desc: "Tələbələr üçün liderlik və komanda işi bacarıqlarına fokuslanan forum proqramı."
    },
    {
      id: 2,
      date: "10 Fevral, 2024",
      title: "Regionlarda Təhsil Turu",
      location: "Gəncə, Şəki, Quba",
      type: "Keçirilmiş",
      image: t2,
      desc: "Region məktəblilərinə universitet seçimi üzrə qısa və praktiki seminarlar."
    },
    {
      id: 3,
      date: "25 Yanvar, 2024",
      title: "Könüllülərlə Görüş",
      location: "Fondun baş ofisi",
      type: "Keçirilmiş",
      image: t6,
      desc: "Yeni könüllülər proqramının təqdimatı və interaktiv komanda quruculuğu sessiyası."
    }
  ];

  return (
    <div className="events-container">
      <div className="events-hero">
        <h1 className="events-main-title">Tədbirlərimiz</h1>
        <p className="events-subtitle">Gənclərin inkişafı üçün təşkil etdiyimiz layihələr</p>
      </div>

      <div className="events-content">
        <div className="events-grid">
          {eventsData.map((event) => (
            <div key={event.id} className="events-event-card">
              <div className={`events-type-tag ${event.type === "Gələcək Tədbir" ? "future" : "past"}`}>
                {event.type}
              </div>
              {event.image && (
                <div className="events-image-wrap">
                  <img src={event.image} alt={event.title} className="events-image" loading="lazy" />
                </div>
              )}
              <h3 className="events-event-title">{event.title}</h3>
              
              <div className="events-info-row">
                <FaCalendarAlt className="events-icon" />
                <span>{event.date}</span>
              </div>
              
              <div className="events-info-row">
                <FaMapMarkerAlt className="events-icon" />
                <span>{event.location}</span>
              </div>

              <p className="events-event-desc">{getShortText(event.desc)}</p>
              
              <button className="events-details-btn">
                <FaUsers /> 
                Qoşulmaq üçün yazın
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events; 