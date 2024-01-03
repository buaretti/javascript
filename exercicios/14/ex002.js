let anoatual = 2024
let anonasc = 2005
let idade = anoatual - anonasc
let situacao = ""

if(idade >= 18){
    situacao = "apto"
} else {
    situacao = "inapto"
}

console.log(`Idade: ${idade}`)
console.log(`Status: ${situacao}`)
