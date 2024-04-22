let num1 = parseInt(prompt("Digite o primeiro número."));
let num2 = parseInt(prompt("Digite o segundo número."));
function somarNumeros(a, b) {
  let sum = num1 + num2;
  return sum;
}
soma = somarNumeros(num1, num2);
console.log("A soma dos números é: " + soma);
