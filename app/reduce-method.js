function calculateTotalValueAvailability(books) {
  return books.reduce((acc, book) => acc + book.preco, 0);
}