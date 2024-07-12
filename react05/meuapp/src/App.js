import React, { Component } from 'react';

// Manipulando formulários parte 1
// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       email: "",
//       senha: "",
//       sexo: ""
//     }

//     this.trocaEmail = this.trocaEmail.bind(this);
//     this.trocaSexo = this.trocaSexo.bind(this);
//   }

//   trocaEmail(e){
//     let valorDigitado = e.target.value;
//     this.setState({email: valorDigitado})
//   }

//   trocaSexo(e){
//     this.setState({sexo: e.target.value})
//   }

//   render(){
//     return(
//       <div>
//         <h2>Login</h2>
//         Email:
//         <input type="email" name="email" value={this.state.email} 
//                 onChange={this.trocaEmail} />
//         <br/>
//         Senha:
//         <input type="password" name="senha" value={this.state.senha}
//                 onChange={(a) => this.setState({senha: a.target.value})}/>
//         <br/>
//         Sexo:
//         <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
//           <option value="masculino" >Masculino</option>
//           <option value="feminino" >Feminino</option>
//         </select>
//         <div>
//           <h3>{this.state.email}</h3>
//           <h3>{this.state.senha}</h3>
//           <h3>{this.state.sexo}</h3>
//         </div>
//       </div>
//     )
//   }
// }

// Praticando formulários
// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       nome: "",
//       email: "",
//       senha: "",
//       erro: ""
//     }

//     this.cadastrar = this.cadastrar.bind(this);
//   }

//   cadastrar(e){
//     const {nome, email, senha, erro} = this.state;

//     if(nome !== "" && email !== "" && senha !== ""){
//       alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
//     } else {
//       this.setState({erro: "Preencha todos os campos!"});
//     }

//     e.preventDefault(); // Faz com que a página não seja atualizada
//   }

//   render(){
//     return(
//       <div>
//         <h1>Novo Usuário</h1>
//         {this.state.erro && <p>{this.state.erro}</p>}
//         <form onSubmit={this.cadastrar}>
//           <label>Nome:</label>
//           <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} /> <br/>
//           <label>Email:</label>
//           <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} /> <br/>
//           <label>Senha:</label>
//           <input type="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} /> <br/>
//           <button type='submit'>Cadastrar</button>
//         </form>
//       </div>
//     );
//   }
// }

// Manipulando formulários parte 2
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      form: {
        nome: "Matheus",
        email: "matheus@gmail.com",
        senha: "1234",
        sexo: "masculino"
      }
    }

    this.dadosForm = this.dadosForm.bind(this)
  }

  dadosForm(e){
    let form = this.state.form;

    form[e.target.name] = e.target.value;
    this.setState({form: form})  
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        Nome:
        <input type="text" name="nome" value={this.state.form.nome}
                onChange={this.dadosForm} /> <br/>
        Email:
        <input type="email" name="email" value={this.state.form.email} 
                onChange={this.dadosForm}/> <br/>
        Senha:
        <input type="password" name="senha" value={this.state.form.senha}
                onChange={this.dadosForm} /> <br/>
        Sexo:
        <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
          <option calue="masculino">Masculino</option>
          <option calue="feminino">Feminino</option>
        </select>

        <div>
          <h3>{this.state.form.nome}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    )
  }

}

export default App;
