let peso = 82.7
let altura = 1.83
let imc = peso / altura ** 2

console.log(`Seu IMC é: ${imc.toFixed(2)}`)

if (imc < 17) {
    console.log("Você está muito abaixo do peso")
} else if (imc >= 17 && imc < 18.5) {
    console.log("Você está abaixo do peso")
} else if (imc >= 18.5 && imc < 25){
    console.log("Você está no peso ideal")
} else if (imc >= 25 && imc < 30){
    console.log("Você está com sobrepeso")
} else if (imc >= 30 && imc < 35){
    console.log("Você está com obesidade")
} else if (imc >= 35 && imc < 40){
    console.log("Você está com obesidade severa")
} else if (imc >= 40){
    console.log("Você está com obesidade mórbida")
}