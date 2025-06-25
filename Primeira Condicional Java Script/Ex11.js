let usuarioCorreto = "admin";
let senhaCorreta = "123";

let usuarioDigitado = "admin";
let senhaDigitada = "123";

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
  console.log("Login bem-sucedido!");
} else {
  console.log("Usuário ou senha incorretos.");
}