class WeatherForecastClient {
  constructor(tempscale, location) {
    if (location) {
      this.url = `https://wttr.in/${location}?format=j1`;
    } else {
      this.url = `https://wttr.in/?format=j1`;
    }
    //// this.scale = tempscale;
    this.cacheKey = `weatherData-${this.url}-${this.scale}`;
  }

  async getWeather() {
    const cachedData = localStorage.getItem(this.cacheKey);
    const currentTime = Date.now();

    // Check if cached data exists and is not older than 1 hour
    if (cachedData && currentTime - JSON.parse(cachedData).timestamp < 3600000) {
      return JSON.parse(cachedData);
    } else {
      // Fetch data and store in cache
      // Fetch data from the API
      const response = await fetch(this.url);
      const json = await response.json(); // This already parses the response

      // Extract and process the data
      const temperature = parseInt(json.current_condition[0]["temp_C"]);
      const condition = json.current_condition[0].weatherDesc[0].value.toLowerCase();
      const location = json.nearest_area[0].areaName[0].value;

      const data = {
        temperature,
        condition,
        location,
        timestamp: currentTime,
      };

      localStorage.setItem(this.cacheKey, JSON.stringify(data));
      return data;
    }
  }
}
