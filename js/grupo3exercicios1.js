/*
Grupo 3 - Funções
    Fazer uma função que calcula a enésima potência de uma variável real x:
    f(x, n) = x
*/

function executarGrupo3Exercicio1() { //funcao para botao

    const x = parseFloat(prompt("Digite um valor real:"));
    const n = parseInt(prompt("Digite a potência:"));
    alert(`${x}^${n} = ${Math.pow(x, n)}`);
}