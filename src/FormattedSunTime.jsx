import React from "react";

export default function FormattedSunTime(props) {
  const time = props.time;
  const localTimezoneOffset = props.localTimezoneOffset;
  const searchCityTimezoneOffset = props.searchCityTimezoneOffset;

  const formattedSunTime = new Date(
    time - localTimezoneOffset + searchCityTimezoneOffset
  );

  let hours = formattedSunTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = formattedSunTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {hours}:{minutes}
    </span>
  );
}
