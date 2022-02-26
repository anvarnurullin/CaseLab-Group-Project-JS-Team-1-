import { OrderList } from "../typescript/main";

export const orderListReducer = (
  state: {idOrderItem:number, orderItem:OrderList}[] = [],
  action: {
    type: string;
    payload: {idOrderItem:number, orderItem:OrderList} | number;
  }
) => {
  switch (action.type) {
    case "addOrderItem":
      return [...state, action.payload];
    case "removeOrderItem":
      return state.filter((item) => item.idOrderItem !== action.payload);
    default:
      return state;
  }
};

export const addOrderItemAction = (payload: {idOrderItem:number, orderItem:OrderList}) => ({
  type: "addOrderItem",
  payload,
});
export const removeOrderItemAction = (payload: number) => ({
  type: "removeOrderItem",
  payload,
});
