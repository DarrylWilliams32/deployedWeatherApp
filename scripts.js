const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');


let params = new URLSearchParams({
    access_key: 'b80f7718029ae9b03fc7cc661a0543a7',
    query: 'Cincinnati',
    units: 'f'
});

fetch(`http://api.weatherstack.com/current?${params}`)
.then(res => res.json()).then(console.log);