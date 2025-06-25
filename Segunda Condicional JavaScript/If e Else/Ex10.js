let peso = 7.5; // Em kg. Você pode mudar o peso para testar
let frete;

if (peso <= 1) {
  frete = 10;
} else if (peso > 1 && peso <= 5) {
  frete = 25;
} else {
  frete = 50;
}
console.log("O valor do frete é: R$ " + frete.toFixed(2));