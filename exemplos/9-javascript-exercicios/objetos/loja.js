//JSON = JavaScript Object Notation

const pedido = [{ 
    nome: "Bola de Futebol",
    preco: 50.00,
    descricao: "Bola oficial da copa"
}, {
    nome: "Camisa do Corinthians",
    preco: 250.00,
    descricao: "Camisa Oficial"
}];

let total = 0;
for (item of pedido) {
    console.log("Nome = "+ item.nome);
    console.log("Preço = "+ item.preco);
    console.log("Descrição = "+ item.descricao);
    total += item.preco;
}
console.log("Valor total do pedido = "+ total);

