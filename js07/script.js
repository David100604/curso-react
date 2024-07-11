
// function adicionar(...numeros){
//     // essa função passda dentro do reduce, é uma função anônima
//     let total = numeros.reduce(function(total, proximo){
//         return total + proximo;
//     });
//     console.log(total);
// }

// Podemos reduzir ainda mais o código, utilizando a função anônima de outra forma
// function adicionar(...numeros){
//     let total = numeros.reduce((total, proximo) => {
//         return total + proximo;
//     });

//     console.log(total);
// }

// Ainda podemos reduzir ainda mais mantendo o mesmo funcionamento, porém dessa forma você não consegue definir
// variáveis dentro da função anônima
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => total + proximo);

    console.log(total);
}

adicionar(1, 2, 3, 4, 5)