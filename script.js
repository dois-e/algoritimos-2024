var jogador = "x";
function jogar(celula) {
    // verificar se a ccoluna esta vazia
    if (celula.innerHTML === "") {
        //   escreva na celula
        celula.innerHTML = jogador;
        // alternar jogada
        if (jogador === "x") {
            jogador = "o";
            celula.style.backgroundcolor = "red"

        } else {
            // se jogada for f "o"
            ; jogador = "x";
            celula.style.backgroundcolor = "blue";


        }
    }
}
function reiniciar() {
    window.location.reload();
}
// criando uma lista no javascript
let nomes = ['julio', 'martin', 'steve', 'alex', 'jonas', 'mario'];
// posicoes       0        1       2        3      4       5

alert(nomes[2]);

function gerarBatalha() {

    let nome1 = nomes[Math.floor(Math.random() * nomes.length)];

    let nome2 = nomes[Math.floor(Math.random() * nomes.length)];

    //    gera batalha de novo ,qundo nome 1 for igual ao nome2
    if (nome1 === nome2) {
        gerarBatalha();
    }
    else {


        // escreva na tela
        document.getElementById('jogadores').textContent = nome1 + " vs " + nome2;

        // imprime no console a batalha
        console.log("batalha da vez:" + nome1 + " x " + nome2);

        // entendendo logicas dos sorteios
        let numero = Math.random();
        console.log('numero sorteado: ' + numero);
        console.log('posição da lista  sem arredondar:' + numero * nomes.length);
        console.log('posição da lista arredondada: ' + Math.floor(numero * nomes.length));
        console.log('nome sorteado:' + nomes[Math.floor(numero * nomes.length)]);

    }
}
function adicionar() {
    var nome = document.getElementById('nome').value;
    nomes.push(nome);
    var nome = document.getElementById('nome').value = "";
}
function listar() {
    var listagem = document.getElementById("lista");
    listagem.innerHTML = "";
    for (var contador = 0; contador=nomes.legth; contador++) {
        var item = document.createElement("li");
        var valor =contador+"-"+ nomes (contador );
        item.innerHTML = valor;
        listagem.appendChild(item);
    }
}