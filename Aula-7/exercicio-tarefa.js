const prompt = require("prompt-sync")();
let escola = {
    nome : undefined,
    turmas : []
}

escola.nome = prompt("Informe o nome da escola: ");
let qtdTurmas = prompt("Quantas turmas tem na escola "+escola.nome+": ");
for (let index = 0; index < qtdTurmas; index++) {
    turma = {
        nome : undefined,
        periodo : undefined,
        alunos : []
    }
    turmas.nome = prompt("Informe o nome da turma "+index+" da escola "+escola.nome+": ");
    turmas.periodo = prompt("Informe o periodo da turma "+turmas.nome+": ");
    escola.turmas.push(turma);
}

console.log(escola);

//-----------------------------------------
aluno = {
    nome : undefined,
    disciplinas : []
}
disciplina = {
    nome:  undefined,
    notas : []
}