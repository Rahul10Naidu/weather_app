import { createContext, useContext, useState } from "react";
import { getWaetherDataForCity, getWaetherDataForLocation } from "./index";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWaetherDataForCity(searchCity);
    setData(response);
    console.log("Refreshed!");
  };

  //To Fetch User's current data
  const fetchCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition((positon) => {
      getWaetherDataForLocation(
        positon.coords.latitude,
        positon.coords.longitude
      ).then((data) => setData(data));
    });
  };
  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        setData,
        data,
        fetchData,
        setSearchCity,
        fetchCurrentLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
