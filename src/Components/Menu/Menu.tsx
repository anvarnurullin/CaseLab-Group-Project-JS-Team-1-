import React, {useEffect} from 'react';
import MenuSection from './MenuSection/MenuSection';
import './Menu.css'
import { Product } from '../../typescript/main';

function Menu({productArray}: {productArray: Product[]}) {

  const sections = ["Шаурма", "Напитки", "Соусы"];
  const setSection = sections.map(function(section, index){
    const filterProduct = productArray.filter(type => type.type === section)
    return <>
      <MenuSection key={index} title={section} products={filterProduct}/>
      {(index === (sections.length - 1)) ? null : <hr></hr>}
    </>
  });
  return ( 
    <div className='Menu'>
      <h1>Меню</h1>
      {setSection}
    </div>
  );
}

export default Menu;