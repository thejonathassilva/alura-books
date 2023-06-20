let buttonOrderByPrice = document.querySelector('#btnOrdenarPorPreco');
buttonOrderByPrice.addEventListener('click', orderByPrice);

function orderByPrice() {
  let orderBooks = books.sort((a, b) => a.preco - b.preco);
  showBooks(orderBooks)
}