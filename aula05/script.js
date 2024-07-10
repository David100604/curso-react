// SPREAD OPERATOR

// let primeiros = [1, 2, 3]
// console.log(primeiros)

// let numeros = [...primeiros, 4, 5, 6] // adiciona os valores da outra lista antes dos novos itens
// console.log(numeros) // saída = [1, 2, 3, 4, 5, 6]

// let numeros2 = [primeiros, 4, 5, 6] // adiciona o array
// console.log(numeros2) // saída = [Array(3), 4, 5, 6]

// Exemplo com objeto

// let pessoa = {
//     nome: "Matheus",
//     idade: 45,
//     cargo: "Programador"
// }
// console.log(pessoa) // saída = {nome: 'Matheus', idade: 45, cargo: 'Programador'}

// let novaPessoa = {
//     ...pessoa,
//     anotAtual: 2050,
//     cidade: "Vitória"
// }
// console.log(novaPessoa) // saída = {nome: 'Matheus', idade: 45, cargo: 'Programador', anotAtual: 2050, cidade: 'Vitória'}

function cadastroPessoa(info){
    let novosDados={
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '71428129'
    }
    return novosDados;
}

console.log(cadastroPessoa({nome: "Matheus", sobrenome: "Fraga", anoInicio: 2045}))