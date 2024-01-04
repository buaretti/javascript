function ContagemProgressiva(inicio, final) {
    for (let i = inicio; i < final + 1; i++) {
        console.log(i)
    }
}

function ContagemRegressiva(final, inicio) {
    if (final < inicio) {
        ContagemProgressiva(final, inicio)
    } else if (final == inicio) {
        console.log("Impossível contar!")
    } else {
        for (let i = final; i > inicio - 1; i--) {
            console.log(i)
        }
    }
}

ContagemRegressiva(0, 0)