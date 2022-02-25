import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Menu from './components/Menu/Menu';
import { RootState } from './store/store';
import Modal from './components/Modal/Modal'
import Header from './components/Header/Header';

function App() {
  const modal = useSelector((state: RootState) => state.modal);
  console.log(modal);

  return (
    <div className="App">
      <Header />
      <Menu />
      {(modal) ? <Modal {...modal}/> : <></>}
    </div>
  );
}

export default App;
