import React, { useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setMenuAction } from "../../store/menuReducer";

function Header() {
  const dispatch = useDispatch();
  const cartCounter = useSelector((state: RootState) => state.cartCounter);
  const [navbarState, navbarSetState] = useState(false);
  const navbarStateUpdate = () => {
    navbarSetState(!navbarState);
  };

  return (
    <div className="Header">
      <div className="navbarContainer">
        <a>
          <img
            src="https://caselab-group-1.herokuapp.com/images/logo.png"
            className="logo"
            alt="logo"
          />
        </a>
        <div
          className={"navbarToggle" + (!navbarState ? "" : " is-active")}
          onClick={navbarStateUpdate}
          id="mobileMenu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={!navbarState ? "navbarMenu" : "navbarMenu active"}>
          <li className="navbarItem">
            <a
              onClick={() => dispatch(setMenuAction("main"))}
              className="navbarLinks"
            >
              Главная
            </a>
          </li>
          <li className="navbarItem">
            <a
              onClick={() => dispatch(setMenuAction("menu"))}
              className="navbarLinks"
            >
              Меню
            </a>
          </li>
          <li className="navbarItem">
            <a
              onClick={() => dispatch(setMenuAction("contacts"))}
              className="navbarLinks"
            >
              Контакты
            </a>
          </li>
          {/* <li className="navbarItem">
            <ul className="headerContacts">
              <li>Наш телефон:</li>
              <li>+996 705 188 955</li>
              <li>+996 555 188 955</li>
              <li>работаем с 10:00 до 00:00</li>
            </ul>
          </li> */}
          <li className="navbarItem">
            <a
              onClick={() => dispatch(setMenuAction("cart"))}
              className="navbarLinks"
            >
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
            <span className="cartCounter">{cartCounter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
