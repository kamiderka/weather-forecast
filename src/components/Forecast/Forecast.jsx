import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ForecastItem from "./ForecastItem/ForecastItem.jsx";
import "./Forecast.css";

function Forecast({ coordinates }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (coordinates) {
      const fetchData = async function () {
        try {
          const { latitude, longitude } = coordinates;
          const response = await fetch(
            `https://weather-forecast-api.azurewebsites.net/forecast?latitude=${latitude}&longitude=${longitude}`,
          );

          if (!response.ok)
            throw new Error("Something went wrong while fetching data!");

          const data = await response.json();
          setForecastData(data);
          console.log(forecastData);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }
  }, [coordinates]);

  return (
    <Container>
      <Row className="forecast-row">
        {forecastData &&
          forecastData.map((data, index) => (
            <Col key={index}>
              <ForecastItem
                date={data.date}
                weatherCode={data.weatherCode}
                temperatureMax={data.temperatureMax}
                temperatureMin={data.temperatureMin}
                energy={data.energy}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Forecast;
