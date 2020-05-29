class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    let tableBody = document.getElementById("tableBody");
    let uiString = `
        <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
        </tr>
        `;
    tableBody.innerHTML += uiString;
  }
  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  show(type, mes) {
    let message = document.getElementById("msg");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                     <strong>Message: </strong>${mes}
                                     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                     <span aria-hidden="true">&times;</span>
                             </button>
                            </div>`;
    setTimeout(function () {
      message.innerHTML = ``;
    }, 5000);
  }
}

//Add submit Event Listener to libraryForm:
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submitted library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("Author").value;
  let type;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.cheked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your Book Has Been Successfully Added");
  } else {
    //Show Error to user
    display.show("danger", "Sorry You Cannot Add This Book!");
  }
  e.preventDefault();
}
