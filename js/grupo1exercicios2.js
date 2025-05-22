/*
Grupo 1 - Sequências Simples
2. Fazer um programa em JS que imprime uma tabela com a tabuada de 1 a 9.
*/

function executarGrupo1Exercicio2() { //funcao para botao

    const valorTabuada = parseFloat(prompt("Digite um valor para imprimir tabuada:"));
    console.log(`Tabuada de ${valorTabuada} \n`);

    for (let i = 1; i <= 9; i++) {
        let resultadoMultiplicacao = valorTabuada * i;
        console.log(`${valorTabuada} * ${i} = ${resultadoMultiplicacao} \n`);
    }
}