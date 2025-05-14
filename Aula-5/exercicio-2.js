//Comece com um array vazio chamado tarefas. Pergunte se o usuário deseja 
// adicionar uma tarefa e, se sim, use o método push() para inserir a descrição 
// fornecida. Após cada adição, mostre a lista atualizada. Repita o processo 
// até que o usuário decida parar e, ao final, exiba a lista completa de tarefas.

const prompt = require("prompt-sync")();
let tarefas = [],tarefaMomentanea,continuar;

do{
    tarefaMomentanea= prompt("Informe a tarefa: ");
    tarefas.push(tarefaMomentanea);
    for(let i=0;i<tarefas.length;i++){
        console.log("Posição "+i+" - Tarefa: "+tarefas[i]);
    }
    continuar= prompt("Deseja adicionar mais? (s/n)");
}while(continuar == "s");

console.log("------------------------");
for(let i=0;i<tarefas.length;i++){
    console.log("Posição "+i+" - Tarefa: "+tarefas[i]);
}
console.log("------------------------");