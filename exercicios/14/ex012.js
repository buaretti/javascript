 function soma(x, y){
    return x + y
 }

 function subtracao(x,y){
    return x - y
 }

 function multiplicacao(x,y){
    return x * y
 }

 function divisao(x,y){
    if(y != 0){
        return x / y
    } else {
        return "Impossível dividir por 0!"
    }
 }

 console.log(`Soma: ${soma(10,5)}`)
 console.log(`Subtração: ${subtracao(100,50)}`)
 console.log(`Multiplicação: ${multiplicacao(2,80)}`)
 console.log(`Divisão: ${divisao(10,2)}`)