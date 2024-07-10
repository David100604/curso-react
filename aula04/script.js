
// define a variável nome com o valor da chave nome no armazenamento local
// var nome = "";

// if( typeof localStorage.nome == 'undefined'){
//     localStorage.nome = prompt("Digite seu nome: ");
// }

// nome = localStorage.nome;

// document.getElementById("nome").innerHTML = nome;

// a declaração do sessionStorage funciona exatamente da mesma forma, mas lembre que ele perde o armazenamento ao 
// fechar o navegador


// DIFERENÇA ENTRE var, let e const

// var pode ser acessada globalmente, independente do escopo em que foi criada

// let só pode ser acessada dentro do escopo em que foi criada. Ex: se criar uma let dentro de um if, você só pode 
// acessá-la dentro desse if
// porém se você criar uma let fora de um escopo, você consegue acessar mesmo estando em escopos internos.
// Exemplo: quando você cria uma let no escopo global, você consegue acessar no escopo de um if, for, while, etc

// const é uma constante, ou seja, o valor não pode ser alterado, diferente de var e let


// DESCONSTRUÇÃO EM OBJETOS E ARRAYS

// Objeto
// const pessoa = {
//     nome: "David",
//     sobrenome: "Vitor",
//     idade: 20,
//     cargo: "Desenvolvedor"
// }

// console.log(pessoa)

// DESCONSTRUÇÃO

// let { nome } = pessoa; // passa o valor de nome do objeto pessoa, para variável chamada nome
// console.log(nome)

// let { sobrenome } = pessoa;
// console.log(sobrenome)

// let { idade, cargo } = pessoa; 
// console.log(idade)
// console.log(cargo)

// let { cargo:programador } = pessoa; // atribui o valor do cargo do objeto pessoa à variável programador
// console.log(programador)

// Mudar o valor de um campo, como cargo, edita somente o nome da variável, e não o valor do atributo no objeto
// Ex: se mudar o valor de idade para 18, a variável idade passará a valer 18, porém o campo idade do objeto pessoa
// continuará com o valor original (20)


// ARRAY
let nomes = ['David', 'Vitor', 10]

// DESCONSTRUÇÃO

// let { 1:segundoNome } = nomes // atribui o valor armazenado no índice 1 à variável segundoNome
// console.log(segundoNome)

// let { 0:primeiroNome, 2:idade } = nomes;
// console.log(primeiroNome)
// console.log(idade)

// atribuindo todos os valores ao mesmo tempo
let [nome, sobrenome, idade] = nomes
console.log(nome)
console.log(sobrenome)
console.log(idade)