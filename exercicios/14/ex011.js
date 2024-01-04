let numeros = []
let soma = 0
let media = 0
let divpor5 = 0
let nulos = 0
let somapar = 0
let contador = 0

for (contador = 0; contador < 5; contador++) {
    numeros[contador] = parseInt(window.prompt(`Digite o ${contador + 1}º valor:`))
    soma = parseInt(soma + numeros[contador])
    media = parseFloat(soma / 5)
    if (numeros[contador] % 5 == 0) {
        divpor5++
    }
    if (numeros[contador] == 0) {
        nulos++
    }
    if (numeros[contador] % 2 == 0) {
        somapar = parseInt(somapar + numeros[contador])
    }
}

window.alert(`A soma dos valores é: ${soma}`)
window.alert(`A média dos valores é: ${media}`)
window.alert(`Quantidade de números divisíveis por 5: ${divpor5}`)
window.alert(`Quantidade de números nulos: ${nulos}`)
window.alert(`A soma dos valores pares é: ${somapar}`)


