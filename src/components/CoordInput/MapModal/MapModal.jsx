import { Modal, Button } from "react-bootstrap";
import { Map } from "./Map/Map.jsx";

export function MapModal(props) {  
    
  return (
    <Modal
      {...props}
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
        <Map />     
      </Modal.Body>
    </Modal>
  );
}

export default MapModal;
