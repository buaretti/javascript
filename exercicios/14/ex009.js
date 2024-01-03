let genero = []
let cordocabelo = []
let idade = []
let resposta = ''
let c = 0
let homensfiltrados = 0
let mulheresfiltradas = 0

do {
    genero[c] = window.prompt("Qual o Sexo? [M/F]")
    idade[c] = parseInt(window.prompt("Qual a idade?"))
    cordocabelo[c] = parseInt(window.prompt("Qual a cor do cabelo? [1] Preto [2] Castanho [3] Loiro [4] Ruivo"))
    if (genero[c] === "M" && idade[c] >= 18 && cordocabelo[c] == 2) {
        homensfiltrados++
    }
    if (genero[c] === "F" && idade[c] >= 25 && idade[c] <= 30 && cordocabelo[c] == 3) {
        mulheresfiltradas++
    }
    c++
    resposta = window.prompt("Quer continuar? [S/N]")
} while (resposta === "S" || resposta === 's')
window.alert(`Total de homens com mais de 18 e cabelos castanhos: ${homensfiltrados}`)
window.alert(`Total de mulheres entre 25 e 30 e cabelos loiros: ${mulheresfiltradas}`)