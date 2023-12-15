const bookTitle = document.getElementById("title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookStatus = document.querySelectorAll('input[name="bookStatus"]');
const btnBookRegister = document.getElementById("btnBookRegister");
const bookInfo = document.getElementById("main");
const dailogBox = document.querySelector("dialog");
const openformDailogBox = document.querySelector(".openFormBtn");
const closeFormDailogBox = document.querySelector("#dailogBoxCloseBtn");
const formGroup = document.getElementsByClassName("formGroup");

openformDailogBox.addEventListener("click", () => dailogBox.showModal());
closeFormDailogBox.addEventListener("click", preventdefaultCloseDialogBox, false);
function preventdefaultCloseDialogBox(pageLoad){
dailogBox.close();
pageLoad.preventDefault();
}
let library = [];
let arrBook = [];
function book(title, author, pages, status) {
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status,
    this.info = function () {
      library.push(this.title, this.author, this.pages, this.status);
     
      for (let i = 1; i <= library.length - 1; i++) {
        arrBook.push(library[i]);
      }
       bookInfo.innerHTML += `<div class="bookBox"><button class="deleteBookBtn">x</button><image class="bookImg" src="assets/book.jpg" /><ul><li><span>Title</span> ${arrBook[0]}</li><li><span>Author</span> ${arrBook[1]}</li>
      <li><span>Pages</span> ${arrBook[2]}</li><li><span>Status</span>   ${arrBook[3]}</li></ul><button class="updateBookBtn">Change Status</button></div>`;
      // if(arrBook.length === 0){
      //   bookInfo.classList.remove("main");
      //   bookInfo.innerHTML = "aaa";
      // }
    };
}


function bookStatusCheck(val){
  for(var radio of val){
    if(radio.checked){
    return radio.value;
    }
  }

}

btnBookRegister.addEventListener("click", addBookToLibrary, false);

function addBookToLibrary(addBtn) { 
const validateLetters = new RegExp("^[A-Za-z0-9 ]+$");
if(validateLetters.test(bookTitle.value) && validateLetters.test(bookAuthor.value) && validateLetters.test(bookPages.value) && bookStatusCheck(bookStatus)){
    const newBook = new book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatusCheck(bookStatus));
    library.push(newBook);
   newBook.info();
  addBtn.preventDefault();
  bookTitle.value = "", bookAuthor.value = ""; bookPages.value = "";
}else{
  alert("empty field and special characters are not allowed");
  addBtn.preventDefault();
}

};

bookInfo.addEventListener("click", bookDelete, updateBookStatus);

function bookDelete(del){
  if(del.target.classList.contains("deleteBookBtn")){
    const deletMsgBox = confirm("Are you sure to delete permanently");
    if(deletMsgBox){
  del.target.parentElement.remove();
  
    }
  }
  
  }

  bookInfo.addEventListener("click", updateBookStatus);
  function updateBookStatus(status){

  if(status.target.classList.contains("updateBookBtn")){
  if(status.target.previousSibling.lastChild.firstChild.nextSibling.textContent === "Unread"){
    status.target.previousSibling.lastChild.firstChild.nextSibling.textContent = " " + "Read";
   
  } else if(status.target.previousSibling.lastChild.firstChild.nextSibling.textContent === " " + "Unread"){
    status.target.previousSibling.lastChild.firstChild.nextSibling.textContent = " " + "Read";
  }
  
  else{
    status.target.previousSibling.lastChild.firstChild.nextSibling.textContent = " " + "Unread";
  }
  }

  }

