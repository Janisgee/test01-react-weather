import React, { useState } from "react";
import WeatherCondition from "./WeatherCondition";
import axios from "axios";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.city);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function getInputValue(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    setLoaded(true);
    event.preventDefault();
    const apiKey = `4b9efd876f2cf008bb604369b1d1e09f`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setWeather(response.data);
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
        <h2>{city}</h2>
        <WeatherCondition weather={weather} />
      </div>
    );
  } else {
    return (
      <div>
        {form}
        Loading for {city} ...{" "}
      </div>
    );
  }
}
