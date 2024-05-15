/* eslint-disable react/prop-types */

import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [userPosition, setUserPosition] = useState(null);

  const dummy = [
    {
      date: new Date().toLocaleDateString("pl-PL"),
      maxTemp: 25,
      minTemp: 15,
      energy: 10,
    },
    {
      date: new Date().toLocaleDateString("pl-PL"),
      maxTemp: 33,
      minTemp: 3,
      energy: 10,
    },
    {
      date: new Date().toLocaleDateString("pl-PL"),
      maxTemp: 12,
      minTemp: 23,
      energy: 10,
    },
  ];

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
            `http://127.0.0.1:8000/forecast?latitude=${latitude}&longitude=${longitude}`
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
  }, [userPosition]); // Add userPosition to the dependency array
  
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
          <p>icon: {weatherCode}</p>
          <p>Max: {temperatureMax}</p>
          <p>Min: {temperatureMin}</p>
          <p>Energy: {energy} kWh</p>
        </div>
      </div>
    </div>
  );
}