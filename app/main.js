let books = [];
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBooks();

async function getBooks() {
  const response = await fetch(endpoint);
  books = await response.json();
  let booksWithDiscount = applyDiscount(books);
  showBooks(booksWithDiscount);
}