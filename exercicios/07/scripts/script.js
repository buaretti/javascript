function atualizarHora() {
    let date = new Date();
    let horaatual = date.getHours()
    let minutosatual = date.getMinutes();
    let segundosatual = date.getSeconds();
    let hora = document.getElementById("hora");
    let calendario = document.getElementById("calendario")
    let dia = date.getDate();
    let mes = numeroParaMesExtenso(date.getMonth()); // Obtém o mês por extenso
    let ano = date.getFullYear()
    let body = document.body;
    let imghora = document.getElementById("imghora");

    hora.innerHTML = `Agora são ${horaatual} horas ${minutosatual} minutos e ${segundosatual} segundos ⏰`;

    calendario.innerHTML = `Hoje é dia ${dia} de ${mes} de ${ano} 📆`;

    if (horaatual >= 0 && horaatual < 4) {
        // Madrugada
        imghora.src = "imgs/madrugada.jpg";
        body.style.backgroundColor = '#CD8B72';
    } else if (horaatual >= 4 && horaatual < 12) {
        // Manhã
        imghora.src = "imgs/manha.jpg";
        body.style.backgroundColor = '#EDAD6B';
    } else if (horaatual >= 12 && horaatual < 15) {
        // Meio Dia
        imghora.src = "imgs/meiodia.jpg";
        body.style.backgroundColor = '#5E92D6';
    } else if (horaatual >= 15 && horaatual < 18) {
        // Tarde
        imghora.src = "imgs/tarde.jpg";
        body.style.backgroundColor = "#FAB04B";
    } else if (horaatual >= 18 || horaatual < 4) {
        // Noite
        imghora.src = "imgs/noite.jpg";
        body.style.backgroundColor = "#41433A";
    }
}

// Função para converter número de mês para mês por extenso
function numeroParaMesExtenso(numero) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Verifique se o número está dentro do intervalo válido (0-11)
    if (numero >= 0 && numero <= 11) {
        return meses[numero];
    } else {
        return "Mês inválido";
    }
}

// Atualize a cada segundo (1000 milissegundos)
setInterval(atualizarHora, 1000);

// Execute a função inicialmente para mostrar a hora imediatamente
atualizarHora();
