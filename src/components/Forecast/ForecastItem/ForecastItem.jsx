import './ForecastItem.css';

function ForecastItem({ date, weatherCode, temperatureMax, temperatureMin, energy }) {
  return (
    <div className="forecast-item">
      <img src="weatherIcon.png" alt="Weather Icon" />
      <div>
        <div className="forecast-item-data">
          <h3>{new Date(date).toLocaleDateString("pl-PL")}</h3>
          <p>{temperatureMax}°C | {temperatureMin}°C</p>
          <p>Energy: {energy} kWh</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastItem;
