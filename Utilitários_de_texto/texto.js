export default function contarCaracteres(texto) {
    return texto.length
};
export function deixarMaiusculo(texto) {
    return texto.toUpperCase()
};
export function deixarMinusculo(texto) {
    return texto.toLowerCase()
}
export function inverterTexto(texto) {
    return texto.split("").reverse().join("")
};