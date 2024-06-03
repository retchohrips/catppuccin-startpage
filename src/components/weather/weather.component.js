class Weather extends Component {
  refs = {
    temperature: ".weather-temperature-value",
    condition: ".weather-condition-icon",
    scale: ".weather-temperature-scale",
    location: ".weather-temperature-location",
  };

  forecasts = [
    {
      conditions: ["cloudy", "partlycloudy", "verycloudy"],
      icon: "cloud-filled",
      color: "cloudy",
    },
    {
      conditions: ["fog"],
      icon: "cloud-fog",
      color: "cloudy",
    },
    {
      conditions: ["heavyrain", "heavyshowers", "lightrain", "lightshowers"],
      icon: "droplet-filled",
      color: "cloudy",
    },
    {
      conditions: ["clear", "sunny"],
      icon: "sun-filled",
      color: "sunny",
    },
    {
      conditions: ["thunderyheavyrain", "thunderyshowers", "thunderysnowshowers"],
      icon: "cloud-storm",
      color: "cloudy",
    },
    {
      conditions: ["heavysnow", "heavysnowshowers", "lightsnow", "lightsnowshowers"],
      icon: "snowflake",
      color: "cloudy",
    },
  ];

  constructor() {
    super();

    this.setDependencies();
    this.setEvents();
  }

  setEvents() {
    this.onclick = this.swapScale;
  }

  setDependencies() {
    this.temperatureScale = CONFIG.temperature.scale;
    this.weatherForecast = new WeatherForecastClient(this.temperatureScale);
  }

  imports() {
    return [this.resources.icons.tabler, this.resources.fonts.roboto];
  }

  style() {
    return `
      .weather-icon {
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .weather-temperature {
          font: 300 9pt 'Roboto', sans-serif;
          color: #cdd6f4;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
      }

      .weather-temperature:hover .weather-temperature-location {
          display: inline-block;
      }

      .weather-temperature-location {
          display: none;
          margin-right: 10px;
      }

      .weather-temperature-location {
          font-weight: 500;
      }

      .weather-temperature-value
      {
          font-weight: bold;
      }

      .weather-condition-icon {
          font-size: 14pt;
          line-height: 0;
      }

      .weather-condition-icon.sunny {
          color: #f9e2af;
      }

      .weather-condition-icon.cloudy {
          color: #89b4fa;
      }
    `;
  }

  async template() {
    return `
        <p class="+ weather-temperature">
            <span class="weather-icon" class="+"><i class="ti weather-condition-icon sunny ti-sun-filled"></i></span>
            <span class="weather-temperature-location"></span>
            <span class="weather-temperature-value">1</span>
            º<span class="weather-temperature-scale">${this.temperatureScale}</span>
        </p>`;
  }

  toC(f) {
    return Math.round(((f - 32) * 5) / 9);
  }

  toF(c) {
    return Math.round((c * 9) / 5 + 32);
  }

  swapScale() {
    this.temperatureScale = this.temperatureScale === "C" ? "F" : "C";

    CONFIG.temperature = {
      ...CONFIG.temperature,
      scale: this.temperatureScale,
    };
    this.setTemperature();
  }

  convertScale(temperature) {
    if (this.temperatureScale === "F") return this.toF(temperature);

    return temperature;
  }

  async setWeather() {
    this.weather = await this.weatherForecast.getWeather();
    this.setTemperature();
  }

  setTemperature() {
    const { temperature, condition, location } = this.weather;
    const { icon, color } = this.getForecast(condition);

    this.refs.temperature = this.convertScale(temperature);
    this.refs.condition.classList.remove("ti-sun-filled");
    this.refs.condition.classList.add("ti-" + icon);
    this.refs.scale = this.temperatureScale;
    this.refs.condition.classList.add(color);
    this.refs.location = location;
  }

  getForecast(condition) {
    for (const forecast of this.forecasts) if (forecast.conditions.includes(condition)) return forecast;

    return this.forecasts[0];
  }

  async connectedCallback() {
    await this.render();
    await this.setWeather();
  }
}
