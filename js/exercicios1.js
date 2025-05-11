/*
Grupo 1 - Sequências Simples
1. Fazer um programa em JS que pergunta um valor em metros e imprime o correspondente em decímetros, centímetros e milímetros.
*/

const valorMetros = parseFloat(prompt("Digite um valor em metros para converter em decímetros, centímetros e milímetros?"));

function CalcDecimetros(valorMetros) {
    return valorMetros * 10;
}

function CalcCentimetros(valorMetros) {
    return valorMetros * 100;
}

function CalcMilimetros(valorMetros) {
    return valorMetros * 1000;
}

console.log("Decímetros:", CalcDecimetros(valorMetros));
console.log("Centímetros:", CalcCentimetros(valorMetros));
console.log("Milímetros:", CalcMilimetros(valorMetros));