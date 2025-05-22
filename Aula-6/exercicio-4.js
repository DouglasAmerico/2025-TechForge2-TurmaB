const prompt = require("prompt-sync")();

let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010
};

carro.cor = "Azul";
carro["tetoSolar"] = true;
let novoAtributo = prompt("Nome do novo atributo: ");
let valorNovoAtributo = prompt("Informe o valor do atributo "+novoAtributo+": ");
carro[novoAtributo] = valorNovoAtributo;

console.log(carro);