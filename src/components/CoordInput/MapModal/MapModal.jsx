import { Modal, Button } from "react-bootstrap";
import { Map } from "./Map/Map.jsx";
import './MapModal.css'

export function MapModal({show, onHide, latitude, longitude, setLatitude, setLongitude }) {  
  
  console.log(latitude)

  return (
    <Modal
      className="map-modal"
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose your location
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Map 
          latitude={latitude} 
          longitude={longitude} 
          setLatitude={setLatitude} 
          setLongitude={setLongitude} 
        />     
      </Modal.Body>
    </Modal>
  );
}

export default MapModal;
