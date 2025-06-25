let numeroUsuario = 3; // Você pode mudar o número do usuário
let numeroComputador = Math.floor(Math.random() * 10) + 1; // Número aleatório de 1 a 10

let soma = numeroUsuario + numeroComputador;

console.log("Seu número: " + numeroUsuario);
console.log("Número do computador: " + numeroComputador);
console.log("Soma total: " + soma);

if (soma % 2 === 0) {
  console.log("Par, jogador venceu!");
} else {
  console.log("Ímpar, computador venceu.");
}