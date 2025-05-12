/*
Grupo 1 - Sequências Simples
5. Fazer um programa em JS que solicite 2 números e informe:
        a) A soma dos números;
        b) O produto do primeiro número pelo quadrado do segundo;
        c) O quadrado do primeiro número;
        d) A raiz quadrada da soma dos quadrados;
        e) O seno da diferença do primeiro.
*/

function somaValores(a,b) {
    let resultado = a + b;
    return resultado;
}

function calculaProduto(a,b) {
    let resultado = a * Math.pow(b, 2);
    return resultado;
}

function numQuadrado(a) {
    let resultado = Math.pow(a, 2);
    return resultado;
}

function somaQuadrados(a,b) {
    let resultado = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return resultado;
}

function senoDiferenca(a,b) {
    let resultado = Math.sin(pNum - sNum);
    return resultado;
}

const pNum = parseFloat(prompt("Digite um número:"));
const sNum = parseFloat(prompt("Digite um outro número:"));

console.log(`${pNum} ${sNum}`);
console.log(`a) ${somaValores(pNum,sNum)}`);
console.log(`b) ${calculaProduto(pNum,sNum)}`);
console.log(`c) ${numQuadrado(pNum)}`);
console.log(`d) ${somaQuadrados(pNum,sNum)}`);
console.log(`e) ${senoDiferenca(pNum,sNum)}`);