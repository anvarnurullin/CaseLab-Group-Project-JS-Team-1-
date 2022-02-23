import * as React from 'react';
import { Product } from '../../typescript/main';
import './ProductCard.css'

function ProductCard({image, product}: {image:string, product:Product}) {
  let promoConditionTrue;
  let promoConditionTrueFalse;
  let promoWeight;
  let promoProductCard;
  let buttonText;
  let addToCardBtnPromo;
  if(product.promo) {
    addToCardBtnPromo = 'addToCardBtnPromo';
    promoWeight = 'promoWeight';
    promoProductCard = 'promoProductCard';
    promoConditionTrue = <>
      <div className='promoPrice'>
        <span>{`${product.price} `}<b>руб</b></span>
        <span>{`${Math.ceil(product.price * 0.85)} `}<b>руб</b></span>
      </div>
    </>;
    buttonText = 'Хочу!';
  } else {
    promoConditionTrueFalse = <span>{`${product.price} р`}</span>;
    buttonText = 'Добавить в корзину';
  }
  return ( 
    <div className={`ProductCard ${promoProductCard}`}>
      <img className='productCardImage' src={image} alt={`Фото ${product.title}`}></img>
      <h3 className='productCardTitle'>{product.title}</h3>
      <p className='productCardInfo'><span className={promoWeight}>{`${product.weight} г`}</span>{promoConditionTrueFalse}</p>
      <div className='addToCardBtnBar'>
        {promoConditionTrue}
        <button className={`addToCardBtn ${addToCardBtnPromo}`}>{buttonText}</button>
      </div>
      
    </div>
  );
}

export default ProductCard;