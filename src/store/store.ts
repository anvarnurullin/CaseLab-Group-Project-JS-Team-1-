import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
  modal: modalReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));