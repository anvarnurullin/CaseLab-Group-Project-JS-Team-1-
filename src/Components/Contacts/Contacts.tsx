import React from "react";
import { Filial } from "../../typescript/main";
import Map from "./Map";
import "./Contacts.css";

function Contacts() {
  let data: Filial = {
    idFilial: 1,
    filialTitle: "Филиал №1",
    lat: "12.4",
    lon: "43",
    phone: "8394859",
    adress: "Никольская ул., 10",
    email: "bestshaurma@yandex.com",
  };

  // let branches = () => {
  //   for (let branch of data) {
  //     return (
  //       <div>
  //         <p>{branch.filialTitle}</p>
  //             <ul>
  //              <li>Тел:{branch.phone}</li>
  //              <li>Адрес:{branch.adress}</li>
  //             </ul>
  //       </div>
  //     );
  //   }
  // };

  return (
    <div className="Contacts">
      <div className="ContactsWrapper">
        <div className="MainBranch">
          <p>
            Уважаемые гости, вы можете оформить заказ и забрать его по адресу
            ниже:
          </p>
          <p>Шаурма № 1 на Комсомольской:</p>
          <ul>
            <li>Тел.: + 996 705 188 955</li>
            <li>Адрес: Комсомольский проспект, 28</li>
          </ul>
        </div>
        <div className="BranchesList">
          <p>
            Уважаемые гости, скоро мы сможем вас порадовать вкуснейшей шаурмой
            по адресам:
          </p>
          {/* <div>{branches()}</div> */}
          <p>Шаурма № 1 на Новокузнецкой:</p>
          <ul>
            <li>Тел.: + 996 705 188 955</li>
            <li>Адрес: Пятнцкая ул., 24</li>
          </ul>
          <p>Шаурма № 1 на Лубянке:</p>
          <ul>
            <li>Тел.: + 996 705 188 955</li>
            <li>Адрес: Никольская ул., 10</li>
          </ul>
        </div>
        <div className="ContactsMail">
          <p>Ваши пожелания и предложения пишите сюда: {data.email}</p>
        </div>
        <div className="ContactsMap">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
