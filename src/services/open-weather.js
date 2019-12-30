const API_KEY = 'YOUR_API_KEY';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=Torun,pl`

async function fetchWeather() {
    const response = await fetch(API_URL);
    const result = await response.json();

    return mapOpenWeatherToDomainModel(result);
}

async function fetchWeatherForSpecifiedCity(cityName) {
    const API_URL_TMP = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=${cityName},pl`;
    const response =  await fetch(API_URL_TMP);
    const result = await response.json();

    return mapOpenWeatherToDomainModel(result);
}

function mapOpenWeatherToDomainModel(data) {
    return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        iconId: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        cloudiness: data.clouds.all,
    };
}

export { fetchWeather, fetchWeatherForSpecifiedCity };
