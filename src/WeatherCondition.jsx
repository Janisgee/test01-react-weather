import React from "react";

export default function WeatherCondition() {
  return (
    <div>
      <h1>New York</h1>
      <ul>
        <li>Saturday 12:00 pm</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-start">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Partly Cloudy"
              />
            </div>
            <div className="float-start">
              <span className="temperature">23</span>
              <span className="units">°C | °F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Sunrise: 05:35</li>
            <li>Sunset: 17:40</li>
            <li>Humidity: 77%</li>
            <li>Wind: 11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
