/*
Grupo 3 - Funções
    3. Dado que podemos calcular ex por:
    ex = 1 + x + x²/2! + x³/3! + ...
*/

function executarGrupo3Exercicio3() {
    function funcFatorial(x) {
        if (x === 0 || x === 1) {
            return 1;
        }
        return x * funcFatorial(x - 1);
    }

    function funcFormula(x) {
        let resultado = 0;
        for (let i = 0; i < 10; i++) {
            resultado += Math.pow(x, i) / funcFatorial(i);
        }
        return resultado;
    }

    const numero = parseFloat(prompt("Digite um número para calcular e^x:"));
    const resultado = funcFormula(numero);
    alert(`e^${numero} ≈ ${resultado}`);

    // function funcaoFatorial(numero) {
    //     let fatorial = 1;
    //     for (let i = 2; i <= numero; i++) {
    //         fatorial *= i;
    //     }
    //     return fatorial;
    // }

    // function funcaoCalcula(valor) {
    //     let y;
    //     for (let i = 0; i < 10; i++) {
    //         resultado[i] = Math.pow(valor, y) / funcaoFatorial(i);
    //         y++;
    //         alert(`${funcaoCalcula(valor)}`);
    //     }
    //     return resultado[i];
    // }

    // const valor = parseFloat(prompt("Digite um valor númerico para a fórmula = ex = 1 + x + x²/2! + x³/3! + ...:"));
    // alert(`${funcaoCalcula(valor)}: ${resultado[i]}`);
}