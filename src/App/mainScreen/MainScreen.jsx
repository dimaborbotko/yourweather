import React, { useEffect, useState } from "react";
import { URL_WEATHER_API, WEAHTER_API } from "../../api";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../../components/searchBar/SearchBar";
import axios from "axios";
import CardWeather from "../../components/cardWeather/CardWeather";
import { useLocalStorage } from "../../hook/useLocalStorage";

export default function MainScreen() {
  const [queryParametr, setQueryParametr] = useState({});
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [cityList, setCityList] = useLocalStorage("cities", []);

  const linksGetWeather = cityList.map((city) => {
    return `${URL_WEATHER_API}/weather?q=${city}&appid=${WEAHTER_API}`;
  });
  const linksWithoutDublicates = [...new Set(linksGetWeather)];

  const getSavedWeatherCard = () => {
    axios
      .all(linksWithoutDublicates.map((link) => axios.get(link)))
      .then((data) => {
        data
          .filter((cityItem) => {
            return cityItem.data.name !== cityList.map((city) => city);
          })
          .map((result) => setWeatherInfo((prev) => [...prev, result]));
      }); 
    console.log(weatherInfo);
  }; 

  useEffect(() => {
    getSavedWeatherCard();
    console.log(linksWithoutDublicates);
  }, [queryParametr.q]);

  return (
    <Container>
      <Row>
        <SearchBar
          setQueryParametr={setQueryParametr}
          setCityList={setCityList}
        />
      </Row>
      <Row>
        <Col>{weatherInfo && <CardWeather weatherInfo={weatherInfo} />}</Col>
      </Row>
    </Container>
  );
}
