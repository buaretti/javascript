matriz = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]

for(let linhas = 0; linhas < 3; linhas++){
    for(let colunas = 0; colunas < 4; colunas++){
        matriz[linhas][colunas] = prompt(`Digite o valor da posição ${linhas},${colunas}:`)
    }
}

let matrizFormatada = '';
for (let linhas = 0; linhas < 3; linhas++) {
    for (let colunas = 0; colunas < 4; colunas++) {
        matrizFormatada += matriz[linhas][colunas] + ' ';
    }
    matrizFormatada += '\n';
}

alert(matrizFormatada);