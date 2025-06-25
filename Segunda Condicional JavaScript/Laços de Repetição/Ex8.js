
let senhaCorreta = "1234";
let senhaDigitada = ""; 



let tentativas = ["senhaerrada", "outrasenha", "1234"];
let indiceTentativa = 0;

while (senhaDigitada !== senhaCorreta) {
  senhaDigitada = tentativas[indiceTentativa]; 
  indiceTentativa++;

  if (senhaDigitada === senhaCorreta) {
    console.log("Senha correta! Acesso concedido.");
  } else {
    console.log("Senha incorreta. Tente novamente.");
  }
}