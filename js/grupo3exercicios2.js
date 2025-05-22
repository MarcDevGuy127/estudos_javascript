/*
Grupo 3 - Funções
    Fazer uma função que calcula o fatorial de um número. Implementar uma
    versão recursiva e uma versão com laço.
*/

function executarGrupo3Exercicio2() { //funcao para botao

    function fatorialRecursivo(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        }
        return numero * fatorialRecursivo(numero - 1);
    }

    function fatorialLaco(numero) {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }

    const numero = parseFloat(prompt("Digite um número para calcular fatorial:"));
    alert(`Fatorial(Recursivo) de ${numero}!: ${fatorialRecursivo(numero)} \n Fatorial(Laço) de ${numero}!: ${fatorialLaco(numero)}`);
}