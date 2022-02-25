import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img alt="Здесь логтип" />
      <div className="navigation">
        <button>Главная</button>
        <button>Меню</button>
        <button>Контакты</button>
      </div>
      <div className="contactsHeader">
        <p>Наш телефон</p>
        <p>
          <a>+996 705 188 955</a>
          <a>+996 555 188 955</a>
        </p>
        <p>работаем с 10:00 до 00:00</p>
      </div>
      <div className="cartIcon"></div>
    </div>
  );
}

export default Header;
