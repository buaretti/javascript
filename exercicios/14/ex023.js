function MaiorValorArray(array) {
    let MaiorValor = 0
    for (let i = 0; i < array.length; i++) {
        if (MaiorValor < array[i]) {
            MaiorValor = array[i]
        }
    }
    return MaiorValor
}

let arrayExemplo = [1, 4, 9, 10, 1, 2, 3, 30, 29, 11]

console.log(MaiorValorArray(arrayExemplo))