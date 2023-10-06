const botao = document.getElementById("botao") as HTMLElement;

botao.addEventListener("click", () => {
    const anonasc = parseInt((document.getElementById("anonasc") as HTMLInputElement).value);
    const res = document.getElementById("res") as HTMLElement;
    const imgsex = document.getElementById("imgsex") as HTMLImageElement;
    const date = new Date();
    const anoatual = date.getFullYear();
    const anos = Math.abs(anonasc - anoatual);
    const radsex = document.querySelector('input[name="radsex"]:checked') as HTMLInputElement;
    let sexo = "Indefinido"; // Valor padrão se nenhum botão for selecionado
    const erro = document.getElementById("erro") as HTMLElement;

    if (radsex) {
        sexo = radsex.id === "mas" ? "Homem" : "Mulher";
    }

    if (anonasc > anoatual) {
        erro.style.display = "block";
        imgsex.style.display = "none";
        res.innerHTML = "";
        setTimeout(() => {
            erro.style.display = "none";
        }, 3000);
    } else if (sexo === "Homem" && anos >= 0 && anos <= 4) {
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
        res.innerHTML = "";
        imgsex.style.display = "none";
        setTimeout(() => {
            erro.style.display = "none";
        }, 3000);
    }
});
