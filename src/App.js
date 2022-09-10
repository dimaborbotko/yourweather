import axios from "axios";
import { useEffect } from "react";
import { URL_WEATHER_API, WEAHTER_API } from "./api";

function App() {
  useEffect(() => {
    axios
      .get(
        `${URL_WEATHER_API}/weather?lat=44.34&lon=10.99&appid=${WEAHTER_API}`
      )
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return (
    <div>
      <p>Hello!</p>
    </div>
  );
}

export default App;
