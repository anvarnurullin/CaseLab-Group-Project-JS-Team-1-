import React, { useEffect } from 'react';
import { Product } from '../../typescript/main';
import { useDispatch, useSelector } from 'react-redux';
import IngredientList from './IngredientList/IngredientList';
import {increasePriceAction, setPriceAction} from '../../store/cardPriceReducer';
import { RootState } from '../../store/store';
import {cartCounterAction} from '../../store/cartCounterReducer';
import { hideModalAction } from '../../store/showModalReducer';
import './Modal.css';


function Modal({product}:{product:Product}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPriceAction(+product.price));
  }, [])
  const price = useSelector((state: RootState) => state.cardPrice);

  let promoCondition;
  if(product.promo) {
    promoCondition = <>
      <div className='promoPrice'>
        <span>{`${price} `}<b>руб</b></span>
        <span>{`${Math.ceil(price * 0.85)} `}<b>руб</b></span>
      </div>
    </>;
  } else {
    promoCondition = <div className='modalCardPriceValue'>{`${price} р`}</div>;
  }
  const ingredientsList = product.ingredients?.map(function(ingredient, index){
    return <IngredientList key={index} ingredient={ingredient}/>
  })
  function handleAddCardBtn(){
    dispatch(cartCounterAction());
    dispatch(hideModalAction());
  }
  return ( 
    <div className={`Modal`}>
      <div className='modalCard'>
        <img onClick={() => dispatch(hideModalAction())} className='iconClose' src='https://caselab-group-1.herokuapp.com/images/iconClose.svg'></img>
        <img className='modalCardImage' src={product.imagePath} alt={`Фото ${product.title}`}></img>
        <h3 className='modalCardTitle'>{product.title}</h3>
        <hr></hr>
        {ingredientsList}
        <h4 className='modalCardPrice'>Цена</h4>
        {promoCondition}
        <button className='addToCardModalBtn' onClick={handleAddCardBtn}>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default Modal;