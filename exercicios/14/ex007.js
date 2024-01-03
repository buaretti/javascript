let alunos = 3;
let c = 0;
let nome = [];
let nota = [];
let maiornota = 0;
let melhoraluno = '';

while (c < alunos) {
    window.alert(`Aluno ${c + 1}`);
    nome[c] = window.prompt("Nome do aluno:");
    nota[c] = parseFloat(window.prompt(`Nota de ${nome[c]}:`));

    if (nota[c] > maiornota) {
        maiornota = nota[c];
        melhoraluno = nome[c];
    }
    c++;
}

window.alert(`Melhor aluno: ${melhoraluno}, com nota: ${maiornota}`);
