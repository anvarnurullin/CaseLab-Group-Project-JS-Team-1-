import { Product } from "../typescript/main";

export const orderListReducer = (
  state = [],
  action: {
    type: string;
    payload: string;
  }
) => {
  switch (action.type) {
    case "addOrderItem":
      return action.payload;
    case "removeOrderItem":
      return action.payload;
    default:
      return state;
  }
};

export const addOrderItemAction = (payload: string) => ({
  type: "addOrderItem",
  payload,
});
export const removeOrderItemAction = (payload: string) => ({
  type: "removeOrderItem",
  payload,
});
