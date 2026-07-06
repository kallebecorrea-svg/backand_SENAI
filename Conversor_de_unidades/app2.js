import celsiusParaFahrenheit, { metrosParaCentimetros, kmParaMetros, horasParaMinutos } from "./conversor.js";

// Conversor
let resultado = 0;
let num1 = Number(prompt("Digite o valor que deseja converter:"));
let escolha = prompt(
    "Escolha o cálculo:\n" +
    "1 - Celsius para Fahrenheit\n" +
    "2 - Metros para Centímetros\n" +
    "3 - Km para Metros\n" +
    "4 - Horas para Minutos"
);

switch (escolha) {
    case "1":
        resultado = celsiusParaFahrenheit(num1);
        break;
    case "2":
        resultado = metrosParaCentimetros(num1);
        break;
    case "3":
        resultado = kmParaMetros(num1);
        break;
    case "4":
        resultado = horasParaMinutos(num1);
        break;
    default:
        resultado = "Opção inválida";
};

console.log(resultado);
alert(resultado);