/*Defines DOM elements for use in function*/
const container = document.querySelector('.container');
const search = document.querySelector('.zip-search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
var image = document.querySelector('weatherBox.Image');
var temperature = document.querySelector('.temperature');
var description = document.querySelector('weatherBox .description');
var humidity = document.querySelector('.weather-details .humidity span');
var wind = document.querySelector('.weather-details .wind');

/*creates a function to fetch data from API*/
const APIKey = 'b80f7718029ae9b03fc7cc661a0543a7';
const zipCode = document.querySelector('.zip-search-box input').value;
let params = new URLSearchParams({
    APIKey,
    zipCode,
    units: 'f'
});

/*this will create the functionality to change the DOM*/
search.addEventListener('click', () => {

    
fetch(`http://api.weatherstack.com/current?${params}&contentType=json`) 
    .then(response => response.json())
    /*parses the json data for use in a function*/
    .then(json => {
        if (json.cod === '404_not_found') {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        // Update DOM with weather data
        switch (json.res) {
            case 'Clear':
                image.src = 'resources/images/icons8-sun-96.png';
                break;

            case 'Rain':
                image.src = 'resources/images/icons8-storm-with-heavy-rain-96.png';
                break;

            case 'Snow':
                image.src = 'resources/images/icons8-snow-storm-96.png';
                break;

            case 'Overcast':
                image.src = 'resources/images/icons8-partly-cloudy-day-96.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';
                break;
                }
                
temperature.innerHTML = `${parseInt(response.temperature)}<span>°F</span>`;
description.innerHTML = `${response.weather_descriptions[0]}`;
humidity.innerHTML = `${response.humidity}%`;
wind.innerHTML = `${parseInt(response.wind_speed)}mph`;
    });


weatherBox.style.display = 'none';
weatherDetails.style.display = 'none';
weatherBox.classList.add('fadeIn');
weatherDetails.classList.add('fadeIn');
container.style.height = '590px';
});