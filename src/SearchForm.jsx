import React, { useState } from "react";
import WeatherCondition from "./WeatherCondition";
import axios from "axios";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      name: response.data.name,
      time: new Date(response.data.dt * 1000),
      timezone: response.data.timezone * 1000,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000,
    });
  }

  function search() {
    const apiKey = `a513b21d78589444326866c8a9a6147f`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function getInputValue(event) {
    setCity(event.target.value);
  }

  const form = (
    <form className="SearchForm mb-3" onSubmit={handleSearch}>
      <div className="row">
        <div className="col-9">
          <input
            type="Search"
            placeholder="Please type a city name ..."
            className="form-control"
            autoFocus="on"
            autoComplete="off"
            onChange={getInputValue}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <WeatherCondition weather={weather} />
      </div>
    );
  } else {
    search();
    return <div>Loading for {city} ... </div>;
  }
}
