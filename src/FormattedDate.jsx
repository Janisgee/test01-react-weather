import React from "react";

export default function FormattedDate(props) {
  const time = props.time;
  const localTimezoneOffset = props.localTimezoneOffset;
  const searchCityTimezoneOffset = props.searchCityTimezoneOffset;
  const adjustedTime = new Date(
    time - localTimezoneOffset + searchCityTimezoneOffset
  );

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[adjustedTime.getDay()];
  let hours = adjustedTime.getHours();
  const ampm = hours < 12 ? "am" : "pm";
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours > 12) {
    hours = `${hours - 12}`;
  }
  let minutes = adjustedTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes} {ampm}
    </div>
  );
}
