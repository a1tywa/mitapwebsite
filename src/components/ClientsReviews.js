import React from "react";

const ClientsReviews = () => {
  return (
    <section className="main-reviews">
      <div className="container">
        <div className="common-title">Отзывы клиентов</div>
        <div className="common-reviews-items">
          <ul className="common-reviews-item">
            <li>
              <div className="review-item">
                <img src="" alt="review-icons" className="review-img" />
                <div className="review-contacts">
                  <p>IT Директор Beeline UZ</p>
                  <span>Когай А.А</span>
                </div>
              </div>
              <div className="review-text">
                Данная компания успела зарекомендовать себя как надежный и
                профессиональный партнер. За период сотрудничества, нам были
                оказаны услуги на профессиональном уровне.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientsReviews;
