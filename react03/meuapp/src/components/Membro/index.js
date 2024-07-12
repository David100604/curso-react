import React, { Component } from 'react';

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome:props.nome
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(nome){
        // Sempre que clicar em entrar, mudaria o nome para matheus
        // this.setState({nome: "Matheus"})
        this.setState({nome: nome}) // ao clicar em entrar, mudaria o nome para o nome passado para a função
    }

    render(){
        return(
            <div>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                {/*     
                Chamaria a função sem passar nenhum parâmetro        
                <button onClick={this.entrar}> 
                Chamaria a função passando parâmetro SEMPRE que o componente for 
                criado, o que retorna um erro pois 
                não esperaria o click no botão.
                <button onClick={this.entrar("Lucas")}> 
                */}

                {/* 
                Chama a função da maneira correta, criando uma função anônima 
                que, ao clicar no botão, chamaria a função entrar 
                */}
                <button onClick={() => this.entrar("Lucas")}>
                    Entrar
                </button>
                <button onClick={() => this.setState({ nome: 'Visitante' })}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;