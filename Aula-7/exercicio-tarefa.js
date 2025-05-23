const prompt = require("prompt-sync")();
let escola = {
    nome : undefined,
    turmas : []
}

escola.nome = prompt("Informe o nome da escola: ");
let qtdTurmas = prompt("Quantas turmas tem na escola "+escola.nome+": ");
for (let index = 0; index < qtdTurmas; index++) {
    let turma = {
        nome : undefined,
        periodo : undefined,
        alunos : []
    }
    turma.nome = prompt("Informe o nome da turma "+index+" da escola "+escola.nome+": ");
    turma.periodo = prompt("Informe o periodo da turma "+turma.nome+": ");
    escola.turmas.push(turma);
}

for (let index = 0; index <escola.turmas.length; index++) {
    let qtdAlunos = prompt("Quantos alunos tem na turma "+escola.turmas.nome+": ");
    for (let index2 = 0; index2 < qtdAlunos; index2++) {
        let aluno = {
            nome : undefined,
            disciplinas : []
        }
        aluno.nome = prompt("Informe o nome do aluno "+index2+" da turma "+escola.turmas[index]+": ");
    }
}
console.log(escola);

//-----------------------------------------
disciplina = {
    nome:  undefined,
    notas : []
}