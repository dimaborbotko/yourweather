import React from "react";

export default function CardWeather({ weatherInfo, deleteCity }) {
  return (
    <>
      {weatherInfo.map((weatherData) => {
        const {
          id,
          coord: { lat, lon },
          main: { temp, feels_like, temp_min, temp_max, humidity },
          name,
          dt,
          sys: { country, sunrise, sunset },
          weather,
          wind: { speed },
        } = weatherData?.data;
        return (
          <div key={id}>
            <div style={{ border: "1px solid blue" }}>
              <h1>{name}</h1>
              <p>{temp}</p>
              <p>{feels_like}</p>
              <p>{country}</p>
              <div>
                <button onClick={() => deleteCity(id, name)}>delete</button>
                <button>reload</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
