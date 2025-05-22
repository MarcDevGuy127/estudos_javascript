/*
Grupo 2 - Controle de Fluxo
    2. Fazer um programa que imprime a tabela ASCII (código decimal, código hexa, caracter) para os códigos de 0 a 127.
*/

function executarGrupo2Exercicio2() { //funcao para botao

    console.log("Tabela ASCII");
    console.log("Dec\tHex\tChar");

    for (let i = 0; i <= 127; i++) {
        //exibe o código decimal, hexadecimal e o caractere correspondente
        console.log(i + "\t" + i.toString(16).toUpperCase() + "\t" + String.fromCharCode(i));
    }
}