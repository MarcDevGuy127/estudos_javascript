/*
Grupo 1 - Sequências Simples
5. Fazer um programa em JS que solicite 2 números e informe:
        a) A soma dos números;
        b) O produto do primeiro número pelo quadrado do segundo;
        c) O quadrado do primeiro número;
        d) A raiz quadrada da soma dos quadrados;
        e) O seno da diferença do primeiro.
*/

const pNum = parseFloat(prompt("Digite um número:"));
const sNum = parseFloat(prompt("Digite um outro número:"));

//console.log(`${pNum} + ${pNum}: ${pNum+sNum}`);
console.log(`a) ${pNum} + ${sNum}:`, pNum+sNum);
console.log(`b) ${pNum * Math.pow(sNum, 2)}`);
console.log(`c) ${Math.pow(pNum, 2)}`);
console.log(`d) ${Math.sqrt(Math.pow(pNum, 2) + Math.pow(sNum, 2))}`);
console.log(`e) ${Math.sin(pNum - sNum)}`);