export default function somar(num1, num2) {return num1 + num2};
export function multiplicar(num1, num2) {return num1 * num2};
export function subtrair(num1, num2) {return num1 - num2};
export function dividir(num1, num2) {return num1 / num2
    if (num2 === 0) {
        return "Erro: Divisão por zero não é permitida.";
    };
};