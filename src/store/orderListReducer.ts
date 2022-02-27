import { OrderList } from "../typescript/main";

export const orderListReducer = (
  state: { idOrderItem: number; orderItem: OrderList }[] = [],
  action: {
    type: string;
    payload: { idOrderItem: number; orderItem: OrderList } | number;
  }
) => {
  switch (action.type) {
    case "addOrderItem":
      if (state.length === 0) {
        return [action.payload];
      } else {
        //@ts-expect-error
        let checkOrderItemID = state.filter(val => val.orderItem.idProduct === action.payload.orderItem.idProduct);
        if (checkOrderItemID.length === 0) {
          return [...state, action.payload];
        } else {
        return state.map((item) => {
          //@ts-expect-error
          if(item.orderItem.idProduct === action.payload.orderItem.idProduct && action.payload.orderItem.ingrediantList == undefined) {
            return {
              idOrderItem: item.idOrderItem,
              orderItem: {
                ...item.orderItem,
                productQuantity: item.orderItem.productQuantity + 1,
              },
            }
          }
        })
      }
    }
    case "removeOrderItem":
      return state.filter((item) => item.idOrderItem !== action.payload);
    case "increaseOrderItem":
      return state.map((item) => {
        if (item.idOrderItem === action.payload) {
          return {
            idOrderItem: item.idOrderItem,
            orderItem: {
              ...item.orderItem,
              productQuantity: item.orderItem.productQuantity + 1,
            },
          };
        }
      });
    case "decreaseOrderItem":
      return state.map((item) => {
        if (item.idOrderItem === action.payload) {
          return {
            idOrderItem: item.idOrderItem,
            orderItem: {
              ...item.orderItem,
              productQuantity: item.orderItem.productQuantity - 1,
            },
          };
        }
      });
    default:
      return state;
  }
};

export const addOrderItemAction = (payload: {
  idOrderItem: number;
  orderItem: OrderList;
}) => ({
  type: "addOrderItem",
  payload,
});

export const removeOrderItemAction = (payload: number) => ({
  type: "removeOrderItem",
  payload,
});
export const increaseOrderItemAction = (payload: number) => ({
  type: "increaseOrderItem",
  payload,
});
export const decreaseOrderItemAction = (payload: number) => ({
  type: "decreaseOrderItem",
  payload,
});
