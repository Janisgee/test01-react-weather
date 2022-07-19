import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunTime from "./FormattedSunTime";
import TemperatureConvertion from "./TemperatureConvertion";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCondition(props) {
  const localTimezoneOffset = new Date().getTimezoneOffset() * -60 * 1000;
  return (
    <div>
      <h1>{props.weather.name}</h1>
      <ul>
        <li>
          <FormattedDate
            time={props.weather.time}
            localTimezoneOffset={localTimezoneOffset}
            searchCityTimezoneOffset={props.weather.timezone}
          />
        </li>
        <li className="text-capitalize">{props.weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcon
                code={props.weather.icon}
                description={props.weather.description}
              />
            </div>
            <div className="float-start">
              <TemperatureConvertion
                celsius={Math.round(props.weather.temperature)}
                fahrenheit={
                  (Math.round(props.weather.temperature) * 9) / 5 + 32
                }
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Sunrise:{" "}
              <FormattedSunTime
                time={props.weather.sunrise}
                localTimezoneOffset={localTimezoneOffset}
                searchCityTimezoneOffset={props.weather.timezone}
              />
            </li>
            <li>
              Sunset:{" "}
              <FormattedSunTime
                time={props.weather.sunset}
                localTimezoneOffset={localTimezoneOffset}
                searchCityTimezoneOffset={props.weather.timezone}
              />
            </li>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {props.weather.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
