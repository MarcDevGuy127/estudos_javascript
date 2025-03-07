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

//Exercise 9 - Gere os primeiros 10 números da sequência de Fibonacci.
let fibonacci = [0, 1]; // Inicializa com os dois primeiros números da sequência
let sum = 0;

function FuncaoSequenciaFibonacci() {
    for (let i = 2; i <= 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Soma dos dois números anteriores
    }
    for (let i = 0; i < fibonacci.length; i++) {
        sum += fibonacci[i]; // Soma todos os valores da sequência
    }
    console.log(`Sequência Fibonacci: ${fibonacci}`);
    console.log(`Soma dos números da sequência: ${sum}`);
    return sum; // Retorna a soma total
}
console.log(FuncaoSequenciaFibonacci());

//Exercise 10 - Escreva um programa que verifica se um número fornecido pelo usuário é primo.
let valor1 = Number(prompt("Digite um número para saber se ele é primo: ")); // Convertendo para número
let ehPrimo = true; // Variável para armazenar o resultado

if (valor1 < 2) {
    console.log(`O número ${valor1} não é primo!`);
} else {
    for (let i = 2; i < valor1; i++) {
        if (valor1 % i === 0) { // Se for divisível, não é primo
            ehPrimo = false;
            break; // Para o loop assim que encontrar um divisor
        }
    }
    if (ehPrimo) {
        console.log(`O número ${valor1} é primo!`);
    } else {
        console.log(`O número ${valor1} não é primo!`);
    }
} //Revisar 7 8 9 10

//Exercise 11 - Peça ao usuário uma lista de números separados por vírgula e exiba-os em ordem crescente.
// Step 1: Request input from the user
let userInput = prompt("Enter a list of numbers separated by commas (e.g., 5, 3, 8, 1):");

// Step 2: Split the input string into an array of strings
let stringArray = userInput.split(',');

// Step 3: Convert the array of strings to an array of numbers
let numberArray = stringArray.map(Number);

// Step 4: Sort the array in descending order
numberArray.sort((a, b) => b - a);

// Step 5: Display the sorted array
console.log("Sorted numbers from highest to lowest:", numberArray);


//Conteúdo Extra
const string = "Hello, World!";

console.log(`%\0, ${string}`);  // Null character (não visível)
console.log(`%', ${string}`);   // Aspas simples (não precisa escapar)
console.log(`%", ${string}`);   // Aspas duplas (não precisa escapar)
console.log(`%\\, ${string}`);  // Backslash (precisa de um escape duplo)
console.log(`%\n, ${string}`);  // Nova linha
console.log(`%\r, ${string}`);  // Retorno de carro
console.log(`%\v, ${string}`);  // Tab vertical (pode não ser visível)
console.log(`%\t, ${string}`);  // Tab
console.log(`%\b, ${string}`);  // Backspace (pode não ser visível)
console.log(`%\f, ${string}`);  // Form feed (pode não ser visível)

//Utilizando método charAt para acessar um caractere
var textoo = "Brave new world";
console.log(textoo.charAt(1)); // returns "a"

//Tratando string como um objeto Array para acessar um caractere
console.log("cat"[1]); // returns "a"

//Lista 2
//Exercise 1 - Crie uma função que recebe uma string e uma letra e retorna quantas vezes essa letra aparece na string.
const palavraUsuario = prompt("Digite uma palavra para contar vogais:");
function FuncContaLetra(palavraUsuario) {
    let count = 0;
    for (let i = 0; i < palavraUsuario.length; i++) {
        if ("aeiou".includes(palavraUsuario[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log("Número de vogais:", FuncContaLetra(palavraUsuario));
/**
 * //comparando strings
var stringa = "a";
var stringb = "b";
if (stringa < stringb)
  // verdadeiro
  console.log(stringa + " é menor que " + stringb);
else if (stringa > stringb) console.log(stringa + " é maior que " + stringb);
else console.log(stringa + " e " + stringb + " são iguais.");

//Distinção entre string primitivas e objetos String
var s_prim = "foo";
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Loga "string"
console.log(typeof s_obj); // Loga "object"

 */