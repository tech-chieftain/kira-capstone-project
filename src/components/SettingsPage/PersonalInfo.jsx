import { Form, Row, Col, FloatingLabel } from "react-bootstrap";

// eslint-disable-next-line arrow-body-style
const PersonalInfo = ({ showPersonal }) => {
  return (
    <>
      {showPersonal && (
        <Form>
          <Row className="mb-4">
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Form.Control placeholder="Username" className="mb-4" />
          <Form.Control type="email" placeholder="Email" className="my-4" />
          <Form.Control type="password" placeholder="Password" className="my-4" />
          <Form.Control placeholder="Phone number" className="my-4" />
          <Form.Control placeholder="Location" className="mt-4" />
        </Form>
      )}
    </>
  );
};

export default PersonalInfo;
