
// Dessa forma só seria exibido o primeiro nome, pois não indicamos para a função quantos nomes serão passados pelo usuário
// function minhaLista(nomes){
//     console.log(nomes);
// }

// para consertar, utilizamos o rest operator, que indica que podem ser passados mais de um valor
// Dessa forma, será exibido todos os valores passados para a função
// function minhaLista(...nomes){
//     console.log(nomes);
// }

// minhaLista("Matheus", "Lucas", "João")


// Exercício
// function cadastrar(usuarios, ...novosUsuarios){
//     let totalUsuarios = [...usuarios, ...novosUsuarios];
//     return console.log(totalUsuarios);
// }

// let usuarios = ["Matheus", "João"];
// let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");



// OPERAÇÕES EM ARRAYS
const lista = [1, 2, 3, 4, 5, 6];

// MAP -> Percorre cada item da lista, executando a função passada
// também é possível passar o index
const novaLista = lista.map(function(item, index){
    return item + index;
});

console.log(novaLista);

// Pega o total, iniciando em 0, e soma com o próximo item da lista, de forma que o total passa a ser valor da soma e
// continua somando até finalizar a lista
const soma = lista.reduce(function(total, proximo){
    return total + proximo;
}) 

console.log(soma)


// Encontra um item no array
const find = lista.find(function(item){
    return item === 6;
})

console.log(find)