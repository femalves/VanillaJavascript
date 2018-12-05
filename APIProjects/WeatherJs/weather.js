class Weather {
    constructor(city, country) {
        this.apiKey = '21a753dcee5add6cc89443ef2922e34d';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API 
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`)


        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}