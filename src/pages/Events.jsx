import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const eventsData = [
    {
      id: 1,
      date: "15 Mart, 2024",
      title: "Gənc Liderlər Forumu",
      location: "Bakı, ADA Universiteti",
      type: "Gələcək Tədbir",
      desc: "Tələbələrin liderlik bacarıqlarını inkişaf etdirmək üçün təşkil olunan genişmiqyaslı forum."
    },
    {
      id: 2,
      date: "10 Fevral, 2024",
      title: "Regionlarda Təhsil Turu",
      location: "Gəncə, Şəki, Quba",
      type: "Keçirilmiş",
      desc: "Məktəblilərlə görüş və universitet seçimi mövzusunda peşəkar seminarlar."
    },
    {
      id: 3,
      date: "25 Yanvar, 2024",
      title: "Könüllülərlə Görüş",
      location: "Fondun baş ofisi",
      type: "Keçirilmiş",
      desc: "Yeni könüllülər proqramının təqdimatı və komanda quruculuğu oyunları."
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
              <h3 className="events-event-title">{event.title}</h3>
              
              <div className="events-info-row">
                <FaCalendarAlt className="events-icon" />
                <span>{event.date}</span>
              </div>
              
              <div className="events-info-row">
                <FaMapMarkerAlt className="events-icon" />
                <span>{event.location}</span>
              </div>

              <p className="events-event-desc">{event.desc}</p>
              
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