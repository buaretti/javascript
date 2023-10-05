var botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    var anonasc = document.getElementById("anonasc").value
    var mas = document.getElementById("mas").value
    var fem = document.getElementById("fem").value
    var res = document.getElementById("res")
    var image = document.getElementById("image")
    var date = new Date()
    var anoatual = date.getFullYear()
    var anos = Math.abs(anonasc - anoatual)

    if(mas.value = checked){
        var sexo = "Homem"
    } else if(fem.value = checked){
        var sexo = "Mulher"
    }
    
    res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`
})