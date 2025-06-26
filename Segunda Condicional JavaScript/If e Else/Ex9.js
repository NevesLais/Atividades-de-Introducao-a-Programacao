let hora = 19;

if (hora >= 8 && hora <= 17) {
  console.log("Expediente normal");
} else if (hora >= 18 && hora <= 22) {
  console.log("Hora extra");
} else {
  console.log("Fora do expediente");
}
