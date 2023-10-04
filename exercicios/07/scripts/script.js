window.document.addEventListener("DOMContentLoaded", function () {
    let date = new Date()
    let horaatual = date.getHours()
    let hora = document.getElementById("hora")

    hora.innerHTML = `Agora são ${horaatual} horas.`
})


