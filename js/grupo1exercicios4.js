/*
Grupo 1 - Sequências Simples
4. Fazer um programa em JS que pergunte um valor em graus Fahrenheit e
imprime no vídeo o correspondente em graus Celsius. Usar uma variável
double para ler o valor em Fahrenheit e a fórmula:
C = (F - 32.0) * (5.0 / 9.0).*/

const valorFahrenheit = parseFloat(prompt("Digite um valor em Fahrenheit para converter em Celsius"));

function ConverteCelsius(valorFahrenheit) {
    let valorCelsius = (valorFahrenheit - 32.0) * (5.0 / 9.0);
    return valorCelsius;
}

console.log(`${valorFahrenheit}°F => ${ConverteCelsius(valorFahrenheit)}°C`);