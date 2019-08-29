//JSON = JavaScript Object Notation

const pedido = [{ 
    nome: "Bola de Futebol",
    preco: 50.00,
    descricao: "Bola oficial da copa",
    quantidade: 5
}, {
    nome: "Camisa do Corinthians",
    preco: 250.00,
    descricao: "Camisa Oficial",
    quantidade: 3
}];

function calcularTotal(pedido) {
    let total = 0.0;
    for (produto of pedido) {
        total += produto.preco * produto.quantidade;
    }
    return total;
}

console.log("O valor total dos produtos é: "+calcularTotal(pedido));
