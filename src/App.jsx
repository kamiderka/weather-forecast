/* eslint-disable react/prop-types */

import "./index.css";
import { useState, useEffect } from "react";
import weatherCode2img from './assets/weatherCode2img.json';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    function getPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserPosition(position);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      }
    }

    getPosition();
  }, []);

  useEffect(() => {
    if (userPosition) {
      const fetchData = async function () {
        try {
          const { latitude, longitude } = userPosition.coords;
          const response = await fetch(
            `https://weather-forecast-api.azurewebsites.net/forecast?latitude=${latitude}&longitude=${longitude}`
          );
  
          if (!response.ok)
            throw new Error("Something went wrong while fetching data!");
  
          const data = await response.json();
          setWeatherData(data);
          console.log(weatherData);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }
  }, [userPosition]);
  
  return (
    <div className="main">
      <div className="title">
        <h1>Weather Forecast for the next 7 days!</h1>
      </div>
      <div className="container">
        {weatherData && weatherData.map((data, i) => (
          <WeatherItem key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;

function WeatherItem({ data }) {
  const { date, weatherCode, temperatureMax, temperatureMin, energy } = data;

  return (
    <div className="weather-item">
      <h3 className="weather-item-date">{new Date(date).toLocaleDateString("pl-PL")}</h3>
      <div>
        <div className="weather-item-data">
          <p> <img src={ weatherCode2img[String(weatherCode)]["image"] } /> </p>
          <p>Max: {temperatureMax}</p>
          <p>Min: {temperatureMin}</p>
          <p>Energy: {energy} kWh</p>
        </div>
      </div>
    </div>
  );
}
