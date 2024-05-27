import Form from "react-bootstrap/Form";

function ToggleSwitch() {
  return (
    <Form>
      <Form.Check type="switch" id="custom-switch" label="Dark mode" />
    </Form>
  );
}

export default ToggleSwitch;
