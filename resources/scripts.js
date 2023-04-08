
//creates function to facilitate the weather API
const apiKey = 'YOUR_API_KEY';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&units=metric&appid=${apiKey}`;

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        // Now you can handle the weather data as required
    })
    .catch(error => console.log(error));