import React, { useEffect } from 'react';
import { Product } from '../../typescript/main';
import { useDispatch, useSelector } from 'react-redux';
import {closeModalAction} from '../../store/modalReducer'
import IngredientList from './IngredientList/IngredientList';
import {setPriceAction, increasePriceAction, decreasePriceAction} from '../../store/cardPriceReducer';
import { RootState } from '../../store/store';
import './Modal.css'

function Modal({product, styleModal}:{product:Product, styleModal:string}) {
  const dispatch = useDispatch();
  const price = useSelector((state: RootState) => state.cardPrice);

  useEffect(() => {
    dispatch(setPriceAction(+product.price));
  }, []);
  console.log(price);

  let promoCondition;
  if(product.promo) {
    promoCondition = <>
      <div className='promoPrice'>
        <span>{`${product.price} `}<b>руб</b></span>
        <span>{`${Math.ceil(+product.price * 0.85)} `}<b>руб</b></span>
      </div>
    </>;
  } else {
    promoCondition = <div className='modalCardPriceValue'>{`${product.price} р`}</div>;
  }
  const ingredientsList = product.ingredients?.map(function(ingredient, index){
    return <IngredientList key={index} ingredient={ingredient}/>
  })
  return ( 
    <div className={`Modal ${styleModal}`}>
      <div className='modalCard'>
        <img onClick={() => dispatch(closeModalAction({product:product, styleModal:''}))} className='iconClose' src='https://caselab-group-1.herokuapp.com/images/iconClose.svg'></img>
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