function Fatorial(numero) {
    let fat = 1
    for (let i = 1; i <= numero; i++) {
        fat *= i
    }
    return fat
}

console.log(Fatorial(5))