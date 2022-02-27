import "./Cart.css";
import "../Modal/Modal.css";
import OrderItem from "../OrderItem/OrderItem";
import { useDispatch } from "react-redux";
import { setMenuAction } from "../../store/menuReducer";
import { useEffect, useRef } from "react";
import OrderList from "../OrderList/OrderList";

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
      <div className="Cart">
        <div className="orderItem">
          <OrderList />
        </div>
        <form className="wrap" ref={form}>
          <fieldset className="field-area1">
            <h2>
              <span>Ваши данные:</span>
            </h2>
            <fieldset className="field-area">
              <label htmlFor="name" />
              <input type="text" placeholder="Имя" id="name" name="name" />
            </fieldset>
            <fieldset className="field-area">
              <label htmlFor="telephone" />
              <input
                type="telephone"
                placeholder="Телефон"
                id="telephone"
                name="telephone"
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
