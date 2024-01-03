//contador inteligente, analisa o valor do inicio e então define se a contagem é regressiva ou progressiva

let inicio = 0
let fim = 10
let c = 0

if(inicio > fim){
    c = inicio + 1
    while(c != fim){
        console.log(--c)
    }
} else {
    c = inicio - 1
    while(c != fim){
        console.log(++c)
    }
}