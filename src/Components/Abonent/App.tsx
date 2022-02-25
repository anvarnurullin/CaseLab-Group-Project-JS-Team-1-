import React, { Component } from 'react';
import './App.css';
import Todo from './Todo/Todo';

interface IAppState{
  name:string
  
}


class App extends Component<any, IAppState> {

  constructor(props: any){
    super(props)
    this.state = {
      name: ""
    }

    this.changeMyInput = this.changeMyInput.bind(this)
  }

  changeMyInput(e: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      ...this.state,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  render() {
    return (
      <form className='wrap'>
      <fieldset className="field-area1">
      <h1><span>Ваши данные:</span></h1>
      <fieldset className="field-area">
        <label htmlFor="name"></label>
        <input type="text" placeholder="Имя" id="name"/>
     </fieldset>
     <fieldset className="field-area">
      <label htmlFor="telephone"></label>
        <input type="telephone" placeholder="Телефон" id="telephone"/>
    
    </fieldset>
      <button type="submit">Оформить заказ</button>
      </fieldset>
    </form>
      
    );
  }
}

export default App;
