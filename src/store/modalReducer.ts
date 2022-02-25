import { ReactElement } from "react";
import {Product} from '../typescript/main'

export const modalReducer = (state:null|{product: Product, styleModal: string} = null, action: {type: string, payload: {product: Product, styleModal: string}}) => {
  switch (action.type) {
    case 'showModal':
      return (state) ? {...state, ...action.payload} : {...action.payload};
    default:
      return state
  }
}

export const showModalAction = (payload: {product: Product, styleModal: string}) => ({type: 'showModal', payload});
