import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderList } from "../../typescript/main";
import { removeOrderItemAction } from "../../store/orderListReducer";
import "./OrderItem.css";
import { decreaseCounterAction } from "../../store/cartCounterReducer";
import {
  increaseOrderItemAction,
  decreaseOrderItemAction,
} from "../../store/orderListReducer";

function OrderItem({
  idOrderItem,
  orderItem,
}: {
  idOrderItem: number;
  orderItem: OrderList;
}) {
  const dispatch = useDispatch();
  const counter = +orderItem.productQuantity;

  const price = +orderItem.price;

  const sum = price * counter;

  function increaseOrderItem() {
    dispatch(increaseOrderItemAction(idOrderItem));
  }

  function decreaseOrderItem() {
    dispatch(decreaseOrderItemAction(idOrderItem));
  }

  function deleteFromCart() {
    dispatch(removeOrderItemAction(idOrderItem));
    dispatch(decreaseCounterAction());
  }

  return (
    <div className="OrderItem">
      <div className="OrderItemDocher">
        <div className="Description Shaurma">
          <h3>{orderItem.title}</h3>
        </div>
        <div className="Counter">
          <div>
            <button id="Minus" onClick={decreaseOrderItem}>
              -
            </button>
            <div id="Count">{counter}</div>
            <button id="Plus" onClick={increaseOrderItem}>
              +
            </button>
          </div>
          <div id="Summ">{sum}</div>
          <div id="Delete" onClick={deleteFromCart}>
            X
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
