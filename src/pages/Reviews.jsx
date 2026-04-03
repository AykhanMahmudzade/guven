import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Aysel Məmmədova",
      role: "Tələbə (ADA Universiteti)",
      text: "GÜVƏN Fondunun təqaüd proqramı sayəsində təhsilimə daha çox fokuslana bildim. Onların dəstəyi təkcə maddi deyil, həm də mənəvi böyük stimuldur.",
      rating: 5
    },
    {
      id: 2,
      name: "Elvin Qasımov",
      role: "Məzun",
      text: "Fondun təşkil etdiyi seminarlar və mentorluq proqramı mənə iş həyatına ilk addımlarımı atmaqda çox kömək etdi. Peşəkar komanda ilə işləmək şansım oldu.",
      rating: 5
    },
    {
      id: 3,
      name: "Leyla Əliyeva",
      role: "Könüllü",
      text: "Burada olmaq mənə cəmiyyətə faydalı olmağın nə qədər gözəl olduğunu öyrətdi. Fondun şəffaflığı və hədəfləri məni çox heyran etdi.",
      rating: 5
    }
  ];

  return (
    <div className="reviews-container">
      <div className="reviews-hero">
        <h1 className="reviews-main-title">Rəylər</h1>
        <p className="reviews-subtitle">Fəaliyyətimiz haqqında iştirakçıların fikirləri</p>
      </div>

      <div className="reviews-content">
        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <div key={review.id} className="reviews-card">
              <FaQuoteLeft className="reviews-quote-icon" />
              <p className="reviews-review-text">{review.text}</p>
              
              <div className="reviews-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="reviews-star-icon" />
                ))}
              </div>

              <div className="reviews-user-info">
                <h4 className="reviews-user-name">{review.name}</h4>
                <p className="reviews-user-role">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;