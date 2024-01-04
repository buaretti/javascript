let times = [];
let partidas = document.getElementById("partidas");

for (let i = 0; i < 3; i++) {
    times[i] = window.prompt(`Nome do ${i + 1}° time:`);
}

for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
        partidas.innerHTML += (`<p>${times[i]}</p> X <p>${times[j]}</p><br>`);
        partidas.innerHTML += (`<p>${times[j]}</p> X <p>${times[i]}</p><br>`);
    }
}
