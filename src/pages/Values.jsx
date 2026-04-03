import React from 'react';
import { FaShieldAlt, FaUsers, FaChartLine, FaGavel } from 'react-icons/fa';
import './Values.css';

const Values = () => {
  const valuesData = [
    {
      icon: <FaShieldAlt />,
      title: "Şəffaflıq",
      desc: "Biz bütün fəaliyyətimizdə və maliyyə hesabatlarımızda tam şəffaflığı təmin edirik."
    },
    {
      icon: <FaGavel />,
      title: "Ədalətlilik",
      desc: "Təqaüd və dəstək proqramlarımızda seçim meyarları tam ədalətli və obyektivdir."
    },
    {
      icon: <FaUsers />,
      title: "Bərabərlik",
      desc: "Hər bir gənc üçün sosial vəziyyətindən asılı olmayaraq bərabər təhsil imkanlarını müdafiə edirik."
    },
    {
      icon: <FaChartLine />,
      title: "Davamlılıq",
      desc: "Layihələrimizin uzunmüddətli və cəmiyyət üçün faydalı olmasına xüsusi önəm veririk."
    }
  ];

  return (
    <div className="values-container">
      <div className="values-hero">
        <h1 className="values-main-title">Dəyərlərimiz</h1>
        <p className="values-subtitle">Bizi biz edən və hədəflərimizə aparan prinsiplər</p>
      </div>

      <div className="values-content">
        <div className="values-grid">
          {valuesData.map((item, index) => (
            <div key={index} className="values-card">
              <div className="values-icon-box">{item.icon}</div>
              <h3 className="values-card-title">{item.title}</h3>
              <p className="values-card-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;