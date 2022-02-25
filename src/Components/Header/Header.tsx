import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="HeaderWrap">
      <header className="Header">
        <a href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <nav>
          <ul className="menu">
            <li>
              <a href="">Главная</a>
            </li>
            <li>
              <a href="">Меню</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
          </ul>
        </nav>
        <ul className="headerContacts">
          <li>Наш телефон:</li>
          <li>+996 705 188 955</li>
          <li>+996 555 188 955</li>
          <li>работаем с 10:00 до 00:00</li>
        </ul>
        <ul className="headerCart">
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </a>
            <span>1</span>
          </li>
        </ul>
      </header>
    </section>
  );
}

export default Header;
