import React, { Component } from 'react'

// Agora utilizaremos states ao invés de props
// Comandos com state são conhecidos como StateFull e os sem state são StateLess
// Diferença: as pros são estáticas e as states são dinâmicas (mudam de valor)
// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       nome: "Matheus",
//       contador: 0
//     };

//     this.aumentar = this.aumentar.bind(this);
//     this.diminuir = this.diminuir.bind(this);
//   }

//   aumentar(){
//     let state = this.state;
//     state.contador += 1;
//     state.nome = "Jose";
//     this.setState(state);
//   }

//   diminuir(){
//     let state = this.state;
//     if(state.contador === 0){
//       alert("Não é possível diminuir mais")
//     } else {
//       state.contador -= 1;
//       this.setState(state);
//     }
//   }

//   render(){
//     return(
//       <div>
//         <h1>Contador</h1>
//         {this.state.nome}
//         <h3>
//           <button onClick={this.diminuir}>-</button>
//           {this.state.contador}
//           <button onClick={this.aumentar}>+</button>
//         </h3>
//       </div>
//     );
//   }
// }


// Trabalhando com ciclos de vida dos componentes
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  // Executa uma única vez, quando o componente é montado
  componentDidMount(){

    setInterval(()=>{
      this.setState({ hora: new Date().toLocaleTimeString()})
    }, 1000);

  }

  // Executa sempre que o componente é atualizado
  componentDidUpdate(){
    console.log('Atualizou!')
  }

  // Verifica se o componente deve ou não atualizar / Retorna True ou False
  // shouldComponentUpdate(){
  //   return false;
  // }

  // Desmonta o componete quando não mais necessário
  componentWillUnmount(){
    clearInterval(this.hora)
  }

  render(){
    return(
      <div>
        <h1>{this.state.hora}</h1>
      </div>
    )
  }

}

export default App;