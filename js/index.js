//Exercise 1 - Escreva um script que imprime "Olá, Mundo!" no console.
console.log("Hello World!");

//Exercise 2 - Declare três variáveis: uma string, um número e um booleano, e imprima seus valores.
var a = "Hello";
var b = 12;
var c = true;

console.log(a);
console.log(b); 
console.log(c);

var d = 12;
var e = 9;

console.log(d + e);

/** Testando interação com usuário
 * console.log("Teste");
let x = parseFloat(prompt("Digite um número"));
let y = parseFloat(prompt("Digite outro número"));
console.log("Soma",x + y);
 */
/**
 * usar readline para node.js e usar index.html para rodar no browser
 * const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Teste");

rl.question("Digite um número: ", (num1) => {
    rl.question("Digite outro número: ", (num2) => {
        let x = parseFloat(num1);
        let y = parseFloat(num2);
        console.log("Soma:", x + y);
        rl.close();
    });
});

 */

//Exercise 3 - Crie um programa que recebe dois números e exibe a soma, subtração, multiplicação e divisão deles.
const x = parseFloat(prompt("Digite um número"));
const y = parseFloat(prompt("Digite outro número"));

function FuncSoma(x, y) {
    return x + y;
}

function FuncSubtracao(x, y) {
    return x - y;
}

function FuncDivisao(x, y) {
    return x / y;
}

function FuncMultiplicacao(x, y) {  
    return x * y;
}

console.log("Soma:",FuncSoma(x,y));
console.log("Subtração:",FuncSubtracao(x,y));
console.log("Divisão:",FuncDivisao(x,y));
console.log("Multiplicação:",FuncMultiplicacao(x,y));

//Exercise 4 - Peça um número ao usuário e informe se ele é par ou ímpar.
let numero = parseFloat(prompt("Digite um número para saber se é par ou ímpar"));
if (numero % 2 == 0) {
   console.log("Esse número é par!");
   } else {
    console.log("Esse número não é par!");
}

//Exercise 5 - Escreva um programa que converte uma temperatura de Celsius para Fahrenheit.
let celsius = parseFloat(prompt("Digite um valor de temperatura em °C"));

function FuncaoCalculaFahrenheit(celsius) {
    var fahrenheit = (celsius*1.8)+32;
    return fahrenheit;
}
console.log("Convertendo para °F é ", FuncaoCalculaFahrenheit(celsius));

//Exercise 6 - Solicite um número e exiba a tabuada dele de 1 a 10.
const numTabuada = parseFloat(prompt("Digite um número para calcular tabuada:"));
let i = 0;
while (i++ < 10) { //incremento com contador
    var resultado = numTabuada * i;
    console.log(`${numTabuada} * ${i} = ${resultado}`);
}

//Exercise 7 - Crie uma função que recebe uma string e retorna a quantidade de vogais (a, e, i, o, u) nela.
const texto = prompt("Escreva uma palavra:");
let contadorDeVogais = 0;
for (let i = 0; i < texto.length; i++) {
    if ("aeiou".includes(texto[i].toLowerCase())) {//revisar
        contadorDeVogais++;
    }
}
console.log(`Número de vogais: ${contadorDeVogais}`);

//Exercise 8 - Faça uma função que recebe uma palavra e retorna a mesma palavra invertida.
const palavra = prompt("Escreva uma palavra para inverter");
let inverso = "";

function FuncaoInverter() {
    for (let i = palavra.length - 1; i >= 0; i--) { // Começa no último índice
        inverso += palavra[i]; // Adiciona o caractere ao resultado
    }
    return inverso;
}

console.log(FuncaoInverter()); 