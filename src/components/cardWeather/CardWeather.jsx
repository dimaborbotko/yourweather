import React from "react";
import { useEffect } from "react";

export default function CardWeather({ weatherInfo }) {
  return (
    <>
      {weatherInfo.map((weatherData, id) => {
        const {
          coord: { lat, lon },
          main: { temp, feels_like, temp_min, temp_max, humidity },
          name,
          dt,
          sys: { country, sunrise, sunset },
          weather,
          wind: { speed },
        } = weatherData?.data;
        return (
          <div key={id} style={{ border: "1px solid blue" }}>
            <h1>{name}</h1>
            <p>{temp}</p>
            <p>{feels_like}</p>
            <p>{country}</p>
          </div>
        );
      })}
    </>
  );
}
