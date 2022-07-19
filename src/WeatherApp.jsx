import React from "react";

import SearchForm from "./SearchForm";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container weatherWrapper">
        <SearchForm defaultCity="Hong Kong" />
      </div>
      <div className="openSourced">
        This project was coded by{" "}
        <a
          href="http://www.linkedin.com/in/jc-janis-chan"
          title="Janis's LinkedIn"
        >
          Janis Chan
        </a>{" "}
        and is{" "}
        <a href="https://github.com/Janisgee" title="Janis's Github">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://app.netlify.com/teams/janisgee/overview"
          title="Janis's Netlify"
        >
          hosted on Netlify
        </a>
        .
      </div>
    </div>
  );
}
