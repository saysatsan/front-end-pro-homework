const weatherInfoWrapper = document.querySelector('.weatherInfo');
const cityInput = document.querySelector('.search');
const buttonOk = document.querySelector('button');
const directions = ['Північний', 'Північно-західний', 'Західний', 'Південно-західний', 'Південний', 'Південно-східний', 'Східний', 'Північно-східний'];

class WeatherInfo{
    constructor(data){
        this.data = data;
    }

    renderWeather(){
        const{name, main, wind, weather} = this.data;

        const tempData = Math.round(main.temp);
        const pressureData = parseFloat(main.pressure);
        const descriptionData = weather[0].description;
        const humidityData = main.humidity;
        const speedData = wind.speed;
        const iconData = weather[0].icon;

        const degData = wind.deg;
        const index =  Math.round(degData / 45) % 8;
        const degToDirection = directions[index];

        



        const nameCity = document.createElement('h2');
        nameCity.classList.add('nameCity');
        nameCity.innerText = `${name}`;

        const temp = document.createElement('h3');
        temp.classList.add('info');
        temp.innerText = `Температура: 
        ${tempData}\u00B0C`;

        const pressure = document.createElement('h3');
        pressure.classList.add('info');
        pressure.innerText = `Атмосферний тиск: 
        ${pressureData}гПа`;

        const description = document.createElement('h3');
        description.classList.add('info');
        description.innerText = `${descriptionData}`;

        const humidity = document.createElement('h3');
        humidity.classList.add('info');
        humidity.innerText = `Вологість: 
        ${humidityData}%`;

        const windBlock = document.createElement('div'); 
        windBlock.classList.add('info');      
        windBlock.innerHTML = `
        <h3>Швидкість вітру:</br>
        ${speedData}%</br></br>
        Напрямок вітру:</br>
        ${degToDirection}</h3>`;

        const icon = document.createElement('img');
        icon.alt = 'icon weather';
        icon.src = `http://openweathermap.org/img/wn/${iconData}@2x.png`;

        weatherInfoWrapper.append(nameCity, icon, description, temp, humidity, pressure, windBlock);
    }
}

buttonOk.addEventListener('click', (event) => { 
    event.preventDefault();  
    const cityName = cityInput.value;
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=uk&units=metric&APPID=5d066958a60d315387d9492393935c19`;   
    requestToWeatherApi(api);    
})

async function requestToWeatherApi(api) {
    try {
		const request = await fetch(api);
		const data = await request.json();
		renderWeatherInfo(data);
	} catch(err) {
		console.log(err);
	}    
}

function renderWeatherInfo(data) {
    weatherInfoWrapper.innerHTML = '';

    const newWeather = new WeatherInfo(data);
    newWeather.renderWeather();
}

