let numeros = [3, 8, 12, 7, 5, 14, 9, 10];
let contadorPares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    contadorPares++;
  }
}
console.log("Quantidade de números pares no array: " + contadorPares);