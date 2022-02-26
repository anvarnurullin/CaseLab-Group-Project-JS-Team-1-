import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "./modalReducer";
import { cardPriceReducer } from "./cardPriceReducer";
import { menuReducer } from "./menuReducer";
import { cartCounterReducer } from "./cartCounterReducer";
import { orderListReducer } from "./orderListReducer";
import { showModalReducer } from "./showModalReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  cardPrice: cardPriceReducer,
  menu: menuReducer,
  cartCounter: cartCounterReducer,
  orderList: orderListReducer,
  showModal: showModalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
