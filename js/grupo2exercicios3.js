/*
Grupo 2 - Controle de Fluxo
    3. Fazer um programa em JS que lê o preço de um produto e inflaciona esse preço em 10% se ele for menor que 100 e em 20% se ele 
    for maior ou igual a 100.
*/

const produto = parseFloat(prompt("Digite o preço de um produto:"));

if (produto < 100) {
    let valorInflado = produto * 0.1;
    let inflacao = produto + valorInflado;
    console.log("Inflação 10%:", inflacao);
}

if (produto >= 100) {
    let valorInflado = produto * 0.2;
    let inflacao = produto + valorInflado;
    console.log("Inflação 20%:", inflacao); 
}