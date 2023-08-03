import React from "react";

const WeatherCard = ({ dayData }) => {
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  return (
    <li className="p-3 text-center flex flex-col shrink-0 m-2 shadow-md rounded border border-solid border-slate-50 grow bg-base-200">
            <p className="text-lg">{weekday[new Date(dayData.dt * 1000).getDay()]}</p>
      <p className="whitespace-nowrap text-xs">
        {(dayData.pop * 100).toFixed(0)}%
      </p>
      <img
        src={`https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`}
        alt={dayData.weather[0].description}
      />
      <p className="whitespace-nowrap text-s">{dayData.temp.max.toFixed(0)} °C</p>
      <p className="whitespace-nowrap text-xs">{dayData.temp.min.toFixed(0)} °C</p>
    </li>
  );
};

export default WeatherCard;
