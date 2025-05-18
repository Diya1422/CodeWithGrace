const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'db837532278e7cd8b73cdec9918eed93'; // Replace with your API key
const locationInput = document.getElementById('location');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const getWeatherBtn = document.getElementById('get-weather-btn');

getWeatherBtn.addEventListener('click', getWeatherData);

function getWeatherData() {
    const city = prompt('Enter city name:');
    if (city) {
        const url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                locationInput.textContent = data.name;
                weatherDescription.textContent = data.weather[0].description;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            })
            .catch(error => console.error(error));
    }
}

