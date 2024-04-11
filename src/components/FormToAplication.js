import React from "react";

const FormToAplication = () => {
  return (
    <section className="main-form">
      <div className="container">
        <div className="main-form-content">
          <h1 className="main-form-title">Вам интересно что мы делаем?</h1>
          <p className="main-form-text">
            Хотите подробнее узнать об этом проекте или заказать подобный
            проект? Отправьте сообщение и мы свяжемся с вами
          </p>
          <img src="" alt="form-img" className="form-img" />
          <div className="action-form-input">
            <input placeholder="Имя" className="form-input" />
            <input placeholder="E-mail" className="form-input" />
            <input placeholder="Телефон" className="form-input-phone" />
            <button className="form-btn">Отправить</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormToAplication;
