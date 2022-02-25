import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { modalReducer } from './modalReducer';
import { cardPriceReducer } from './cardPriceReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  cardPrice: cardPriceReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));