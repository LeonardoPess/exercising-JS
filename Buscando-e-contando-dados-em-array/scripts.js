/* ### Buscando e contando dados em array

  Baseado no Array de Livros por Categorias abaixo, faça os seguinte desafios
  
    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Auguto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e
    devolver os livros desse autor.

*/

const booksByCategory = [
  {
    category: "Riquesa",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O home mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ]
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ]
  }
]

class Books {
  constructor(booksByCategory , author) {
    this.booksByCategory = booksByCategory;
    this.author = author;
  }

  handleCategory() {
    let categoriesValue = 0;
    this.booksByCategory.forEach((booksCategory) => {
      this.getCategory(booksCategory)
      categoriesValue++;
    });
    console.log("Você tem " + categoriesValue + " categorias")
  }

  getCategory(booksCategory) {
    console.log("category: " + booksCategory.category)
    this.getBooks(booksCategory)
  }

  getBooks(booksCategory) {
    console.log("number of books: " + booksCategory.books.length)
    this.getAuthorBook(booksCategory);
  }

  getAuthorBook(booksCategory) {
    booksCategory.books.forEach((book) => {
      if(book.author == this.author) {
        console.log(this.author + "'s Books: " + book.title);
      }
    })
  }

  init() {
    this.handleCategory();
  }
}

// Just put a name of a author
// and then it will show his books
const books = new Books(booksByCategory, "Stephen R. Covey");
books.init();

