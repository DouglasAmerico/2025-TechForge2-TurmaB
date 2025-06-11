const prompt = require("prompt-sync")();

let turma = {
    periodo: null,
    identidicacao: null,
    alunos: {
        nome: null,
        disciplina: {
            nome: null,
            notas: []
        }
    }
}

let escola = [];

for (let index = 0; index < 3; index++) {
    turma.identidicacao = prompt("Insira a identificação da turma: ");
    turma.periodo = prompt("Insira o periodo da turma "+turma.identidicacao+": ");
    escola[index] = turma;
}

console.log(escola);
