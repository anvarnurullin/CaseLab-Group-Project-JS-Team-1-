import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "./modalReducer";
import { cardPriceReducer } from "./cardPriceReducer";
import { menuReducer } from "./menuReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  cardPrice: cardPriceReducer,
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
