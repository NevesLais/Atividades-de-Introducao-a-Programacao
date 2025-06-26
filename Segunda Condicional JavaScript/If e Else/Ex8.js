let numeroUsuario = 3; 
let numeroComputador = Math.floor(Math.random() * 10) + 1; 

let soma = numeroUsuario + numeroComputador;

console.log("Seu número: " + numeroUsuario);
console.log("Número do computador: " + numeroComputador);
console.log("Soma total: " + soma);

if (soma % 2 === 0) {
  console.log("Par, jogador venceu!");
} else {
  console.log("Ímpar, computador venceu.");
}
