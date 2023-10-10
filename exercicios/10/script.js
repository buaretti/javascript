var botao = document.getElementById("botao");

botao.addEventListener("click", clicou);

function clicou() {
    var inicio = parseInt(document.getElementById('inicio').value);
    var fim = parseInt(document.getElementById("fim").value);
    var passo = parseInt(document.getElementById("passo").value);
    var res = document.getElementById("res");

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        res.innerHTML = "<p>Preencha os campos corretamente</p>";
    } else {
        res.innerHTML = "<p>Contando:</p> <br>";
        
        if (inicio < fim && passo > 0) {
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c}👉`;
            }
            res.innerHTML += `✅`;
        } else if (inicio > fim && passo < 0) {
            for (var c = inicio; c >= fim; c += passo) {
                res.innerHTML += `${c}👉`;
            }
            res.innerHTML += `✅`;
        } else {
            res.innerHTML = "<p>Impossível contar</p>";
        }
    }
}
