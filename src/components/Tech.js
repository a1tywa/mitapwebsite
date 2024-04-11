import React from "react";

const Tech = () => {
  return (
    <section className="main-tech">
      <div className="container">
        <div className="common-tech">
          <h1 className="common-tech-title">Технологии</h1>
          <p className="common-tech-text">
            Команда MITAPP постоянно следит за развитием и тенденциями в сфере
            ИТ. Мы активно применяем на практике самые современные технологии.
          </p>
          <ul className="tech-items">
            <li>
              <img src="" alt="tech-icons" className="tech-img" />
            </li>
            <li>
              <img src="" alt="tech-icons" className="tech-img" />
            </li>
            <li>
              <img src="" alt="tech-icons" className="tech-img" />
            </li>
            <li>
              <img src="" alt="tech-icons" className="tech-img" />
            </li>
            <li>
              <img src="" alt="tech-icons" className="tech-img" />
            </li>
            <li>
              <img src="" alt="tech-icons" className="tech-img" />
            </li>
          </ul>
          <div className="common-mitapp">
            <h2 className="common-tech-title">MITAPP это —</h2>
            <p className="common-mitapp-text">
              надежный партнер в расширении возможности бизнеса и автоматизации
              бизнес процессов для достижения лидерство в вашей сфере.
            </p>
            <p className="common-mitapp-text">
              Доверьтесь нашей команде профессионалов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
