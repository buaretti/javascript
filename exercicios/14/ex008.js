let escolha = 1
let c = 0

switch (escolha) {
    case 1:
        c = 0
        do {
            c++
            console.log(c)
        } while (c < 10)
        break
    case 2:
        c = 11
        do {
            c--
            console.log(c)
        } while (c > 1)
        break
    case 3:
        console.log("Fim do Programa...")
}