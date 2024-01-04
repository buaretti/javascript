function MediaArray(array){
    let elementosdoarray = array.length
    let soma = 0
    let media = 0
    for(let i = 0; i < elementosdoarray; i++){
        soma += array[i]
    }
    media = soma / elementosdoarray
    return media
}

let numeros = [1,5,7,2,10,21]

console.log(`A média dos elementos ${numeros} é: ${MediaArray(numeros)}`)