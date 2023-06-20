const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', searchedBooks))

function searchedBooks() {
  const elementButton = document.querySelector(`#${this.id}`);
  if(elementButton) {
    const category = elementButton.value;
    let selectedCategory = category == 'disponivel' ? filterByAvailability() : filterByCategory(category)
    showBooks(selectedCategory);
    if (category == 'disponivel') {
      const totalValue = calculateTotalValueAvailability(selectedCategory);
      showTotalValue(totalValue.toFixed(2));
    }
  }
}

function filterByCategory(category) {
  return books.filter(book => book.categoria == category);
}

function filterByAvailability() {
  return books.filter(book => book.quantidade > 0);
}

function showTotalValue(totalValue) {
  elementWithTotalValue.innerHTML = `<div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
</div>`
}
 