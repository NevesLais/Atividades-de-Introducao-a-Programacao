let numeroEstacao = 3; 
let estacao;

switch (numeroEstacao) {
  case 1:
    estacao = "Verão";
    break;
  case 2:
    estacao = "Outono";
    break;
  case 3:
    estacao = "Inverno";
    break;
  case 4:
    estacao = "Primavera";
    break;
  default:
    estacao = "Número inválido. Digite um número de 1 a 4.";
}
console.log(estacao);
