let morango = {
  codigo: "1",
  nome: "morango",
  valor: 7.99,
};
let banana = {
  codigo: "2",
  nome: "banana",
  valor: 4.99,
};
let abacaxi = {
  codigo: "3",
  nome: "abacaxi",
  valor: 5.99,
};

let arroz = {
  codigo: "4",
  nome: "arroz",
  valor: 12,
};

let feijao = {
  codigo: "5",
  nome: "feijao",
  valor: 8.5,
};

let lista = [morango, banana, abacaxi, arroz, feijao];
let carrinhoCompras = [];

function consultarPreco() {
  let valorEnviado = document.getElementById("produto").value.toLowerCase();
  let resultado = lista.find(function (produto) {
    return (
      produto.codigo === valorEnviado ||
      produto.nome.toLowerCase() === valorEnviado
    );
  });
  if (resultado) {
    alert("O valor do " + resultado.nome + " é " + resultado.valor);
  } else {
    alert("Produto não encontrado.");
  }
}

function comprarProduto() {
  let valorEnviado = document.getElementById("produto").value.toLowerCase();

  let resultado = lista.find(function (produto) {
    return (
      produto.codigo === valorEnviado ||
      produto.nome.toLowerCase() === valorEnviado
    );
  });

  if (resultado) {
    carrinhoCompras.push({ nome: resultado.nome, valor: resultado.valor });
    alert(`${resultado.nome} adicionado ao carrinho.`);
    listaCarrinho();
    numeroProdutosCarrinho();
    totalCarrinho();
    salvarCarrinho();
  } else {
    alert("Produto não encontrado.");
  }
}

function abrirCarrinho() {
  let soma = 0;
  if (carrinhoCompras.length > 0) {
    carrinhoCompras.forEach(function (item) {
      soma += item.valor;
    });
    alert("O valor total das compras é: R$" + soma);
  } else alert("Carrinho Vazio!");
}

function listaCarrinho() {
  let carrinho = document.getElementById("listaCarrinho");
  carrinho.innerHTML = "";

  carrinhoCompras.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.valor}`;
    carrinho.appendChild(li);
  });
}

function totalCarrinho() {
  let soma = 0;
  carrinhoCompras.forEach(function (item) {
    soma += item.valor;
  });
  document.getElementById("somaCarrinho").textContent = soma;
}

function numeroProdutosCarrinho() {
  document.getElementById("quantidadeProdutos").textContent =
    carrinhoCompras.length;
}

window.addEventListener("load", function () {
  let carrinhoSalvo = this.localStorage.getItem("carrinhoCompras");

  if (carrinhoSalvo) {
    carrinhoCompras = JSON.parse(carrinhoSalvo);
    listaCarrinho();
    numeroProdutosCarrinho();
    totalCarrinho();
  }
});

function salvarCarrinho() {
  localStorage.setItem("carrinhoCompras", JSON.stringify(carrinhoCompras));
}

function limparCarrinho(){
  carrinhoCompras = [];

  localStorage.removeItem("carrinhoCompras");
  listaCarrinho();
  numeroProdutosCarrinho();
  totalCarrinho();
}
