let questoes = []
let alunosrespostas = []
let nomes = []
let pontos = [0,0,0]
let totalPontos = 0
let i = 0
let j = 0

alert("Cadastro de Gabarito")
for (i = 0; i < 5; i++) {
    questoes[i] = prompt(`Questão ${i + 1}:`)
}

for(i = 0; i < 3; i++){
    alert(`Aluno ${i + 1}`)
    nomes[i] = prompt(`Nome:`)
    alert("Respostas Dadas")
    for(j = 0; j < 5; j++){
        alunosrespostas[j] = prompt(`Questão ${j + 1}:`)
        if(alunosrespostas[j] === questoes[j]){
            pontos[i] += 2 
        }
    }
    totalPontos += pontos[i]
}

let mediaTurma = totalPontos / pontos.length

let mensagem = `Notas Finais\n`;
for (i = 0; i < 3; i++) {
    mensagem += `${nomes[i]} ${pontos[i]}\n`;
}
mensagem += `Média da Turma: ${mediaTurma.toFixed(2)}`;

alert(mensagem);
