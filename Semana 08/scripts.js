function adicionarAtributo() {
  let elemento = document.getElementById("semAtributo");
  elemento.setAttribute("class", "novaClasse");
  elemento.textContent = "Atributo class adicionado"
}

function removerAtributo() {
  let elemento = document.getElementById("semAtributo");
  elemento.removeAttribute("class")
  elemento.textContent = "Atributo class Removido";
}
