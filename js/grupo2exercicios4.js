/*
Grupo 2 - Controle de Fluxo
    4. Fazer um programa que lê um valor, um operador (+, -, *, /) e outro valor 
    e imprime o resultado da expressão: <valor 1> <operador> <valor 2>
*/

//for (let i = 0; i < 10; i++) {
for (let i = 0; i < Infinity; i++) {
    const operador = prompt("Calculadora \n Escolha um operador (+, -, *, /) ou Q:");

    if (operador == "Q") {
        alert("Você saiu da calculadora!");
        break;
    }
    if (operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/") {
        alert("Essa operação é inválida!");
        break;
    }

    const valor1 = parseFloat(prompt("Digite um valor:"));
    const valor2 = parseFloat(prompt("Digite um outro valor:"));
    let resultado;

    switch (operador) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
        default:
            alert("Operador não reconhecido!");
            break;
    }
    alert(`${valor1} ${operador} ${valor2} = ${resultado}`);
}