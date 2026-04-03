import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="notfound-page">
      <div className="notfound-shell">
        <div className="notfound-card">
          <span className="notfound-code">404</span>
          <h1>Siz səhv yerə düşmüsünüz</h1>
          <p>
            Bu səhifə mövcud deyil. Gəlin sizi ana səhifəyə qaytaraq.
          </p>
          <Link to="/" className="notfound-btn">
            Ana səhifəyə qayıt
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
