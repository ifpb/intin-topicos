const nome = "Milena";
const cpf = "123123123-22";

if (nome == "Diego") {
    console.log("Oi, professor!");
} else {
    console.log("Oi, pessoal!");
}

for (let i=0; i<=10; i++) {
    console.log(i);
}

let i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}


function soma(numero1, numero2) {
    return numero1+numero2;
}

console.log("A soma é = "+soma(5,7));

const comidas = ["coxinha", "pastel", "crepe"];
for(let comida of comidas) {
    console.log(comida);
}

const carro = {
    portas: 4,
    motor: 1.0,
    marca: "Chevrolet",
    nome: "Onix"
};
console.log(carro.portas);
console.log(carro.motor);
console.log(carro.marca);
console.log(carro.nome);
