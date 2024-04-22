let hora = prompt("Digite uma hora no formato HH:MM");

function cumprimento(a) {
  if (a >= 4 && a <= 12) {
    alert("Bom dia");
  } else if (a > 12 && a < 19) {
    alert("Boa tarde");
  } else {
    alert("Boa noite");
  }
}
cumprimento(hora.split(":")[0]);
