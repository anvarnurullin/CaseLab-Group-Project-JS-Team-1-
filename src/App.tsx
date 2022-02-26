import React from "react";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Modal from './components/Modal/Modal';

function App() {
  let pageContent;
  const menuValue = useSelector((state: RootState) => state.menu);
  const modal = useSelector((state: RootState) => state.showModal);
  const modalValue = useSelector((state: RootState) => state.modal);

  switch (menuValue) {
    case "main":
      pageContent = <Main></Main>;
      break;
    case "menu":
      pageContent = <Menu></Menu>;
      break;
    case "contacts":
      pageContent = <Contacts></Contacts>;
      break;
    case "cart":
      pageContent = <Cart></Cart>;
      break;
    default:
      pageContent = <Main></Main>;
  }
  return (
    <div className="App">
      <Header></Header>
      {pageContent}
      <Footer></Footer>
      {(modal) ? <Modal {...modalValue} /> : <></>}
    </div>
  );
}

export default App;
