/*
Grupo 1 - Sequências Simples
1. Fazer um programa em JS que pergunta um valor em metros e imprime o correspondente em decímetros, centímetros e milímetros.
*/

const valorMetros = parseFloat(prompt("Digite um valor em metros para converter em decímetros, centímetros e milímetros?"));

function CalcDecimetros(valorMetros) {
    var decimetros = valorMetros * 10; 
    return decimetros;
}

function CalcCentimetros(valorMetros) {
    var centimetros = valorMetros * 100;
    return centimetros;
}

function CalcMilimetros(valorMetros) {
    var milimetros =  valorMetros * 1000;
    return milimetros;
}

console.log("Decímetros:", CalcDecimetros(valorMetros));
console.log("Centímetros:", CalcCentimetros(valorMetros));
console.log("Milímetros:", CalcMilimetros(valorMetros));