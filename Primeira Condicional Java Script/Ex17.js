let salario = 2000;
let cargo = "gerente";
let bonus = 0;

if (cargo === "gerente") {
  bonus = salario * 0.10; // 10% de bônus
} else if (cargo === "analista") {
  bonus = salario * 0.05; // 5% de bônus
} else {
  bonus = salario * 0.02; // 2% de bônus para outros cargos
}
console.log("O bônus de salário é: R$" + bonus.toFixed(2));