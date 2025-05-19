import React from "react";
import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useWeather } from "./API/Context";
import { useEffect } from "react";

const App = () => {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentLocation();
  }, []);

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Enter" && !e.repeat) {
        weather.fetchData();
        console.log("Works");
      }
    },
    { once: true }
  );

  return (
    <div
      className="App container bg-info text-white d-grid gap-3 my-5 justify-content-center text-center border p-5 shadow rounded
    "
    >
      <h1>Weather Forecast Site</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button onClick={weather.fetchData} value="Refresh" />
    </div>
  );
};

export default App;
