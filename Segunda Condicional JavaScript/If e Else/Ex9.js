let hora = 19; // Você pode mudar a hora para testar

if (hora >= 8 && hora <= 17) {
  console.log("Expediente normal");
} else if (hora >= 18 && hora <= 22) {
  console.log("Hora extra");
} else {
  console.log("Fora do expediente");
}