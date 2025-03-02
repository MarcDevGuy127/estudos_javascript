//Exercise 1
console.log("Hello World!");

//Exercise 2
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