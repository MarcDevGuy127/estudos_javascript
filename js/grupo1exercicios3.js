/*
Grupo 1 - Sequências Simples
3. Fazer um programa JS que solicita um número decimal e imprime o correspondente em hexa e octal.
*/

const valorDecimal = parseFloat(prompt("Digite um valor em decimal:"));

if (valorDecimal % 1 == 0) {
    console.log(`Hexadecimal: ${valorDecimal.toString(16)}`);
    console.log(`Octal: ${valorDecimal.toString(8)}`);
} else {
    alert(`O valor ${valorDecimal} não é decimal!`); //alert não possui campo de preenchimento, muito util!
}