import React, { useEffect } from 'react';
import { Product } from '../../typescript/main';
import { useDispatch } from 'react-redux';
import {setModalAction} from '../../store/modalReducer';
import {showModalAction} from '../../store/showModalReducer'
import {cartCounterAction} from '../../store/cartCounterReducer';
import './ProductCard.css'

function ProductCard({product, mainPage}: {product:Product, mainPage:boolean}) {
  const dispatch = useDispatch();

  let promoConditionTrue;
  let promoConditionTrueFalse;
  let promoProductCard = '';
  let buttonText;
  let addToCardBtnPromo = '';
  if(product.promo) {
    addToCardBtnPromo = 'addToCardBtnPromo';
    buttonText = 'Добавить в корзину';
    if(mainPage) {
      promoProductCard = 'promoProductCard';
      buttonText = 'Хочу!';
    }

    promoConditionTrue = <>
      <div className='promoPrice'>
        <span>{`${product.price} `}<b>руб</b></span>
        <span>{`${Math.ceil(+product.price * 0.85)} `}<b>руб</b></span>
      </div>
    </>;
  } else {
    promoConditionTrueFalse = <span>{`${product.price} р`}</span>;
    buttonText = 'Добавить в корзину';
  }

  function showModal() {
    if(product.type.toLowerCase() === "шаурма") {
      dispatch(setModalAction({product:product}));
      dispatch(showModalAction());
    } else {
      dispatch(cartCounterAction());
    }
  }

  return ( 
    <div className={`ProductCard ${promoProductCard}`}>
      <img className='productCardImage' src={product.imagePath} alt={`Фото ${product.title}`}></img>
      <h3 className='productCardTitle'>{product.title}</h3>
      <p className='productCardInfo'><span>{`${product.weight} ${(product.type.toLowerCase() === "напитки")? 'мл':'г'}`}</span>{promoConditionTrueFalse}</p>
      <div className='addToCardBtnBar'>
        {promoConditionTrue}
        <button className={`addToCardBtn ${addToCardBtnPromo}`} onClick={showModal}>{buttonText}</button>
      </div>
    </div>
  );
}

export default ProductCard;