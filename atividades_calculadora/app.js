import somar, {multiplicar, subtrair, dividir } from "./calc.js";

// Calculadora
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação: +, -, *, /");
let resultado = 0;

switch (operacao){
    case "+":
        resultado = somar(num1, num2);
        break;
    case "-":
        resultado = subtrair(num1, num2);
        break;
    case "*":
        resultado = multiplicar(num1, num2);
        break;
    case "/":
        resultado = dividir(num1, num2);
        break;
    default:
        resultado = "Operação Invalida"
};

console.log(resultado)