import React, { useState, useEffect } from "react";
import {
  IngredientsForProduct,
  ingrediantList,
} from "../../../typescript/main";
import { useDispatch } from "react-redux";
import {
  increasePriceAction,
  decreasePriceAction,
} from "../../../store/cardPriceReducer";
import "./IngredientList.css";

function IngredientList({
  ingredient,
  changeIngred,
}: {
  ingredient: IngredientsForProduct;
  changeIngred: any;
}) {
  console.log(ingredient.ingredPrice, ingredient.ingredTitle);
  const [ingredientQuantity, setIngredQuantity] = useState(
    ingredient.ingredQuantity
  );
  useEffect(() => {
    if (ingredientQuantity !== ingredient.ingredQuantity) {
      changeIngred({
        ingredTitle: ingredient.ingredTitle,
        idIngredient: ingredient.idIngredient,
        newIngredQuantity: ingredientQuantity,
      });
    }
  }, [ingredientQuantity]);

  const dispatch = useDispatch();
  if (isNaN(ingredientQuantity)) {
    setIngredQuantity(ingredient.ingredQuantity);
  }
  function handleAddIngredBtn() {
    if (ingredientQuantity < 5) {
      setIngredQuantity(ingredientQuantity + 1);
      dispatch(increasePriceAction(+ingredient.ingredPrice));
    } else {
      setIngredQuantity(5);
    }
  }
  function handleRemoveIngredBtn() {
    if (ingredientQuantity > 0) {
      setIngredQuantity(ingredientQuantity - 1);
      dispatch(decreasePriceAction(+ingredient.ingredPrice));
    } else {
      setIngredQuantity(0);
    }
  }
  return (
    <div className="IngredientItem">
      <div className="ingredientTitle">{ingredient.ingredTitle}</div>
      <div className="ingredientLine">
        <button
          className="removeIngred"
          onClick={handleRemoveIngredBtn}
        ></button>
        <input
          className="IngredientInput"
          value={ingredientQuantity}
          disabled
        ></input>
        <button className="addIngred" onClick={handleAddIngredBtn}></button>
      </div>
    </div>
  );
}

export default IngredientList;
