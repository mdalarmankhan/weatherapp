class API {
    static getWeatherData(cityName) {
        const api_key = 'bba2cad8840f9f6cc9759a71071334d4';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`;
        return fetch(url).then(response => response.json());
    }
}

export default API;