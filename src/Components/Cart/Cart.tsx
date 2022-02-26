import React, { Component } from "react";
import "./Cart.css";
import Todo from "./CartTS/CartTS";
import OrderList from "../OrderList/OrderList"

interface IAppState {
  name: string;
}

class Cart extends Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
    };

    this.changeMyInput = this.changeMyInput.bind(this);
  }

  changeMyInput(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }
  render() {
    return (
      <div className="Cart">
        <div className="orderItem">
          <OrderList />
        </div>
        <form className="wrap">
          <fieldset className="field-area1">
            <h2>
              <span>Ваши данные:</span>
            </h2>
            <fieldset className="field-area">
              <label htmlFor="name"></label>
              <input type="text" placeholder="Имя" id="name" />
            </fieldset>
            <fieldset className="field-area">
              <label htmlFor="telephone"></label>
              <input type="telephone" placeholder="Телефон" id="telephone" />
            </fieldset>
            <button type="submit" className="submitBtn">
              Оформить заказ
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Cart;
