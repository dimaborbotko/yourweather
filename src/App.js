import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { URL_WEATHER_API, WEAHTER_API } from "./api";
import ItemScreen from "./App/itemScreen/ItemScreen";
import MainScreen from "./App/mainScreen/MainScreen";
import Layout from "./components/Layout";

function App() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       `${URL_WEATHER_API}/weather?q=Lviv&appid=${WEAHTER_API}`
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainScreen />}>
            <Route path=":cardId" element={<ItemScreen />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
