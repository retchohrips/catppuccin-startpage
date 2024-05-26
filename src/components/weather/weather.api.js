class WeatherForecastClient {
  constructor(tempscale, location) {
    if (location) {
      this.url = `https://wttr.in/${location}?format=j1`;
    } else {
      this.url = `https://wttr.in/?format=j1`;
    }
    this.scale = tempscale;
  }

  async getWeather() {
    return await fetch(this.url)
      .then((res) => res.json())
      .then((json) => JSON.stringify(json))
      .then((json) => JSON.parse(json))
      .then((data) => {
        const temperature = parseInt(data.current_condition[0]["temp_" + this.scale]);
        const condition = data.current_condition[0].weatherDesc[0].value.toLowerCase();
        const location = data.nearest_area[0].areaName[0].value;

        return {
          temperature,
          condition,
          location,
        };
      })
      .catch((err) => console.warn("Weather API returned an error:", err));
  }
}
