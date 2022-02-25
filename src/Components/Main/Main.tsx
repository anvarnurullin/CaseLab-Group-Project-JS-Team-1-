import React from "react";
import "./Main.css";
import PromoSection from "./PromoSection/PromoSection";
import { useDispatch } from "react-redux";
import { setMenuAction } from "../../store/menuReducer";

function Main() {
  const dispatch = useDispatch();
  const productArray = [
    {
      idProduct: 1,
      title: "Шаурма 4 сыра",
      weight: "390",
      price: "299",
      type: "Шаурма",
      promo: true,
      imagePath:
        "https://s3-alpha-sig.figma.com/img/0262/9d17/642d15db4e22823375bb3f5cc6c1f6d3?Expires=1646611200&Signature=a8t6k1WrzYQzu-E93ety-UDzdxvmpEjn3uRdM71VvpDbsarHSuDaPu2axtp-42nMO43PW9Ev7ULpDTYtBpt50Z3AH3qslo1a4tybBpBYrR649TjIhaW4gDyDN7qQhfprnNumQwDTtEfqOAKteWlV40KhZuDLIVEyjSYEwev~wWvyrAKBqDMaNoRqjCGBw55wg-CVXQ6KcPgu6~rHPCGwMAEuXpZ0PVpMUHdvryZkXfvSL1UwV-mnOVu8QwkwTU0aKgvKyMi6ZcwZIFXEu2VanmOKU4X7wh8i~NFVn0wdvevEAju1izFkEapXdTRh8guf~jgHIHEg42sGeoiArlZR0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      ingredients: [
        {
          idIngredient: 1,
          ingredTitle: "Сыр  Моцарелла",
          ingredQuantity: 2,
          ingredPrice: "299",
        },
        {
          idIngredient: 2,
          ingredTitle: "Сыр Сулугуни",
          ingredQuantity: 1,
          ingredPrice: "299",
        },
        {
          idIngredient: 3,
          ingredTitle: "Кунжутный соус",
          ingredQuantity: 1,
          ingredPrice: "299",
        },
      ],
    },
  ];
  return (
    <section className="Main">
      <div className="welcomeSection">
        <div className="welcomeWords">
          <p>Неважно, что ты ешь шаверму, </p>
          <p>шаварму или шаурму,</p>
          <p>состав везде один и тот же,</p>
          <p>муму</p>
        </div>
        <img
          src="https://caselab-group-1.herokuapp.com/images/welcomeImage.png"
          alt="Картинка с шаурмой"
        />
      </div>
      <PromoSection
        title="Акция дня (успей полакомиться)"
        products={productArray}
      ></PromoSection>
      <div className="menuButton">
        <a onClick={() => dispatch(setMenuAction("menu"))}>Меню</a>
      </div>
      <div className="aboutUS">
        <p className="aboutUsTitle">О нас</p>
        <p className="aboutUsText">
          Кафе “Шаурма № 1” предлагает своим клиентам вкуснейшую шаурму,
          приготовленную по классическим и адаптированным к европейской
          аудитории рецептам, а также по собственным наработкам наших поваров.
          Сочное мясо и правильные соусы - это то, чем мы по праву можем
          гордиться.
        </p>
        <p className="aboutUsText">
          В своих блюдах мы используем только натуральные продукты, которые
          поставляют нам проверенные поставщики. Именно поэтому наша шаурма
          отличается свежестью, превосходным качеством и вкусом.
        </p>
      </div>
    </section>
  );
}

export default Main;
