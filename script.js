const tbody = document.querySelector("tbody");

let currentbookCount = 3;
let newBookCount = 3;


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(this.title + " by " + this.author + ", " + this.pages + " pages, " + read);
    };
    this.changeReadStatus = function() {
        console.log(this.read);
        if(this.read === "true")
        {
            this.read = "false";
        }
        else if(this.read === "false"){
            this.read = "true";
        }
        console.log(this.read);
       // console.log(this.read);
        //this.read = !(this.read);
       // console.log(this.read);
       // return(this.read);
       /* console.log(this.read);
        this.read = !(this.read);
        console.log(this.read);*/
        //return(!this.read);
    }
    
}

function addBookToLibrary (title, author, pages, read) {

    newBookCount++;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    tbody.replaceChildren();
    displayBooks();
    
}

addBookToLibrary("Game of Thrones", "George R.R. Martin", 5000, "true")
addBookToLibrary("Lord of the Rings", "J.R.R. Tolkien", 2000, "false")
addBookToLibrary("Dune", "Frank Herbert", 50000, "true")

/*console.log(myLibrary[0]);*/
function displayBooks () {
    //console.log(myLibrary.length);
    myLibrary.forEach((book) => {
        const tr = document.createElement("tr");
        const thTitle = document.createElement("th");
        const tdAuthor = document.createElement("td");
        const tdPages = document.createElement("td");
        const tdRead = document.createElement("td");
        const tdBtn = document.createElement("td");
        const btn = document.createElement("button");
    
       tbody.appendChild(tr);
       tr.appendChild(thTitle);
       thTitle.setAttribute("scope", "row");
       tr.appendChild(tdAuthor);
       tr.appendChild(tdPages);
       tr.appendChild(tdRead);
       thTitle.textContent = book.title;
       tdAuthor.textContent = book.author;
       tdPages.textContent = book.pages;
       tdRead.setAttribute("class", "read")
       //tdRead.style.backgroundColor="green";

       tdRead.textContent = book.read;
       tr.appendChild(tdBtn);
       btn.textContent = "Delete";
       tdBtn.appendChild(btn);

       if(book.read==="true")
       {
           tdRead.style.backgroundColor="green";
       }
       else {
           tdRead.style.backgroundColor="red";
       }
       tdRead.addEventListener("mouseover", (event) => {
        tdRead.style.cursor="pointer";
       })
       tdRead.addEventListener("click", (event) => {
       // console.log(book.changeReadStatus());
       
       book.changeReadStatus();
       tdRead.textContent = book.read;
       console.log("book.read= " + book.read);
        if(book.read==="true")
        {
            tdRead.style.backgroundColor="green";
        }
        else {
            tdRead.style.backgroundColor="red";
        }
       })

       tdBtn.addEventListener("click", (event) => {
        console.log("delete this row");
        const index = Array.from(tr.parentNode.children).indexOf(tr);
        console.log(Array.from(tr.parentNode.children).indexOf(tr));
        removeFromArray(index);
        removeFromDom(tr);

        //get child index
       // console.log(myLibrary.from(tr.parentNode.children).indexOf(tr));
        //const index = myLibrary.from(tr.parentNode.children).indexOf(tr);
        //removeFromArray(index);
       // tr.remove();
       })
    });
}

function removeFromDom(tr) {
    tr.remove();  
}

function removeFromArray (index) {
    myLibrary.splice(index, 1);
}

function openDialogModal() {
    
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#addBookBtn");
const closeButton = document.querySelector("#closeBtn");
const submitButton = document.querySelector("#submitBtn");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    console.log(read);
    if(read === true)
    {
        read = "true";
    }
    else {
        read = "false";
    }

        
    addBookToLibrary(title, author, pages, read);

    dialog.close();

    resetFormFields();
})

function resetFormFields()
{
    document.getElementById("addBookForm").reset();
}