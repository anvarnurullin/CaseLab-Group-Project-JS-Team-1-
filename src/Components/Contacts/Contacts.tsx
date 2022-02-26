import React from 'react';
import Branches from './Branches';
import Map from './Map';
import './Contacts.css';

function Contacts() {

  let branchesList = () => {
    return (
      <div>
        {Branches.slice(1).map(i => (
          <div>
            <p>{i.filialTitle}</p>
            <ul>
              <li>Тел: {i.phone}</li>
              <li>Адрес: {i.adress}</li>
            </ul>
          </div>
        )
        )}
      </div>
    );
  };

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
          <div>{branchesList()}</div>
        </div>
        <div className="ContactsMail">
          <p>Ваши пожелания и предложения пишите сюда: {Branches[0].email}</p>
        </div>
        <div className="ContactsMap">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
