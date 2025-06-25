let pontuacao = 750; // Você pode mudar a pontuação para testar
let classificacao;

if (pontuacao <= 400) {
  classificacao = "Alto risco";
} else if (pontuacao > 400 && pontuacao <= 700) {
  classificacao = "Risco moderado";
} else {
  classificacao = "Baixo risco";
}
console.log("Classificação de risco: " + classificacao);