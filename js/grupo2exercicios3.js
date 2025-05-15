/*
Grupo 2 - Controle de Fluxo
    3. Fazer um programa em JS que lê o preço de um produto e inflaciona esse preço em 10% se ele for menor que 100 e em 20% se ele 
    for maior ou igual a 100.
*/

const produto = parseFloat(prompt("Digite o preço de um produto:"));
console.log("\n Preço do produto:", produto);
if (produto < 100) {
    let inflacao = produto + (produto * 0.1);
    console.log("Inflação 10%:", inflacao);
}

if (produto >= 100) {
    let inflacao = produto + (produto * 0.2);
    console.log("Inflação 20%:", inflacao); 
}