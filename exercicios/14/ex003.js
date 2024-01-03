let nota1 = 5
let nota2 = 10
let media = (nota1 + nota2) / 2
let situacao = ''

if(media < 5){
    situacao = "reprovado"
} else {
    situacao = "aprovado"
}

console.log(`Média: ${media}`)
console.log(`Aluno: ${situacao}`)