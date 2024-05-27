import { InputGroup, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './CoordInput.css';
import MapModal from './MapModal/MapModal.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    if (latitude < -90.0 || latitude > 90.0){
      toast("Latitude should be in range <-90°:90°>")
       
    } else if (longitude < -180.0 || longitude > 180.0){
      toast("Longitude should be in range <-180°:180°>")
       
    } else {
    setCoordinates({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    });
    }
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
      <ToastContainer position='top-left'/>

    </InputGroup>
  );
}

export default CoordInput;
