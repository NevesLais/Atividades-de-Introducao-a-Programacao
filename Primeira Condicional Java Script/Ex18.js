let letra = "e";
letra = letra.toLowerCase(); // Converte para minúscula para facilitar a comparação

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("A letra digitada é uma vogal.");
} else {
  console.log("A letra digitada é uma consoante ou outro caractere.");
}