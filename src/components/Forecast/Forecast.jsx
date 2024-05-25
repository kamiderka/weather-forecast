import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ForecastItem from './ForecastItem/ForecastItem.jsx';
import './Forecast.css'

function Forecast() {

    const forecastData = [
    { date: '2024-05-15T00:00:00+00:00', weatherCode: '1', temperatureMax: 25, temperatureMin: 15, energy: 5.5 },
    { date: '2024-05-16T00:00:00+00:00', weatherCode: '1', temperatureMax: 22, temperatureMin: 14, energy: 5.0 },
    { date: '2024-05-17T00:00:00+00:00', weatherCode: '1', temperatureMax: 18, temperatureMin: 12, energy: 4.8 },
    { date: '2024-05-18T00:00:00+00:00', weatherCode: '1', temperatureMax: 20, temperatureMin: 13, energy: 5.2 },
    { date: '2024-05-19T00:00:00+00:00', weatherCode: '1', temperatureMax: 5, temperatureMin: -2, energy: 6.0 },
    { date: '2024-05-20T00:00:00+00:00', weatherCode: '1', temperatureMax: 19, temperatureMin: 11, energy: 5.3 },
    { date: '2024-05-21T00:00:00+00:00', weatherCode: '1', temperatureMax: 26, temperatureMin: 16, energy: 5.7 },
  ];

  return (
    <Container >
      <Row className='forecast-row'>
        {forecastData.map((data, index) => (
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
