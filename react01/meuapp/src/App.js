import React, { Component } from 'react';

// Cria um componente que recebe propriedades e as exibe na tela
// const BemVindo = (props) => {
//   return(
//     <div>
//       <h2>Bem-vindo(a) {props.nome} </h2>
//       <h3>Tenho {props.idade} anos</h3>
//     </div>
//   )
// }


// Criação de mais de uma const, passando props de uma pra outra
// const Equipe = (props) => {
//   return(
//     <div>
//       <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}></Sobre>
//       <Social fb={props.facebook}/>
//       <hr />
//     </div>
//   )
// }

// const Sobre = (props) => {
//   return(
//     <div>
//       <h2>Olá sou o(a) {props.nome}</h2>
//       <h3>Cargo: {props.cargo}</h3>
//       <h3>Idade: {props.idade} anos</h3>
//     </div>
//   )
// }

// const Social = (props) => {
//   return(
//     <div>
//       <a href={props.fb}>Facebook </a>
//       <a href={props.fb}>LinkedIn </a>
//       <a href={props.fb}>GitHub </a>
//     </div>
//   )
// }

// Aplicando Class Component
// Primeiro adicionamos a importação do { Component } ao começo do arquivo
class Equipe extends Component{
  render(){
    return(
      <div>
        {/* Perceba que agora temos acesso diretamente as props, sem passá-las para o componente */}
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá, sou o(a) {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    );
  }
}

function App(){
  return(
    <div>
      {/* Chama a constante, passando as propriedades necessárias 
      <BemVindo nome="David" idade="20" />
      <BemVindo nome="Matheus" idade="24" /> */}

      {/*<h1>Conheça nossa equipe:</h1>
      <Equipe nome="Pedro" cargo="Programador" idade="29" 
      facebook="https://google.com"/>
      <Equipe nome="Matheus " cargo="Designer" idade="17"
      facebook="https://google.com"/> */}

      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Matheus" cargo="Programador" idade="27"/>  
    </div>
  )
}

export default App;
