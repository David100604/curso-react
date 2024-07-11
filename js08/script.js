
// includes
// endsWith
// startsWith

let nomes = ["Matheus", "Lucas", "João"]

// Verifica se um valor está presente na lista, retorna true ou false
console.log(nomes.includes("Lucas"))

// Também verifica se um pedaço de texto está presente em uma string
let nome = "David"
console.log(nome.includes("vi"))

// Verifica se uma string começa com o pedaço de texto passado para função
console.log(nome.startsWith("Da"))

// Verifica se uma string termina com o pedaço de texto passado para função
console.log(nome.endsWith("vid"))


// some
// every

// Verifica se tem pelo menos um item da lista que satifaça a condição
console.log(nomes.some(nome => nome === "Matheus"));
console.log(nomes.some(nome => nome === "Pedro"));

let objetoNomes = [
    {nome: "Matheus", idade:18},
    {nome: "João", idade:25},
    {nome: "Lucas", idade:15},
]

// Verifica se todos os itens da lista satisfazem a condição
console.log(objetoNomes.every(nome => nome.idade >= 18));

if(objetoNomes.every(nome => nome.idade >= 18)){
    console.log("Todos são maiores de 18.");
} else {
    console.log("Não são todos maiores de 18.")
}


