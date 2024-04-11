import React from "react";
import instagram from "../image/icons/instagram.svg";
import twitter from "../image/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <ul className="footer-text">
            <li>
              <img src="" alt="footer-pdf" className="footer-icon-pdf" />
            </li>
            <li>
              <p>Скачать презентацию</p>
            </li>
          </ul>
          <ul className="footer-icons">
            <li>
              <img src={instagram} alt="footer-icon" className="footer-icon" />
            </li>
            <li>
              <img src={twitter} alt="footer-icon" className="footer-icon" />
            </li>
          </ul>
        </div>
        <div className="footer-content-contacts">
          <p>© MITAPP LLC, 2015-2023. Все права защищены.</p>
          <ul className="footer-contacts">
            <li>
              <a>О нас</a>
            </li>
            <li>
              <a>Проекты</a>
            </li>
            <li>
              <a>Услуги</a>
            </li>
            <li>
              <a>Контакты</a>
            </li>
            <li>
              <a>Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
