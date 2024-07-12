import React, { Component } from 'react';
import cronometro from './assets/cronometro.png'
import './style.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: "INICIAR"
    };
    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = "INICIAR";
    this.setState(state);
  }

  iniciar(){

    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "INICIAR";
    } else {
      this.timer = setInterval(() => {
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = "PAUSAR";
    }

    this.setState(state);
    
  }

  render(){
    return(
      <div className='container'>
        <img src={cronometro} className='img' alt="Contorno de um cronômetro branco"/>
        <p className='timer'>{this.state.numero.toFixed(1)}</p>
        <div className='areaBtn'>
          <p className='botao' onClick={this.iniciar}>{this.state.botao}</p>
          <p className='botao' onClick={this.limpar}>LIMPAR</p>
        </div>
      </div>
    );
  }

}



export default App;
