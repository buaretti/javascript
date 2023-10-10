var escolha = 3

switch (escolha) {
    case 1: for (c = 0; c < 11; c++) {
        console.log(c)
    }
        break

    case 2:
        c = 11
        do {
            c--
            console.log(c)
        } while (c > 0)
        break

    case 3:
        c = 100
        p = 2
        while (c > 0) {
            c - p
            console.log(c)
        }
        break
    default: console.log("Escolhe certo Verme!")

}