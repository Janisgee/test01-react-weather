import React from "react";
import "./WeatherApp.css";
import SearchForm from "./SearchForm";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container weatherWrapper">
        <SearchForm city="New York" />
      </div>
    </div>
  );
}
