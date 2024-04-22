let lista = ["morango", "banana", "abacaxi", "arroz", "feijão"];
function preco(a) {
  switch (a) {
    case "morango":
    case "1":
      alert("O preço do morango é R$7,99");
      break;
    case "banana":
    case "2":
      alert("O preço da banana é R$4,99 o Kg");
      break;
    case "abacaxi":
    case "3":
      alert("O preço do abacaxi é R$5,99");
      break;
    case "arroz":
    case "4":
      alert("O preço do arroz é R$12");
      break;
    case "feijão":
    case "5":
      alert("O preço do feijão é R$8,50");
      break;
    default:
      alert("Opção inválida");
      break;
  }
}
do {
  let opcao = prompt(
    "Digite o item que você deseja saber o preço. Para sair basta digitar sair ou 0 \n A lista e os códigos numéricos são: 1-morango, 2-banana, 3-abacaxi, 4-arroz, 5-feijão"
  );
  preco(opcao);
} while (opcao !== "0" || opcao !== "sair");
