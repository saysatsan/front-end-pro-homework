const APISEARCH = 'https://openlibrary.org/search.json?q=';
const APIIMAGES = 'https://covers.openlibrary.org/b/id/';

const buttonSearch = document.querySelector("button");
const books_wrapper = document.querySelector('.book_cards');
const bigWrapper = document.querySelector('.big_wrapper');
const loadingMessage = document.querySelector('#loading-message');

const buttonMore = document.createElement('button');
buttonMore.classList.add('button_more');
buttonMore.type = 'button';
buttonMore.innerText = 'show more';

let page = 1;
const limit = 15;
let searchParameter = ''; 

function renderCard (dataAboutBooks){
    dataAboutBooks.docs.forEach((book) =>{
        const bookId = book.cover_i;

        const imageBook = document.createElement('img');
        imageBook.classList.add('imageBook');
        imageBook.alt = 'imageBook';
       
        if(bookId == undefined){
            imageBook.src = 'book.png';
        } else{
            fetch(`${APIIMAGES}${bookId}-M.jpg`)
            .then(response =>{
                imageBook.src = `${response.url}`;                    
            });
        }

        const bookCard = document.createElement('div');
        bookCard.classList.add('book_card');

        const title = document.createElement('h2');
        title.classList.add('book_title');
        title.innerText = book.title;

        const author = document.createElement('h3');
        author.classList.add('book_title');
        author.innerText = book.author_name;        

        bookCard.append(imageBook, title, author );        
        books_wrapper.append(bookCard);        
    });    

    bigWrapper.append(buttonMore);
}

buttonSearch.addEventListener('click', (event) =>{
    event.preventDefault();

    books_wrapper.innerHTML = '';

    showLoadingMessage(true);

    const searchValue = document.querySelector(".search").value;
    searchParameter = searchValue.split(' ').join('+');  
    page = 1;
    requestToLibrary(searchParameter); 
});

function requestToLibrary(searchParameter) {
    const currentPage = page;

    if(searchParameter){
        fetch(`${APISEARCH}${searchParameter}&limit=${limit}&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {             
            renderCard (data);            
            showLoadingMessage(false);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            showLoadingMessage(false);
        });
    } else {
        searchParameter = '';
        fetch(`${APISEARCH}*&limit=${limit}&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {            
            renderCard(data);            
            showLoadingMessage(false);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            showLoadingMessage(false);
        });   
    }  
}

function showLoadingMessage(show) {    
    loadingMessage.style.display = show ? 'block' : 'none';
}

buttonMore.addEventListener('click', () => showMore(searchParameter));

function showMore(searchParameter) {
    buttonMore.removeEventListener('click', showMore);    
    page++;
    showLoadingMessage(true);
    requestToLibrary(searchParameter);
}

document.addEventListener('DOMContentLoaded', () => {
    requestToLibrary('');
});




