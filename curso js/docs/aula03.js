"use strict"

function teste(){
    let nome = "Marcelo"
    if(true){
        console.log(`Dentro do if de teste ${nome}`)
    }
    console.log(`Dentro de teste ${nome}`)
}

teste() 

//console.log(`Fora de teste ${nome}`) -> apresentará erro

const cachorro = "pinscher"
//cachorro = "pitbull" -> [erro], const não tem seu valor alterável...
console.log(cachorro)

