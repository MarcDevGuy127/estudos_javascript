/*
Grupo 1 - Sequências Simples
5. Fazer um programa em JS que solicite 2 números e informe:
        a) A soma dos números;
        b) O produto do primeiro número pelo quadrado do segundo;
        c) O quadrado do primeiro número;
        d) A raiz quadrada da soma dos quadrados;
        e) O seno da diferença do primeiro.
*/
function executarGrupo1Exercicio5() { //funcao para botao

    const pNum = parseFloat(prompt("Digite um número:"));
    const sNum = parseFloat(prompt("Digite um outro número:"));

    function calculaProduto(a, b) {
        let resultado = a * Math.pow(b, 2);
        return resultado;
    }

    function somaQuadrados(a, b) {
        let resultado = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        return resultado;
    }

    function senoDiferenca(a, b) {
        let resultado = Math.sin(a - b);
        return resultado;
    }

    console.log(`${pNum} ${sNum}`);
    console.log(`a) ${pNum + sNum}`);
    console.log(`b) ${calculaProduto(pNum, sNum)}`);
    console.log(`c) ${Math.pow(pNum, 2)}`);
    console.log(`d) ${somaQuadrados(pNum, sNum)}`);
    console.log(`e) ${senoDiferenca(pNum, sNum)}`);
}