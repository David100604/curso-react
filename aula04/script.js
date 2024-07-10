
// define a variável nome com o valor da chave nome no armazenamento local
var nome = "";

if( typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome: ");
}

nome = localStorage.nome;

document.getElementById("nome").innerHTML = nome;

// a declaração do sessionStorage funciona exatamente da mesma forma, mas lembre que ele perde o armazenamento ao 
// fechar o navegador