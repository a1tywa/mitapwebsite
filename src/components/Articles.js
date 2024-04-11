import React from "react";

const Articles = () => {
  return (
    <section className="main-articles">
      <div className="container">
        <div className="common-articles">
          <h1 className="common-articles-title">Интересные статьи</h1>
          <ul className="articles-items">
            <li className="articles-item">
              <img src="" alt="articles-img" className="articles-img" />
              <div className="items-version">
                <p className="item-version">WEB</p>
                <p className="item-version">Android</p>
                <p className="item-version">iOS</p>
              </div>
              <div className="articles-title">
                Разработка веб дизайна в <br /> Бишкеке
              </div>
              <p className="articles-text">
                Разработка дизайна для веб сайтов и мобильных приложений в
                Бишкеке на профессиональном уровне занимаются единицы. Не каждая
                студия разработки сайтов в Бишкеке может похвастаться тем, что
                могут разработать качественный user interface с учетом user
                experience.
              </p>
              <p className="articles-text">15 февраля 2019 г.</p>
            </li>
            <li className="articles-item">
              <img src="" alt="articles-img" className="articles-img" />
              <div className="items-version">
                <p className="item-version">Android</p>
                <p className="item-version">iOS</p>
              </div>
              <div className="articles-title">
                Разработка приложений в <br /> Бишкеке
              </div>
              <p className="articles-text">
                Мы занимаемся созданием приложений в Бишкеке. За короткое время
                мы разработали приложения на платформы IOS и Android, которыми
                пользуется весь Кыргызстан и не только.
              </p>
              <p className="articles-text">15 февраля 2019 г.</p>
            </li>
            <li className="articles-item">
              <img src="" alt="articles-img" className="articles-img" />
              <div className="items-version">
                <p className="item-version">WEB</p>
              </div>
              <div className="articles-title">Продвижение сайтов в Бишкеке</div>
              <p className="articles-text">
                После того как вы создали сайт,нужно его продвинуть в поисковика
                в локальном регионе - в Бишкеке, вы будете ждать заявок с сайта,
                но их может и не быть, если вы его не рекламируете. Это можно
                делать как платными путями так и бесплатными. Самыми
                распространенными путями продвижения сейчас являются продвижение
                в поисковике, продвижение в социальных сетях, на других
                тематических сайтах и на радио.
              </p>
              <p className="articles-text">15 февраля 2019 г.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Articles;
