import React from "react";

const Content = () => {
  return (
    <section className="main-content">
      <div className="container">
        <div className="main-info">
          <h1 className="main-title">
            Создание сайтов и iOS/Android приложений
          </h1>
          <span className="main-title-info">под ключ в Бишкеке</span>
          <div className="main-title-line">________</div>
          <p className="main-text">
            Мы разработаем вам под ключ сайт и мобильное приложение любой <br />
            сложности за адекватную стоимость и поможем запустить в сеть.
          </p>
        </div>
        <div className="main-action">
          <h2 className="main-text-info">
            Заполните заявку и мы перезвоним Вам и <br />
            бесплатно проконсультируем по телефону или при личной встрече!
          </h2>
          <div className="main-action-btn">
            <input className="main-input" placeholder="Телефон" />
            <input className="main-input" placeholder="E-mail" />
            <button className="btn">Отправить</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
