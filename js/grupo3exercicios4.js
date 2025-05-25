/*
Grupo 3 - Funções
    4. Fazer um programa em JS que lê um valor para x e calcula o valor de ex. O valor deve ser calculado enquanto o termo calculado for maior que 10-6.
*/
function executarGrupo3Exercicio4() { //funcao para botao

    let valor = parseFloat(prompt("Digite um valor para calcular e^x:"));

    while (valor > Math.pow(10, -6)) {
        const x = parseFloat(prompt("Digite um expoente:"));
        alert(Math.pow(valor, x));
        valor = parseFloat(prompt("Digite um novo valor para calcular e^x:"));
    }

    alert("Valor menor que 10^-6");
}