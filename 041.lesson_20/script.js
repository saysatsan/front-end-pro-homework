// GET ELEMENTS
const buttonAddHero = document.querySelector('.addHero');
const heroesForm = document.querySelector('#heroesForm');
const comicsList = document.querySelector('.heroComics');
const heroesTable = document.querySelector('#heroesTable');
const buttonDeleteHero = document.querySelectorAll('.buttonDelete');

// API
const API = 'https://6579f2251acd268f9afa71d7.mockapi.io';
const METHOD = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',	
	DELETE: 'DELETE',
};

async function controller(action, method = METHOD.GET, body) {
	const headers = {
		'Content-type': 'application/json; charset=UTF-8',
	};

	const request = {
		method,
		headers,
	};

	if (body) request.body = JSON.stringify(body);

	const response = await fetch(`${API}/${action}`, request);
	const data = await response.json();

	return data;
}


// GET INFO ABOUT HERO FROM FORM
async function getHeroInfo() {
    const name = document.querySelector('.heroName').value;    
    const comics = await document.querySelector('.heroComics').value;
    const favourite = document.querySelector('.heroFavourite').checked;
  
    const newHeroData = {name, comics, favourite};    
    const heroes = await fetchHeroes();
    
    const foundHero = heroes.find((heroToFind) => heroToFind.name.toLowerCase() === newHeroData.name.toLowerCase());
    
    return foundHero ? console.log('Hero  with that name already exists in the database') :  newHeroData;   
}

// REQUESTS
async function createOptions() {
    const resultOption = await controller('/universes');
           
    resultOption.forEach(comic => {
        const option = document.createElement('option');
        option.value = comic.name;
        option.textContent = comic.name;
        comicsList.append(option);
    }); 
}

async function fetchHeroes() {
    const heroes = await controller('/heroes');
    
    return heroes;
}

async function addHeroToBD(){
    const body = await getHeroInfo();

    if( typeof body === 'object'){
        await controller('/heroes', METHOD.POST, body);
        await renderHeroesTable();
    }
}

async function deleteHero(heroId) {
    await controller(`/heroes/${heroId}`, METHOD.DELETE);
    await renderHeroesTable();
}

async function changeCheckboxValue(heroId){
    const hero = await controller(`/heroes/${heroId}`, METHOD.GET);
    const nowValueFavourite = hero.favourite;
    const newValueFavourite = !nowValueFavourite;
    const body = {
        favourite: newValueFavourite
    };
    
    await controller(`/heroes/${heroId}`, METHOD.PUT, body);    
}

// RENDER TABLE
async function renderHeroesTable() {
    const heroes = await fetchHeroes();
    
    const tbody = document.querySelector('tbody');
    tbody.textContent = '';

    heroes.forEach((hero) => {
        const row = document.createElement('tr');
        row.classList.add(`${hero.id}`);

        const nameCell = document.createElement('td');
        nameCell.textContent = hero.name;

        const comicsCell = document.createElement('td');
        comicsCell.textContent = hero.comics;

        const favouriteCell = document.createElement('td');
        const favouriteLabel = document.createElement('label');
        favouriteLabel.classList.add('heroFavouriteInput');
        favouriteLabel.textContent = 'Favourite: ';
        
        const favouriteCheckbox = document.createElement('input');
        favouriteCheckbox.type = 'checkbox';
        favouriteCheckbox.checked = hero.favourite;

        favouriteCheckbox.addEventListener('click', function() {
            const row = this.closest('tr');
            changeCheckboxValue(row.classList.value);
        }); 

        favouriteLabel.append(favouriteCheckbox);
        favouriteCell.append(favouriteLabel);

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('buttonDelete');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function() {
            const row = this.closest('tr');
            deleteHero(row.classList.value);
        });  
        
        deleteCell.append(deleteButton);       

        row.append(nameCell, comicsCell, favouriteCell, deleteCell);
        tbody.append(row);
    })
}

// EVENT
document.addEventListener('DOMContentLoaded', function () {
    createOptions();
    renderHeroesTable();    
});

buttonAddHero.addEventListener('click', (event) =>{
    event.preventDefault();
    addHeroToBD();  
});

