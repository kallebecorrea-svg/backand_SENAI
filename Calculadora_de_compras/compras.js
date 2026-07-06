export default function calcularTotal(preco, quantidade, porcentagem){
    let subtotal = calcularSubtotal(preco, quantidade);
    let comDesconto = aplicarDesconto(subtotal, porcentagem);
    let frete = calcularFrete(comDesconto)
    return comDesconto + frete
}
export function calcularSubtotal(preco, quantidade){return preco * quantidade};
export function aplicarDesconto(valor, porcentagem){return valor * (porcentagem / 100)};
export function calcularFrete(valor){
    if(valor >= 200){
        return 0
    } else {
        return 20
    };
};