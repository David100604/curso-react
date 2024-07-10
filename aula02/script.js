
// LOOPS

// while = enquanto.

// x = 0;

// while(x < 10){
//     document.write("<br/> O valor do X é: " + x);

//     x++;
// }


// document.write("<br><br><br> O X está valendo: " + x + "<br><br>")

// // for = para

// for(a = 0; a < x; a++){
//     document.write("<br/> O valor do A é: " + a);
// }

// Também é possível fazer um for que percorre os valores de uma lista
var lista = [1, 2, 3]
for(var i in lista){
    console.log(lista[i]);
}

// MENU
// document.write("<br>Escolha seu pedido: <br>")
// document.write("<br>0 - Sorvete | 1 Suco <br>")
// document.write("<br>2 - Coca | 3 Água <br><br>")

// SWITCH

// function pedir(){
//     x = prompt("O que deseja pedir? ");

//     switch(x){
//         case "0":
//             alert("Você pediu um sorvete :)");
//             break;
//         case "1": 
//             alert("Você pediu um suco :)");
//             break;
//         case "2": 
//             alert("Você pediu uma coca :)");
//             break;
//         case "3": 
//             alert("Você pediu uma água :)");
//             break;
//         default:
//             alert("Não temos essa opção :(");
//             break;
//     }
// }