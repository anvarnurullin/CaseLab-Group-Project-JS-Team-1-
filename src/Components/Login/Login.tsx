import "./Login.css";
import "../Modal/Modal.css";
import { useDispatch } from "react-redux";
import { setMenuAction } from "../../store/menuReducer";
import { useEffect, useRef } from "react";

function Cart() {
  const dispatch = useDispatch();

  const modal_backdrop = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    modal_backdrop.current?.addEventListener("click", (e) => {
      if (e.target == modal_backdrop.current) dispatch(setMenuAction("main"));
    });
    form.current?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (modal_backdrop.current) {
        modal_backdrop.current.style.removeProperty("display");
        console.log(Object.fromEntries(new FormData(form.current!))); // значения формы для запроса к бэкенду
      }
    });
  }, []);

  return (
    <>
      <div className="Login">
        <form className="wrap" ref={form}>
          <fieldset className="fields">
            <h2>Авторизация</h2>
            <fieldset className="login">
              <label htmlFor="login" />
              <input type="text" placeholder="Логин" id="login" name="login" />
            </fieldset>
            <fieldset className="password">
              <label htmlFor="password" />
              <input
                type="password"
                placeholder="Пароль"
                id="password"
                name="password"
              />
            </fieldset>
            <button type="submit" className="submitBtn">
              <h3>Оформить заказ</h3>
            </button>
          </fieldset>
        </form>
      </div>
      <div
        className="Modal cart_modal"
        style={{ display: "none" }}
        ref={modal_backdrop}
      >
        <div className="modalCard">
          <h2>Спасибо за заказ!</h2>
        </div>
      </div>
    </>
  );
}

export default Cart;