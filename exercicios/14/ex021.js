document.addEventListener("DOMContentLoaded", function() {
    let blocos = document.querySelectorAll(".bloco");
    let jogoAtivo = true; // Variável para controlar se o jogo está ativo ou não
    let jogadorAtual = "X"; // Começa com o jogador X
  
    blocos.forEach(function(bloco) {
      bloco.addEventListener("click", function() {
        if (jogoAtivo && bloco.textContent === "") {
          bloco.textContent = jogadorAtual;
          verificarVencedor();
          jogadorAtual = jogadorAtual === "X" ? "O" : "X"; // Alternar entre os jogadores
        }
      });
    });
  
    function verificarVencedor() {
      const possibilidadesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonais
      ];
  
      for (let possibilidade of possibilidadesVitoria) {
        const [a, b, c] = possibilidade;
        const blocoA = blocos[a].textContent;
        const blocoB = blocos[b].textContent;
        const blocoC = blocos[c].textContent;
  
        if (blocoA !== "" && blocoA === blocoB && blocoB === blocoC) {
          jogoAtivo = false;
          alert(`O jogador ${blocoA} venceu!`);
          return;
        }
      }
  
      // Verifica se houve empate
      let empate = true;
      for (let bloco of blocos) {
        if (bloco.textContent === "") {
          empate = false;
          break;
        }
      }
  
      if (empate) {
        jogoAtivo = false;
        alert("Empate!");
      }
    }
  });
  