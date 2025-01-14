const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const weatherForm = document.getElementById('weather-form');
const weatherResult = document.getElementById('weather-result');

weatherForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=bd5e378503939ddaee76f12ad7a97608`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
        });
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;

    weatherResult.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Description: ${description}</p>
    `;
}