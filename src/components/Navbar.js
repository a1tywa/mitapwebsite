import React from "react";

const Navbar = () => {
  return (
    <section className="main">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="logo" className="logo-img" />
          </div>
          <nav className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <a>О нас</a>
              </li>
              <li className="menu-item">
                <a>Проекты</a>
              </li>
              <li className="menu-item">
                <a>Услуги</a>
              </li>
              <li className="menu-item">
                <a>Блог</a>
              </li>
              <li className="menu-item">
                <a>Контакты</a>
              </li>
              <div className="menu-contacts">
                <div className="menu-item-language">Russian</div>
                <div className="menu-item-contact">
                  <p className="menu-item-contact-1">Нужна консультация?</p>
                  <p className="menu-item-contact-2">+996 225 33-77-77</p>
                </div>
                <div className="menu-item-contact-btn">
                  <button className="btn">Написать</button>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
