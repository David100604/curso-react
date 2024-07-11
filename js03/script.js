// Temporização

function acao(){
    document.write("Executando...<br>");
}


//Executa de tempo em tempo
var timer = setInterval(acao, 1000); // função a ser executada e tempo de intervalo entre execuções

// clearInterval(timer) // para a execução do interval

// executa a função uma única vez
// setTimeout(acao, 3000); // função, tempo de espera antes da execução