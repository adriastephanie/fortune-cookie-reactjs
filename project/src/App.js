import React,  { Component } from 'react'
import biscoito from './assets/biscoito.png';
import '../src/App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = ['A vida trará coisas boas se tiver paciência.', 
    'Não compense na ira o que lhe falta na razão.', 
    'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 
    'Siga os bons e aprenda com eles.', 
    'A sorte favorece a mente bem preparada.', 
    'Você é do tamanho do seu sonho.', 
    'Pare de procurar eternamente, a felicidade está mesmo aqui ao seu lado', 'O conhecimento é a única virtude e a ignorância é o único vício.'];

  }

  quebrarBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render(){
    return(
      <div className="conteiner">
        <img src={biscoito} className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebrarBiscoito}/>
        
        <h3 className="title">{this.state.textoFrase}</h3>
      </div>
    );



  }


}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.nome} Abrir biscoito</button>

      </div>
    )
  }
}

export default App;
