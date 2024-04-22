let lista = ["morango", "banana", "abacaxi", "arroz", "feijão"];
function preco(a) {
  switch (a) {
    case "morango":
      alert("O preço do morango é R$7,99/un");
      break;
    case "banana":
      alert("O preço da banana é R$4,99/Kg");
      break;
    case "abacaxi":
      alert("O preço do abacaxi é R$5,99/un");
      break;
    case "arroz":
      alert("O preço do arroz é R$12/kg");
      break;
    case "feijão":
      alert("O preço do feijão é R$8,50/pct");
      break;
    default:
      alert("Opção inválida");
      break;
  }
}
let item = prompt(
  "Digite um produto para saber o preço. \n Produtos disponíveis: morango, banana, abacaxi e feijão"
);
preco(item.toLowerCase());
