import React from 'react';
import { useSelector } from 'react-redux';
import Menu from './components/Menu/Menu';
import { RootState } from './store/store';
import Modal from './components/Modal/Modal'

function App() {
  const modal = useSelector((state: RootState) => state.modal);

  return (
    <div className="App">
      <Menu />
      {(modal) ? <Modal {...modal}/> : <></>}
    </div>
  );
}

export default App;
