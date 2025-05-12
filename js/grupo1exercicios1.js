/*
Grupo 1 - Sequências Simples
1. Fazer um programa em JS que pergunta um valor em metros e imprime o correspondente em decímetros, centímetros e milímetros.
*/

//const armazena valores fixos
const valorMetros = parseFloat(prompt("Digite um valor em metros para converter em decímetros, centímetros e milímetros?"));

function CalcDecimetros(valorMetros) {
    let decimetros = valorMetros * 10; 
    return decimetros;
}

function CalcCentimetros(valorMetros) {
    let centimetros = valorMetros * 100;
    return centimetros;
}

function CalcMilimetros(valorMetros) {
    //o escolpo de var é maior que o de let;
    //o alcance de let é limitado pelo seu bloco. Enquanto var pode ultrapassar todos os blocos do código.
    let milimetros =  valorMetros * 1000;
    return milimetros;
}

console.log("Decímetros:", CalcDecimetros(valorMetros));
console.log("Centímetros:", CalcCentimetros(valorMetros));
console.log("Milímetros:", CalcMilimetros(valorMetros));