// variável do tipo str
// var nome = "David"; 

/*
    Comentário
    de múltiplas
    linhas
*/

// Armazena o input do usuário na variável idade (retorna sempre uma str)
// var idade = prompt("Digite sua idade: ");

// document se refere à página do navegador
// window se refere a janela em si

// Escreve no documento/página
// document.write("<h1>Aprendendo JavaScript</h1>");
// document.write("<img src='http://google.com/google.jpg' />");


// funcao entrar
/*
function entrar(){

    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');

    if(texto == '' || texto == null){
        alert('Dgite seu nome novamente')
        area.innerHTML = 'Bem vindo ... ';
    } else{
        area.innerHTML = 'Bem vindo ' +  texto;
    }
}
*/


// funcao entrar2
/*
function entrar2(nome){

    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome: ');

    area.innerHTML = nome + ' ' +  texto;
}
*/

// Arrays
// var lista = ["Teste", 2, "David", "Vitor", 5]; // cria a lista

// lista.length; // retorna o tamanho da lista
// lista[0]; // retorna o valor armazenado no índice passado como argumento ("Teste")
// lista.indexOf("David"); // retorna o índice do valor passado (2), caso passe um valor que não existe, ele devolve -1
// lista.join(" / "); // Junta a lista em uma string, passando como argumento o que estará entre cada item
// lista.pop(); // Remove o último item da lista
// lista.shift(); // Remove o primeiro item da lista
// lista.push(20) // Adiciona item a lista

// Editar um item que você não sabe o índice
// console.log(lista.indexOf(2)); // para exibir o índice no console
// lista[1] = 10; // define o novo valor para o índice encontrado

// Verifica se um item está na lista
// if(lista.indexOf("Teste") > -1){
//     alert("Esse item está na lista")
// } else {
//     alert("Item não encontrado")
// }
