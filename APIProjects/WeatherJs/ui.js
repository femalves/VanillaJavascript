class UI {
    constructor() {
        this.location = document.getElementById('w-location');

        this.desc = document.getElementById('w-desc');

        this.string = document.getElementById('w-string');

        this.description = document.getElementById('w-description');

        this.details = document.getElementById('w-latlon');

        this.humidity = document.getElementById('w-humidity');

        this.wind = document.getElementById('w-wind');

    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country} `;

        this.desc.textContent = weather.weather[0].main;

        this.string.textContent = ((weather.main.temp * 9/5)-459.67).toFixed(0)+'º F / ' + (weather.main.temp-273.15).toFixed(0)+'º C';

        this.description.textContent = capitalizeFirstLetter(weather.weather[0].description);

        this.details.textContent = `Lon: ${weather.coord.lon}, Lat: ${weather.coord.lat}`

        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;

        this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
        
    }

    
    
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}