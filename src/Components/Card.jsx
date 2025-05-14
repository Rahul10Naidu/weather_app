import React from "react";
import { useWeather } from "../API/Context";

const Card = () => {
  const weather = useWeather();
  return (
    <div className="card bg-warning text-white d-flex flex-column align-items-center gap-3 p-3 shadow">
      {weather.data === null ? (
        ""
      ) : (
        <div>
          <img src={weather.data.current.condition.icon} />
          <h2>{`${weather.data.current.temp_c} °C`}</h2>
          <h3>{`${weather.data.location.name}, ${weather.data.location.country}`}</h3>
        </div>
      )}
    </div>
  );
};

export default Card;
