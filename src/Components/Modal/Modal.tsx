import React, {useState} from 'react';
import { Product } from '../../typescript/main';
import IngredientList from './IngredientList/IngredientList';
import './Modal.css'

function Modal({product, styleModal}:{product:Product, styleModal:string}) {
  let promoCondition;
  if(product.promo) {
    promoCondition = <>
      <div className='promoPrice'>
        <span>{`${product.price} `}<b>руб</b></span>
        <span>{`${Math.ceil(product.price * 0.85)} `}<b>руб</b></span>
      </div>
    </>;
  } else {
    promoCondition = <div>{`${product.price} р`}</div>;
  }
  const ingredientsList = product.ingredients?.map(function(ingredient, index){
    return <IngredientList key={index} ingredient={ingredient}/>
  })
  return ( 
    <div className={`Modal ${styleModal}`}>
      <div className='ModalCard'>
        <img className='modalCardImage' src={product.imagePath} alt={`Фото ${product.title}`}></img>
        <h3 className='modalCardTitle'>{product.title}</h3>
        <hr></hr>
        {ingredientsList}
        <h4 className='modalCardPrice'>Цена</h4>
        {promoCondition}
        <button className='addToCardModalBtn'>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default Modal;