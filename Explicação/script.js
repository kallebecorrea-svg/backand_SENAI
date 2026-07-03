export default function calcularIdade(anoNascimento, mesNascimento, diaNascimento) {
    let idade = 2026 - anoNascimento;

    const mesAtual = new Date().getMonth();
    const diaAtual = new Date().getDate();

    if (mesAtual > mesNascimento) {
        if (diaAtual > diaNascimento) {
            idade -= 1
        }

        return idade;
    }

}
export function unirNome(...nomes) {
    return nomes.join(" ").trim();
}
export function cpfFormatados(numero) {
    return numero.trim()
}

