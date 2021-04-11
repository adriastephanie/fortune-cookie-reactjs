import React,  { Component } from 'react'
import biscoito from './assets/biscoito.png';
import '../src/App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {}

  }

  render(){
    return(
      <div className="conteiner">
        <img src={biscoito} className="img"/>
        <button>Abrir biscoito</button>
        <h3 className="title">Frase aleatória</h3>
      </div>
    );



  }


}

export default App;
