import React, { useState } from "react";

export default function SearchBar({ setQueryParametr, setCityList }) {
  const [city, setCity] = useState("");

  const getCityWeather = () => {
    if (city !== "") {
      setQueryParametr({ q: city });
      setCityList((prev) => [...prev, city]);
      setCity("");
    }
    console.log(city);
  };

  return (
    <>
      <input
        placeholder="Enter a city..."
        onChange={(e) => setCity(e.currentTarget.value)}
        value={city}
      />
      <button onClick={getCityWeather}>Get weather</button>
    </>
  );
}
