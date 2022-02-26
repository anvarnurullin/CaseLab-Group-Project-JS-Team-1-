import React from "react";
import { useDispatch } from "react-redux";
import {OrderList} from '../../typescript/main'
import { removeOrderItemAction } from "../../store/orderListReducer";
import "./OrderItem.css";
import { decreaseCounterAction } from "../../store/cartCounterReducer";

const arr = [];

function OrderItem({idOrderItem, orderItem}:{idOrderItem:number, orderItem:OrderList}) {

  const dispatch = useDispatch();

  const [count1, setCount1] = React.useState(1);
  const price1 = +orderItem.price;

  const summ1 = price1 * count1;

  const plus1 = () => {
    setCount1(count1 + 1);
  };

  const minus1 = () => {
    if (count1 > 1) {
      setCount1(count1 - 1);
    }
  };
  function deleteFromCart(){
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
            <button id="Minus" onClick={minus1}>
              -
            </button>
            <div id="Count">{count1}</div>
            <button id="Plus" onClick={plus1}>
              +
            </button>
          </div>
          <div id="Summ">{summ1}</div>
          <div id="Delete" onClick={deleteFromCart}>X</div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
