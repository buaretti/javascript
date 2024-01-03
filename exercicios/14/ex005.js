let golsBRA = 2
let golsALE = 1
let diferenca = Math.abs(golsBRA - golsALE)
let situacao = 0

if (diferenca == 0) {
    situacao = 1
} else if (diferenca >= 3) {
    situacao = 2
} else {
    situacao = 3
}

switch (situacao) {
    case 1:
        console.log("Status: Empate")
        console.log(`Diferença de Gols: ${diferenca}`)
        break
    case 2:
        console.log("Status: Goleada")
        console.log(`Diferença de Gols: ${diferenca}`)
        break
    case 3:
        console.log("Status: Partida Normal")
        console.log(`Diferença de Gols: ${diferenca}`)
        break
}