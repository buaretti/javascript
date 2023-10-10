let numerosPares = [10,4,16,20,2,12,18,6,14,8]
numerosPares.sort(function(a,b){
    return a - b
})

numerosPares.push(22)

for(var c = 0; c != numerosPares.length; c++){
    console.log(numerosPares[c])
}

console.log(`Número total de elementos: ${numerosPares.length}`)
console.log(`Primeiro elemento: ${numerosPares[0]}`)
console.log(`Último elemento: ${numerosPares[10]}`)
let pos = numerosPares.indexOf(2)
if(pos == -1){
    console.log("O valor não foi encontrado!")
}else{
    console.log(`A posição do número digitado é: ${pos}`)
}