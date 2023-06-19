function applyDiscount(books) {
  const discount = 0.3;
  booksWithDiscount = books.map(book => {
    return {
      ...book, preco: (book.preco - (book.preco * discount)).toFixed(2)
    }
  })
  return booksWithDiscount
}