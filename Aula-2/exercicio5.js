//Solicite ao usuário para inserir nomes em um array até que ele deseje parar. 
//A cada informação de nome novo, deve ser solicitado ao usuário se quer inserir 
// mais nomes (s/n)
//Caso escolha (n) deve mostrar a quantidade
//Caso escola (s) deve solicitar mais nomes
const prompt = require("prompt-sync")();
let nomes = [];
let continuar,i=0;

do{
    nomes[i]= prompt("Informe o nome: ");
    i++;
    continuar = prompt("Deseja continuar (S/N): ");
}while(continuar == "s" || continuar == "S");

console.log("Foram informados "+i+" nomes");
console.log(nomes);