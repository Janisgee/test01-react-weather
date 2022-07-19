import React, { useState } from "react";

export default function TemperatureConvertion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit} className="active">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius} className="active">
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
