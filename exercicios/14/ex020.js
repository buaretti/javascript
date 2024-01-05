let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
]

let i = 0
let j = 0
let escolha = 4

switch (escolha) {
    case 1:
        //mostrar a matriz
        for (j = 0; j < 4; j++) {
            console.log(`\n ${matriz[j]}`)
        }
        break

    case 2:
        //mostrar somente a diagonal principal
        for (let i = 0; i < 4; i++) {
            let diagonal = [];
            for (let j = 0; j < 4; j++) {
                if (i === j) {
                    diagonal.push(matriz[i][j]);
                } else {
                    diagonal.push(' ');
                }
            }
            console.log(diagonal);
        }
        break

    case 3:
        //mostrar somente o triângulo superior
        for (i = 0; i < 4; i++) {
            let triangulosup = []
            for (j = 0; j < 4; j++) {
                if (i < j) {
                    triangulosup.push(matriz[i][j])
                } else {
                    triangulosup.push('')
                }
            }
            console.log(triangulosup)
        }
        break

    case 4:
        //mostrar somente o triângulo inferior
        for (i = 0; i < 4; i++) {
            let trianguloinf = []
            for (j = 0; j < 4; j++) {
                if (i > j) {
                    trianguloinf.push(matriz[i][j])
                } else {
                    trianguloinf.push('')
                }
            }
            console.log(trianguloinf)
        }
        break

    case 5:
        //sair do programa
        console.log("finalizando o programa...")
        break

    default:
        console.log("Escolha inválida.");
}
