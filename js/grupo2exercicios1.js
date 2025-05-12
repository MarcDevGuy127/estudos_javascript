/*
Grupo 2 - Controle de Fluxo
    1. Faça um programa em JS que lê dois valores e imprime:
    - Se o primeiro valor for menor que o segundo, a lista de valores do primeiro até o segundo.
    - Se o primeiro valor for maior que o segundo, a lista de valores do segundo até o primeiro em ordem decrescente.
    - Se ambos forem iguais, a mensagem "valores iguais".
*/

var pValor = parseInt(prompt("Digite um número:"));
var sValor = parseInt(prompt("Digite um outro número:"));

if (pValor < sValor) {
    for (let i = 0; i <= sValor; i++) {
        console.log(i);
    }
} else if (pValor > sValor) {
    for (let i = pValor; i >= sValor; i--) {
        console.log(i);
    }
} else {
    console.log("Esses valores são iguais.");
}