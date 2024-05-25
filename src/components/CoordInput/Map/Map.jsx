import { Modal, Button } from "react-bootstrap";

export function Map(props) {  
    
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
      <img src="map.png" width="100%"/>      
      </Modal.Body>
    </Modal>
  );
}

export default Map;
