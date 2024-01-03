let nota1 = 6
let nota2 = 10
let nota3 = 10
let nota4 = 10
let media = (nota1 + nota2 + nota3 + nota4) / 4
let aproveitamento = ''

if (media >= 9 && media <= 10) {
    aproveitamento = "A"
} else if (media >= 8 && media <= 8.9) {
    aproveitamento = "B"
} else if (media >= 7 && media <= 7.9) {
    aproveitamento = "C"
} else if (media >= 6 && media <= 6.9) {
    aproveitamento = "D"
} else if (media >= 5 && media <= 5.9) {
    aproveitamento = "E"
} else if (media < 5) {
    aproveitamento = "F"
}

console.log(`Primeira Nota: ${nota1}`)
console.log(`Segunda Nota: ${nota2}`)
console.log(`Terceira Nota: ${nota3}`)
console.log(`Quarta Nota: ${nota4}`)
console.log(`Média: ${media}`)
console.log(`Aproveitamento: ${aproveitamento}`)