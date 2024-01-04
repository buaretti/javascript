function verificarNumeroPrimo(numero) {
    if (numero <= 1) {
        return false
    }


    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return false
        }
    }

    return true
}

const numero = 17
const resultado = verificarNumeroPrimo(numero)

if(resultado){
    console.log(`O número ${numero} é primo!`)
} else {
    console.log(`O número ${numero} não é primo!`)
}