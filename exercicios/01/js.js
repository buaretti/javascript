const date = new Date();
const hours = date.getHours();
const resp = document.getElementById("resp");

    resp.innerHTML = `Agora são ${hours} Horas!`
    if(hours >= 0.00 && hours <= 5.59){
        document.body.style.backgroundImage="imagens/madrugada.jpg";
    } else if(hours >= 6.00 && hours <= 11.59){
        document.body.style.backgroundImage="imagens/manhã.jpg";
        
    } else if(hours >= 12.00 && hours <= 17.59){
        document.body.style.backgroundImage="imagens/tarde.jpg";
        
    } else if(hours >= 18.00 && hours <= 23.59){
        document.body.style.backgroundImage="imagens/noite.jpg";

    }