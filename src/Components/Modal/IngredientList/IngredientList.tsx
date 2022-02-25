import React, {useState} from "react";
import {IngredientsForProduct} from '../../../typescript/main';


function IngredientList({ingredient}:{ingredient:IngredientsForProduct}) {
  const [ingredientQuantity, setIngredQuantity] = useState(ingredient.ingredQuantity);
  if(isNaN(ingredientQuantity)) {
    setIngredQuantity(ingredient.ingredQuantity)
  }
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    return (+event.target.value < 0) ? setIngredQuantity(0) : (+event.target.value > 0) ? setIngredQuantity(5) : setIngredQuantity(+event.target.value);
  }
  return ( 
    <>
      <div className='ingrediantTitle'>{ingredient.ingredTitle}</div>
      <div className='ingrediantLine'>
        <button className='removeIngred' onClick={() => (ingredientQuantity > 0) ? setIngredQuantity(ingredientQuantity - 1) : setIngredQuantity(0)}></button>
        <input value={ingredientQuantity} onChange={event => handleInput(event)}></input>
        <button className='addIngred' onClick={() => (ingredientQuantity < 5) ? setIngredQuantity(ingredientQuantity + 1) : setIngredQuantity(5)}></button>
      </div>
    </>
  );
}

export default IngredientList;