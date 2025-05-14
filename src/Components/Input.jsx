import React from "react";
import { useWeather } from "../API/Context";

const Input = () => {
  const weather = useWeather();
  return (
    <div>
      <input
        className="input border-0 shadow-sm fs-3 m-2 rounded"
        placeholder="London"
        onChange={(e) => weather.setSearchCity(e.target.value)}
        value={weather.searchCity}
      />
    </div>
  );
};

export default Input;
