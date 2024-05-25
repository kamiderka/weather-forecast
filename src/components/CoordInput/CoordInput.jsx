import { InputGroup, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './CoordInput.css'
import Map from  './Map/Map.jsx'


export function CoordInput() {

    const [modalShow, setModalShow] = useState(false);

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
  

    return (
        <InputGroup className="mb-3 input-group-centered" >
        
        <Button variant="outline-secondary" onClick={() => setModalShow(true)} id="button-addon1">
            <img src="location.png" width="20" height="20"/>
        </Button>

        <Map show={modalShow} onHide={() => setModalShow(false)} />

        <Form.Control aria-label="Latitude" placeholder="Latitude" type='number' defaultValue={userPosition && userPosition.coords.latitude} />
        <Form.Control aria-label="Longitude" placeholder="Longitude" type='number' defaultValue={userPosition && userPosition.coords.longitude} />
        <Button variant="outline-secondary" id="button-addon1">
            Search
        </Button>


      </InputGroup>

      
      );
    
}
