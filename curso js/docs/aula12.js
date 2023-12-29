let dados1 = {nome: "Marcelo", idade: 18}
let dados2 = {cidade: "Franca", Estado: "SP"}
let dados3 = {Altura: 1.83, peso: 82}
let dados4 = {...dados1, ...dados2, ...dados3}

console.log(dados4)

