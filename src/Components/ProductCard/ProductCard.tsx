import * as React from 'react';
import { Product } from '../../typescript/main';
import './ProductCard.css'

function ProductCard({product, mainPage}: {product:Product, mainPage:boolean}) {
  let promoConditionTrue;
  let promoConditionTrueFalse;
  let promoWeight = '';
  let promoProductCard = '';
  let buttonText;
  let addToCardBtnPromo = '';
  if(product.promo) {
    addToCardBtnPromo = 'addToCardBtnPromo';
    promoWeight = 'promoWeight';
    buttonText = 'Добавить в корзину';
    if(mainPage) {
      promoProductCard = 'promoProductCard';
      buttonText = 'Хочу!';
    }

    promoConditionTrue = <>
      <div className='promoPrice'>
        <span>{`${product.price} `}<b>руб</b></span>
        <span>{`${Math.ceil(product.price * 0.85)} `}<b>руб</b></span>
      </div>
    </>;
  } else {
    promoConditionTrueFalse = <span>{`${product.price} р`}</span>;
    buttonText = 'Добавить в корзину';
  }
  return ( 
    <div className={`ProductCard ${promoProductCard}`}>
      <img className='productCardImage' src={product.imagePath} alt={`Фото ${product.title}`}></img>
      <h3 className='productCardTitle'>{product.title}</h3>
      <p className='productCardInfo'><span className={promoWeight}>{`${product.weight} ${(product.type === "Напитки")? 'мл':'г'}`}</span>{promoConditionTrueFalse}</p>
      <div className='addToCardBtnBar'>
        {promoConditionTrue}
        <button className={`addToCardBtn ${addToCardBtnPromo}`}>{buttonText}</button>
      </div>
      
    </div>
  );
}

export default ProductCard;