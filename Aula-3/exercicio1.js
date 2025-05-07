const prompt = require("prompt-sync")();
let nomes = [], notas = [];
let continuar,i=0;

do{
    nomes[i]= prompt("Informe o nome: ");
    i++;
    continuar = prompt("Deseja continuar (S/N): ");
}while(continuar == "s" || continuar == "S");

for(let i=0;i<nomes.length;i++){
    notas[i]= prompt("Informe e nota do aluno(a) "+nomes[i]+": ");
}

for(let i=0;i<nomes.length;i++){
    console.log("Aluno(a) "+nomes[i]+" ficou com a nota "+notas[i]);
}