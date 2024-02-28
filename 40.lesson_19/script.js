const inputNickname = document.querySelector('.search');
const userInfo = document.querySelector('.userInfo');
const repositoriesInfo = document.querySelector('.repositories_info');
const buttonSearch = document.querySelector('.btn_search');
const buttonRandomSearch = document.querySelector('.btn_random');
const loader = document.querySelector('.loader');

const API = 'https://api.github.com/users';
const token = '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';
const headers = new Headers({
    Authorization: `Bearer ${token}`,
});

function showLoadingMessage(show) {    
    loader.style.display = show ? 'block' : 'none';
}

buttonSearch.addEventListener('click', (event) => { 
    event.preventDefault();

    userInfo.innerHTML = '';    
    repositoriesInfo.innerHTML = '';

    showLoadingMessage(true);

    const nickData = inputNickname.value;
    searchUser(nickData);
})

buttonRandomSearch.addEventListener('click',async (event) => { 
    event.preventDefault();

    userInfo.innerHTML = '';    
    repositoriesInfo.innerHTML = '';

    showLoadingMessage(true);
    const nickData = await getRandomUsername();
    console.log(nickData);
    searchUser(nickData);
})

async function fetchUser(nickName) {
    const request = await fetch(`${API}/${nickName}`);
   
    if (!request.ok) {
        throw new Error('User not found');
    }
    return await request.json();
}

async function fetchRepositories(nickName) {
    const request = await fetch(`${API}/${nickName}/repos`);
    console.log(request);
    if (!request.ok) {
        throw new Error('Repositories not found');
    }
    return await request.json();
}

async function renderUserData(data) {
    userInfo.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.avatar_url}" alt="User Avatar">
        <p>Bio: ${data.bio || 'N/A'}</p>
        <p>Location: ${data.location || 'N/A'}</p>
        <p>Followers: ${data.followers}</p>
    `;
}

function renderRepositories(repositories) {
    if (!Array.isArray(repositories) || repositories.length == 0) {
        repositoriesInfo.innerHTML = '<p>No repositories found.</p>';
        return;
    }

    repositories.forEach((repo) =>{
        const repoCard = document.createElement('div');
        repoCard.classList.add('repo-card');
        repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description'}</p>`;

        repositoriesInfo.append(repoCard); 
    })    
}

async function getRandomUsername() {
    try {
        const response = await fetch(`${API}?since=${Math.floor(Math.random() * 500)}`, headers);
        
        if (!response.ok) {
            throw new Error('Failed to fetch random user');
        }

        const users = await response.json();
        const randomUser = users[Math.floor(Math.random() * users.length)];
        
        return randomUser.login;
    } catch (error) {
        console.error(error);
        return null;
    }
}


async function searchUser(nickName) {
    try {
        const userData = await fetchUser(nickName);                
        const requestRepositories = await fetchRepositories(nickName);

        renderUserData(userData);       
        renderRepositories(requestRepositories);
        
        showLoadingMessage(false);       
    } catch(err) {
        showLoadingMessage(false);

        console.log(err);
        alert(`${err}`);  
    }         
}
