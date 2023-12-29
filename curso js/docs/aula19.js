let c = 0
let pares = 0
let i = 0

//break exemplo

while(c < 100){
    c++
    console.log(c)
    if(c == 50){
        break
    }
}

console.log("Fim do Programa")

//continue exemplo

do{
    i++
    console.log(i)
    if(i % 2 != 0){
        continue
    }
    pares++
} while(i < 100)

console.log(`Números Pares: ${pares}`)