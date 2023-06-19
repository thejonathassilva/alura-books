let books = [];
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
let section = document.querySelector('#livros');

getBooks() 

async function getBooks() {
  const response = await fetch(endpoint);
  books = await response.json();
  console.log(books)
  showBooks(books)  
}

function showBooks(bookList) {
  bookList.forEach(book => {
    if(book.quantidade > 0) {
      section.innerHTML += `<div class="livro">
      <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>`
    } else {
      section.innerHTML += `<div class="livro">
      <img class="livro__imagens indisponivel" src="${book.imagem}"
        alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$ ${book.preco}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>`
    }
  });
}

{/* <div class="livro">
      <img class="livro__imagens" src="imagens/Cangaceiro-Javascript.png" alt="Capa do livro Cangaceiro JavaScript" />
      <h2 class="livro__titulo">
        Cangaceiro JavaScript:
        Uma aventura no sertão da programação
      </h2>
      <p class="livro__descricao">Flávio Almeida</p>
      <p class="livro__preco" id="preco">R$29,90</p>
      <div class="tags">
        <span class="tag">Front-end</span>
      </div>
    </div> */}


    // <div class="livro">
    //   <img class="livro__imagens indisponivel" src="imagens/O-Retorno-do-cangaceiro-JavaScript.png"
    //     alt="Capa do livro O Retorno do Cangaceiro JavaScript+" />
    //   <h2 class="livro__titulo">
    //     Cangaceiro JavaScript +:
    //     O Retorno do cangaceiro JavaScript
    //   </h2>
    //   <p class="livro__descricao">Flávio Almeida</p>
    //   <p class="livro__preco" id="preco">R$29,90</p>
    //   <div class="tags">
    //     <span class="tag">Front-end</span>
    //   </div>
    // </div>