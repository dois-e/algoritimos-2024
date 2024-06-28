let num1;
let num2;
let total;

function entrada(){

// amazena nas variaveis os valores do input
num1 = document.getElementById("n1").value;
num2 = document.getElementById("n2").value;

// conversão
num1 = parseFloat(num1)
num2 = parseFloat(num2)
}

function somar(){
    entrada();
    // calcular e exibir na tela
    total = document.getElementById("resultado");
    total.innerHTML = num1 + num2;
}
function subtrair(){
   entrada();
    // calcular e exibir na tela
    total = document.getElementById("resultado");
    total.innerHTML = num1 - num2;
}
function multiplicar(){
   entrada()
    // calcular e exibir na tela
    total = document.getElementById("resultado");
    total.innerHTML = num1 * num2;
}
function dividir(){
    entrada()
     // calcular e exibir na tela
     total = document.getElementById("resultado");
     total.innerHTML = num1 / num2;
 }

function limpar(){
     total = document.getElementById("resultado")
     total.innerHTML = " ";
     document.getElementById("n1").value="";
     document.getElementById("n2").value="";
}