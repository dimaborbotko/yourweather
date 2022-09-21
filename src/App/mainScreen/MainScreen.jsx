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

  const uniqueWeatherCard = new Set();
  const unique = weatherInfo.filter((element) => {
    const isDublicate = uniqueWeatherCard.has(element.data.id);
    uniqueWeatherCard.add(element.data.id);
    if (!isDublicate) {
      return true;
    }
    return false;
  });

  const getSavedWeatherCard = () => {
    axios
      .all(linksWithoutDublicates.map((link) => axios.get(link)))
      .then((data) => {
        data.map((result) => setWeatherInfo((prev) => [...prev, result]));
      });
  };

  const handleAddCity = () => {
    if (Object.keys(queryParametr).length > 0) {
      axios
        .get(
          `${URL_WEATHER_API}/weather?q=${queryParametr.q}&appid=${WEAHTER_API}`
        )
        .then((result) => {
          setWeatherInfo((prev) => [...prev, result]);
        });
    }
  };

  const deleteCity = (id, name) => {
    const filteredList = weatherInfo.filter((item) => item.data.id !== id);
    setWeatherInfo(filteredList);
    const filteredLocalStorage = cityList.filter((item) => item !== name);
    setCityList(filteredLocalStorage);
  };

  const reloadCityCard = (name, index) => {
    const updatedInfo = weatherInfo.slice();
    axios
      .get(`${URL_WEATHER_API}/weather?q=${name}&appid=${WEAHTER_API}`)
      .then((result) => {
        updatedInfo.splice(index, 1, result);
        setWeatherInfo(updatedInfo);
        console.log(updatedInfo);
      }); 
  };

  useEffect(() => {
    if (weatherInfo.length === 0) {
      getSavedWeatherCard();
      console.log(linksWithoutDublicates);
    } else if (weatherInfo.length > 0) {
      handleAddCity();
    }
    console.log(unique);
  }, [cityList, queryParametr]);

  useEffect(() => {}, [weatherInfo]);

  return (
    <Container>
      <Row>
        <SearchBar
          setQueryParametr={setQueryParametr}
          setCityList={setCityList}
        />
      </Row>
      <Row>
        <Col>
          {weatherInfo && (
            <CardWeather
              weatherInfo={unique}
              deleteCity={deleteCity}
              reloadCityCard={reloadCityCard}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
