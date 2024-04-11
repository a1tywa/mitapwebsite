import React from "react";

const ClientsInfo = () => {
  return (
    <div className="container">
      <div className="common-title">Наши клиенты</div>
      <div className="common-clients-items">
        <div className="common-clients-item">
          <img src="" alt="clients-item" className="clients-item-img" />
          <div className="clients-item-title">Beeline Кыргызстан</div>
          <div className="clienst-item-text">
            ООО «Скай Мобайл» входит в группу компаний VEON Ltd, предоставляющих
            услуги голосовой связи, передачи данных, а также широкополосного
            доступа в Интернет в Кыргызстане
          </div>
        </div>
      </div>

      <div className="common-title">Наши услуги</div>
      <p className="common-text">
        Команда MITAPP постоянно следит за развитием и тенденциями в сфере ИТ.
        Мы активно <br /> применяем на практике самые современные технологии.
      </p>
      <div className="common-services-items">
        <div className="common-services-item">
          <img src="" alt="services-item" className="services-item-img" />
          <div className="services-item-title">IT аутсорсинг</div>
          <div className="services-item-text">
            Наша компания отлично выполняет абсолютно любые задачи, которые
            бизнесу нужно передать стороннему исполнителю. Наши клиенты всегда
            довольны, и их имена говорят о нашей репутации.
          </div>
        </div>
        <div className="common-services-item">
          <img src="" alt="services-item" className="services-item-img" />
          <div className="services-item-title">Разработка дизайна</div>
          <div className="services-item-text">
            Можно создать самое функциональное IT решение, но без отличного
            дизайна, конечного пользователя не привлечь. Дизайн должен быть
            простым, понятным, и совершенным.
          </div>
        </div>
        <div className="common-services-item">
          <img src="" alt="services-item" className="services-item-img" />
          <div className="services-item-title">
            Разработка мобильных приложений
          </div>
          <div className="services-item-text">
            Смартфоны и планшеты стали неотъемлемой частью жизни современного
            человека, а для бизнеса – прекрасной возможностью «достучаться» до
            потенциального клиента в любое время дня и ночи.
          </div>
        </div>
        <div className="common-services-item">
          <img src="" alt="services-item" className="services-item-img" />
          <div className="services-item-title">Разработка веб приложений</div>
          <div className="services-item-text">
            В современном мире веб приложения играют колоссальную роль. Сейчас
            вы уже не сможете представить информационное пространство без
            новостных блогов, интернет-магазинов и социальных сетей.
          </div>
        </div>
        <div className="common-services-item">
          <img src="" alt="services-item" className="services-item-img" />
          <div className="services-item-title">
            Автоматизация бизнес процессов
          </div>
          <div className="services-item-text">
            Благодаря грамотной автоматизации бизнес процессов и внедрения IT
            решений, предприниматели и крупные компании могут работать
            эффективнее и зарабатывать гораздо большую прибыль.
          </div>
        </div>
      </div>
      <div className="common-title">Последние проекты</div>
      <div className="common-projects-items">
        <ul className="common-projects-item">
          <li>
            <div className="projects-title">
              Мобильное приложение и сайт Hata.kg
            </div>
            <img src="" alt="projects-img" className="projects-img" />
          </li>
          <li>
            <div className="projects-title">
              Мобильное приложение и веб сайт MEETAPP.KG
            </div>
            <img src="" alt="projects-img" className="projects-img" />
          </li>
        </ul>
      </div>
      <div className="load-more">
        <a className="load-more">
          <span>
            {" "}
            <em>+</em> Все проекты
          </span>
        </a>
      </div>
    </div>
  );
};

export default ClientsInfo;
