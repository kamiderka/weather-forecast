import "./ForecastItem.css";
import weatherIcons from "../../../assets/weatherIcons";

function ForecastItem({
  date,
  weatherCode,
  temperatureMax,
  temperatureMin,
  energy,
}) {
  return (
    <div className="forecast-item">
      <img src={weatherIcons[weatherCode]} alt="Weather Icon" />
      <div>
        <div className="forecast-item-data">
          <h3>{new Date(date).toLocaleDateString("pl-PL")}</h3>
          <p>
            {temperatureMax}°C | {temperatureMin}°C
          </p>
          <p>Energy: {energy} kWh</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastItem;
