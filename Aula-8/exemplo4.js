const prompt = require("prompt-sync")();
function montaObjeto(nomeAluno){
    let aluno = {
        nome : undefined,
        idade: undefined,
        turma : undefined
    }
    aluno.nome = nomeAluno;
    aluno.idade = prompt("Informe a idade do "+nomeAluno+": ");
    aluno.turma = prompt("Informe a turma do "+nomeAluno+": ");
    return aluno;
}

let sala = [];
for (let index = 0; index < 3; index++) {
    sala.push(
                montaObjeto(
                            prompt("Informe o nome: ")
                        )
            );
}
console.log(sala);