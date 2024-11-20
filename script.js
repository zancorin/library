const tbody = document.querySelector("tbody");



const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(this.title + " by " + this.author + ", " + this.pages + " pages, " + read);
    };
}

function addBookToLibrary (title, author, pages, read) {

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");

    /*
    th.setAttribute("scope", "row");
    tbody.appendChild(tr);
    tr.appendChild(th);
    th.textContent = "title";
    tr.appendChild(td);
    td.textContent = "gsgsg";
    */
   tbody.appendChild(tr);
   tr.appendChild(th);
   th.setAttribute("scope", "row");
   th.textContent="anything";

  /*  td.textContent = author;*/
}

addBookToLibrary("Game of Thrones", "George R.R. Martin", 5000, "read")
addBookToLibrary("Lord of the Rings", "J.R.R. Tolkien", 2000, "read")
addBookToLibrary("Dune", "Frank Herbert", 50000, "read")

/*console.log(myLibrary[0]);*/
function displayBooks () {
    myLibrary.forEach((book) => {
        console.log(book);
    });
}
displayBooks();