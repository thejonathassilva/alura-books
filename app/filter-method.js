const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', searchedBooks))

function searchedBooks() {
  const elementButton = document.querySelector(`#${this.id}`);
  if(elementButton) {
    const category = elementButton.value;
    let selectedCategory = category == 'disponivel' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria == category)
    showBooks(selectedCategory);
  }
}

 