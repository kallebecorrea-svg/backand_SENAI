import contarCaracteres, { deixarMaiusculo, deixarMinusculo, inverterTexto } from "./texto.js";

let resultado = ""
let texto = prompt("digite um texto para depois escolher uma das funções.")
const escolhas = prompt(
    "Esolha umas dessas opções:\n" +
    "1. Quer contar os caracteres?\n" +
    "2. Quer deixar maiusculo?\n" +
    "3. Quer deixar minusculo?\n" +
    "4. Quer inverter o texto?(de trás para frente)"
);

switch (escolhas) {
    case "1":
        resultado = contarCaracteres(texto);
        break;
    case "2":
        resultado = deixarMaiusculo(texto);
        break;
    case "3":
        resultado = deixarMinusculo(texto);
        break;
    case "4":
        resultado = inverterTexto(texto);
        break;
    default:
        resultado = "Opção Invalida!";
};

console.log(resultado);
alert(resultado);