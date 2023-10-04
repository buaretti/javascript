function atualizarHora() {
    let date = new Date();
    let horaatual = date.getHours();
    let minutosatual = date.getMinutes();
    let segundosatual = date.getSeconds();
    let hora = document.getElementById("hora");
    let body = document.body;
    let imghora = document.getElementById("imghora");

    hora.innerHTML = `Agora são ${horaatual} horas ${minutosatual} minutos e ${segundosatual} segundos.`;

    if (horaatual >= 0 && horaatual < 4) {
        // Madrugada
        imghora.src = "imgs/madrugada.jpg";
        body.style.backgroundColor = '#000';
    } else if (horaatual >= 4 && horaatual < 12) {
        // Manhã
        imghora.src = "imgs/manha.jpg";
        body.style.backgroundColor = '#D99E36';
    } else if (horaatual >= 12 && horaatual < 18) {
        // Tarde
        imghora.src = "imgs/tarde.jpg";
        body.style.backgroundColor = "#FEDC69";
    } else if (horaatual >= 18 && horaatual < 24) {
        // Noite
        imghora.src = "imgs/noite.jpg";
        body.style.backgroundColor = "#41433A";
    }

}

// Atualize a cada segundo (1000 milissegundos)
setInterval(atualizarHora, 1000);

// Execute a função inicialmente para mostrar a hora imediatamente
atualizarHora();
