var botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    var anonasc = document.getElementById("anonasc").value;
    var res = document.getElementById("res");
    var imgsex = document.getElementById("imgsex");
    var date = new Date();
    var anoatual = date.getFullYear();
    var anos = Math.abs(anonasc - anoatual);
    var radsex = document.querySelector('input[name="radsex"]:checked');
    var sexo = "Indefinido"; // Valor padrão se nenhum botão for selecionado
    var erro = document.getElementById("erro");
    
    if (radsex) {
        sexo = radsex.id === "mas" ? "Homem" : "Mulher";
    }

    if(anonasc > anoatual){
        erro.style.display = "block";
        imgsex.style.display = "none";
        res.innerHTML = ""
        setTimeout(function() {
            erro.style.display = "none"; 
        }, 3000);
    } else if (sexo === "Homem" && anos >= 0 && anos <= 4) {

        // Mostrar a imagem e alterar o atributo src
        imgsex.style.display = "inline-block";
        imgsex.src = "images/bebe-m.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Mulher" && anos >= 0 && anos <= 4) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/bebe-f.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Homem" && anos > 4 && anos <= 12) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/crianca-m.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Mulher" && anos > 4 && anos <= 12) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/crianca-f.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Homem" && anos > 12 && anos <= 17) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/adolescente-m.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Mulher" && anos > 12 && anos <= 17) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/adolescente-f.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Homem" && anos > 17 && anos <= 40) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/adulto-m.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Mulher" && anos > 17 && anos <= 40) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/adulto-f.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Homem" && anos > 40 && anos <= 60) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/adulto2-m.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Mulher" && anos > 40 && anos <= 60) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/adulto2-f.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Homem" && anos > 60 && anos <= 100) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/idoso-m.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else if (sexo === "Mulher" && anos > 60 && anos <= 100) {
        imgsex.style.display = "inline-block";
        imgsex.src = "images/idoso-f.jpg";
        res.innerHTML = `Detectamos ${sexo} com ${anos} anos.`;
    } else {
        erro.style.display = "block";
        res.innerHTML = ""
        imgsex.style.display = "none";
        setTimeout(function() {
            erro.style.display = "none"; 
        }, 3000);
    }
});
