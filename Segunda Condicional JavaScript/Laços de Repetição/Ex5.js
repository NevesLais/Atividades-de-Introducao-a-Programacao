let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}

let media = somaNotas / notas.length;
console.log("A média das notas é: " + media.toFixed(2));