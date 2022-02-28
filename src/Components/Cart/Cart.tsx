import "./Cart.css";
import "../Modal/Modal.css";
import { useDispatch } from "react-redux";
import { setMenuAction } from "../../store/menuReducer";
import { useEffect, useRef } from "react";
import OrderList from "../OrderList/OrderList";

function Cart() {
  const dispatch = useDispatch();

  const modal_backdrop = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (modal_backdrop.current && form.current) {
      modal_backdrop.current.onclick = event => {
        if (event.target === modal_backdrop.current)
          dispatch(setMenuAction("main"))
      };
      form.current.onsubmit = (event) => {
        event.preventDefault();
        modal_backdrop.current?.style.removeProperty("display");
        console.log(Object.fromEntries(new FormData(form.current!))); 
      };
      form.current.querySelectorAll('input').forEach(input => Object.assign(input, {
        oninvalid(this: HTMLInputElement, event) {
          this.setCustomValidity('');
          if (!this.validity.valid && this.dataset.validationError)
            this.setCustomValidity(this.dataset.validationError);
        },
        oninput(this: HTMLInputElement, event) {
          this.setCustomValidity('');
        }
      } as GlobalEventHandlers));
    }
  }, []);

  return <>
    <div className="Cart">
      <div className="orderItem">
      <OrderList/>
      </div>
      <form className="wrap" ref={form}>
        <fieldset className="field-area1">
          <h2>Ваши данные:</h2>
          <fieldset>
            <input
              type="text" id="name" name="name" placeholder="Имя"
              required={true} pattern="[a-zA-Zа-яА-Я]+" data-validation-error="Только буквы"/>
            </fieldset>
          <fieldset className="field-area2">
            <input
              type="tel" id="telephone" name="telephone" placeholder="Телефон"
              required={true} pattern="\+?[0-9]{1,12}" data-validation-error="Только цифры, не больше 12, можно с плюсом в начале"/>
          </fieldset>
          <button className="submitBtn">Оформить заказ</button>
        </fieldset>
      </form>
    </div>
    <div
      className="Modal cart_modal"
      style={{display: 'none'}}
      ref={modal_backdrop}>
      <div className="modalCard"><h2>Спасибо за заказ!</h2></div>
    </div>
  </>;
}

export default Cart;
