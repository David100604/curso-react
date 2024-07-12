import React, { Component } from 'react';
import Feed from './components/Feed'


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      // status: true
      // Trabalhando com listas
      feed:[
        {id: 1, username: 'Matheus', curtidas:10, comentarios:2},
        {id: 2, username: 'Lucas', curtidas:120, comentarios:24},
        {id: 3, username: 'Pedro', curtidas:30, comentarios:7},
        {id: 4, username: 'Ricardo', curtidas:1, comentarios:0},
      ]
    };

    // this.entrar = this.entrar.bind(this);
    // this.sair = this.sair.bind(this);
  }

  // entrar(){
  //   this.setState({status: true});
  // }

  // sair(){
  //   this.setState({status: false});
  // }

  // Renderização Condicional
  render(){
    return(
      <div>
        {/* 
        Compara a igualdade de valor e renderiza o que for passado dentro da
        comparação caso o valor de estado seja 1 ou 2 por exemplo.
        { this.state.status === 1 &&
          <h1>Bem-vindo ao sistema!</h1>
        }
        */}

        {/* 
        Verifica se o status é true
        o : representa o else
        */}
        {/* {this.state.status ? (
        <div>
          <h2>Bem-vindo ao sistema</h2>
          <button onClick={this.sair}>Sair</button>
        </div>
        ) :  (
        <div>
          <h2>Olá Visitante, faça o login!</h2>
          <button onClick={this.entrar} >Logar</button>
        </div>
        )} */}

        {/* Percorre cada item da lista */}
        {this.state.feed.map((item) => {
          return(
            <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
          );
        })}

      </div>
    )
  }
}

export default App;