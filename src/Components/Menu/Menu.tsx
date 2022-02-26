import React from 'react';
import MenuSection from './MenuSection/MenuSection';
import './Menu.css'

function Menu() {
  const productArray = [
    {
      idProduct: 1,
      title: 'Шаурма 4 сыра',
      weight: '390',
      price: '299',
      type: 'шаурма',
      promo: true,
      imagePath: 'https://s3-alpha-sig.figma.com/img/0262/9d17/642d15db4e22823375bb3f5cc6c1f6d3?Expires=1646611200&Signature=a8t6k1WrzYQzu-E93ety-UDzdxvmpEjn3uRdM71VvpDbsarHSuDaPu2axtp-42nMO43PW9Ev7ULpDTYtBpt50Z3AH3qslo1a4tybBpBYrR649TjIhaW4gDyDN7qQhfprnNumQwDTtEfqOAKteWlV40KhZuDLIVEyjSYEwev~wWvyrAKBqDMaNoRqjCGBw55wg-CVXQ6KcPgu6~rHPCGwMAEuXpZ0PVpMUHdvryZkXfvSL1UwV-mnOVu8QwkwTU0aKgvKyMi6ZcwZIFXEu2VanmOKU4X7wh8i~NFVn0wdvevEAju1izFkEapXdTRh8guf~jgHIHEg42sGeoiArlZR0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: [
        {
          idIngredient: 1,
          ingredTitle: "Сыр  Моцарелла",
          ingredQuantity: 2,
          ingredPrice: '25'
        },
        {
          idIngredient: 2, 
          ingredTitle: "Сыр Сулугуни",
          ingredQuantity: 1,
          ingredPrice: '10'
        },
        {
          idIngredient: 3,
          ingredTitle: "Кунжутный соус",
          ingredQuantity: 1,
          ingredPrice: '50'
        }
      ]
    },
    {
      idProduct: 2,
      title: 'Пепси',
      weight: '0.33',
      price: '70',
      type: 'напитки',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/0262/9d17/642d15db4e22823375bb3f5cc6c1f6d3?Expires=1646611200&Signature=a8t6k1WrzYQzu-E93ety-UDzdxvmpEjn3uRdM71VvpDbsarHSuDaPu2axtp-42nMO43PW9Ev7ULpDTYtBpt50Z3AH3qslo1a4tybBpBYrR649TjIhaW4gDyDN7qQhfprnNumQwDTtEfqOAKteWlV40KhZuDLIVEyjSYEwev~wWvyrAKBqDMaNoRqjCGBw55wg-CVXQ6KcPgu6~rHPCGwMAEuXpZ0PVpMUHdvryZkXfvSL1UwV-mnOVu8QwkwTU0aKgvKyMi6ZcwZIFXEu2VanmOKU4X7wh8i~NFVn0wdvevEAju1izFkEapXdTRh8guf~jgHIHEg42sGeoiArlZR0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: []
    },
    {
      idProduct: 3,
      title: 'Пепси Zero',
      weight: '0.33',
      price: '120',
      type: 'напитки',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/0262/9d17/642d15db4e22823375bb3f5cc6c1f6d3?Expires=1646611200&Signature=a8t6k1WrzYQzu-E93ety-UDzdxvmpEjn3uRdM71VvpDbsarHSuDaPu2axtp-42nMO43PW9Ev7ULpDTYtBpt50Z3AH3qslo1a4tybBpBYrR649TjIhaW4gDyDN7qQhfprnNumQwDTtEfqOAKteWlV40KhZuDLIVEyjSYEwev~wWvyrAKBqDMaNoRqjCGBw55wg-CVXQ6KcPgu6~rHPCGwMAEuXpZ0PVpMUHdvryZkXfvSL1UwV-mnOVu8QwkwTU0aKgvKyMi6ZcwZIFXEu2VanmOKU4X7wh8i~NFVn0wdvevEAju1izFkEapXdTRh8guf~jgHIHEg42sGeoiArlZR0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: []
    },
  ]
  const sections = ["Шаурма", "Напитки", "Соусы"];
  const setSection = sections.map(function(section, index){
    const filterProduct = productArray.filter(type => type.type === section.toLowerCase())
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