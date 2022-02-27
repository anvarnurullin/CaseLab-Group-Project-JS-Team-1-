import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderList.css";

function OrderList() {
  const orderListState = useSelector((state: RootState) => state.cartCounter);
  const orderListValue = useSelector((state: RootState) => state.orderList);
  console.log(orderListState);
  console.log(orderListValue);
  let setOrderList;
  let sumOrderList: number = 0;
  if (orderListState === 0) {
    setOrderList = (
      <div className="emptyCart">
        Ваша корзина пуста. Добавьте в нее что-нибудь!
      </div>
    );
  } else {
    //@ts-expect-error
    setOrderList = orderListValue.map(function (item) {
      sumOrderList += Number(item.orderItem.price);
      return <OrderItem {...item} />;
    });
  }
  return (
    <div className="OrderList">
      {setOrderList}
      <div className="summary">
        <div className="summaryText">Итого:</div>
        <div className="summaryOrder">{sumOrderList}</div>
      </div>
    </div>
  );
}

export default OrderList;
