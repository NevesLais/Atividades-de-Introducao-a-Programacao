let temp = 35;

if (temp < 0) {
  console.log("Muito Frio");
} else if (temp >= 0 && temp < 15) {
  console.log("Frio");
} else if (temp >= 15 && temp < 25) {
  console.log("Agradável");
} else if (temp >= 25 && temp < 35) {
  console.log("Quente");
} else {
  console.log("Muito Quente");
}