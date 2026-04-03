import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

// Импортируем логотипы (исправлено расширение для logomain)
import logom2 from '../assets/logomain.jpeg'; 
import logom3 from '../assets/logom2.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSub, setActiveSub] = useState(null);
  
  // Логика скрытия при скролле
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // Если скроллим вниз больше чем на 100px — скрываем, если вверх — показываем
      if (window.scrollY > lastScrollY && window.scrollY > 100) { 
        setShow(false); 
      } else { 
        setShow(true); 
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSub(null);
  };

  const toggleSub = (menu) => {
    setActiveSub(activeSub === menu ? null : menu);
  };

  return (
    <>
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      {/* Добавлен динамический класс hidden */}
      <header className={`header-wrapper ${!show ? 'hidden' : ''}`}>
        {/* 1. Синяя полоска сверху */}
        <div className="header-top-line"></div>

        {/* 2. Блок Брендинга (Логотипы) */}
        <div className="branding-section">
          <div className="nav-container branding-container">
            <Link to="/" onClick={closeMenu}>
              <img src={logom2} alt="Logo Left" className="logo-img-main1" />
            </Link>
            <Link to="/" onClick={closeMenu}>
              <img src={logom3} alt="Logo Right" className="logo-img-main" />
            </Link>
          </div>
        </div>

        {/* 3. Панель навигации */}
        <div className="header-navigation">
          <div className="nav-container">
            <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
              {/* Haqqımızda */}
              <div className="nav-item">
                <span className="nav-link-with-icon" onClick={() => toggleSub('about')}>
                  Haqqımızda <FaChevronDown className={`arrow ${activeSub === 'about' ? 'rotate' : ''}`} />
                </span>
                <div className={`dropdown ${activeSub === 'about' ? 'show' : ''}`}>
                  <Link to="/vision" onClick={closeMenu}>Fondun vizyonu və dəyərləri</Link>
                  <Link to="/management" onClick={closeMenu}>Rəhbərlik</Link>
                  <Link to="/structure" onClick={closeMenu}>Struktur</Link>
                  <Link to="/board" onClick={closeMenu}>Müşahidə şurası</Link>
                  <Link to="/mentors" onClick={closeMenu}>Mentorlarımız</Link>
                </div>
              </div>

              {/* Fəaliyyətimiz */}
              <div className="nav-item">
                <span className="nav-link-with-icon" onClick={() => toggleSub('activity')}>
                  Fəaliyyətimiz <FaChevronDown className={`arrow ${activeSub === 'activity' ? 'rotate' : ''}`} />
                </span>
                <div className={`dropdown ${activeSub === 'activity' ? 'show' : ''}`}>
                  <Link to="/documents" onClick={closeMenu}>Rəsmi sənədlər</Link>
                  <Link to="/training" onClick={closeMenu}>Təlimlər və seminarlar</Link>
                  <Link to="/reports" onClick={closeMenu}>Hesabatlar</Link>
                  <Link to="/partners" onClick={closeMenu}>Tərəfdaşlarımız</Link>
                </div>
              </div>

              {/* Layihələrimiz */}
              <div className="nav-item">
                <span className="nav-link-with-icon" onClick={() => toggleSub('projects')}>
                  Layihələrimiz <FaChevronDown className={`arrow ${activeSub === 'projects' ? 'rotate' : ''}`} />
                </span>
                <div className={`dropdown ${activeSub === 'projects' ? 'show' : ''}`}>
                  <Link to="/scholarships" onClick={closeMenu}>Təqaüd proqramları</Link>
                  <Link to="/grants" onClick={closeMenu}>Qrantlar</Link>
                  <Link to="/internship" onClick={closeMenu}>Təcrübə proqramları</Link>
                </div>
              </div>

              {/* Xəbərlər */}
              <div className="nav-item">
                <span className="nav-link-with-icon" onClick={() => toggleSub('news')}>
                  Xəbərlər <FaChevronDown className={`arrow ${activeSub === 'news' ? 'rotate' : ''}`} />
                </span>
                <div className={`dropdown ${activeSub === 'news' ? 'show' : ''}`}>
                  <Link to="/media" onClick={closeMenu}>Biz mediada</Link>
                  <Link to="/gallery" onClick={closeMenu}>Qalereya</Link>
                  <Link to="/news-all" onClick={closeMenu}>Xəbərlər</Link>
                </div>
              </div>

              {/* Əlaqə */}
              <div className="nav-item">
                <span className="nav-link-with-icon" onClick={() => toggleSub('contact')}>
                  Əlaqə <FaChevronDown className={`arrow ${activeSub === 'contact' ? 'rotate' : ''}`} />
                </span>
                <div className={`dropdown ${activeSub === 'contact' ? 'show' : ''}`}>
                  <Link to="/address" onClick={closeMenu}>Ünvan</Link>
                  <Link to="/faq" onClick={closeMenu}>Suallar</Link>
                  <Link to="/partnership" onClick={closeMenu}>Əməkdaşlıq</Link>
                </div>
              </div>

              <Link to="/donate" className="donate-btn-nav" onClick={closeMenu}>İanə Et</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;