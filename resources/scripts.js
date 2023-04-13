const container = document.querySelector('.container');
const search = document.querySelector('.zip-search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = 'b80f7718029ae9b03fc7cc661a0543a7';
    const zipCode = document.querySelector('.zip-search-box input').value;

    if (zipCode === '')
        return;

    fetch(`http://api.weatherstack.com/current?q=${zipCode}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            /**This will create the image switching based on weather reported */
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'resources/images/icons8-sun-96.png';
                    break;

                case 'Rain':
                    image.src = 'resources/images/icons8-storm-with-heavy-rain-96.png';
                    break;

                case 'Snow':
                    image.src = 'resources/images/icons8-snow-storm-96.png';
                    break;

                case 'Clouds':
                    image.src = 'resources\images\icons8-partly-cloudy-day-96.png';
                    break;

                case 'Haze':
                    image.src = 'resources/images/icons8-fog-96.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });


});
