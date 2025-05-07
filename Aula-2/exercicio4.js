//Crie um array de 10 elementos, e utilize um for para buscar a posição de um 
// valor dentro do array
//Ex:​
//Arr -> [4, 5, 3]​
//Valor -> 5​
//resultado -> 1
const prompt = require("prompt-sync")();
let numeros = [5,9,4,6,70,70,60,34,11,25];
let valor = prompt("Qual valor será buscado: ");
//let posicao = null;
let valorEncontrado = false;

for(let i=0;i<10;i++){
    if(numeros[i] == valor){
        //posicao= i;
        console.log("O valor foi encontrado na posicao "+i);
        valorEncontrado= true;
    }
}

if(valorEncontrado == false){
    console.log("Não foi encontrado o valor "+valor);
}