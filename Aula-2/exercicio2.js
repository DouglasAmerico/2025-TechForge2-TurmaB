const prompt = require("prompt-sync")();
let numeros = [];
let media=0,qtd;

qtd = prompt("Quantos valores serão informados: ");

for(let i=0;i<qtd;i++){
    numeros[i] = Number(prompt("Informe o valor da posição "+i+": "));
    media = media + numeros[i];
}

for(let i=0;i<qtd;i++){
    console.log("Posição "+i+" - Valor "+numeros[i]);
}

media = media / qtd;
console.log("Com a media final "+media);