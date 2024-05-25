import Form from 'react-bootstrap/Form';

function ToggleSwitch() {
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Dark mode"
      />
    </Form>
  );
}

export default ToggleSwitch;