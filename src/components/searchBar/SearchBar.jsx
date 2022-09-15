import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function SearchBar({ setQueryParametr, setCityList }) {
  const [city, setCity] = useState("");

  const getCityWeather = () => {
    if (city !== "") {
      setQueryParametr({ q: city });
      setCity("");
      setCityList((prev) => [...prev, city]);
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
      <FontAwesomeIcon icon={solid("search")} onClick={getCityWeather} />
    </>
  );
}
