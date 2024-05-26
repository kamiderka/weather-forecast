import { InputGroup, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './CoordInput.css';
import MapModal from './MapModal/MapModal.jsx';

export function CoordInput({ setCoordinates }) {
  const [modalShow, setModalShow] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    function getPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      }
    }

    getPosition();
  }, []);

  const handleSearch = () => {
    setCoordinates({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    });
  };

  return (
    <InputGroup className="mb-3 input-group-centered">
      <Button variant="outline-secondary" onClick={() => setModalShow(true)} className='coord-button'>
        <img src="location.png" width="20" height="20" id='location_img' />
      </Button>

      <MapModal show={modalShow} onHide={() => setModalShow(false)}           
          latitude={latitude} 
          longitude={longitude} 
          setLatitude={setLatitude} 
          setLongitude={setLongitude} 
      />

      <Form.Control
        className='coord-input'
        aria-label="Latitude"
        placeholder="Latitude"
        type="number"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <Form.Control
        className='coord-input'
        aria-label="Longitude"
        placeholder="Longitude"
        type="number"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <Button variant="outline-secondary" className='coord-button' onClick={handleSearch}>
        Search
      </Button>
    </InputGroup>
  );
}

export default CoordInput;
