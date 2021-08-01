/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import { Form, Row, Col, Button } from "react-bootstrap";

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
          <Form.Control placeholder="profile picture link" className="mt-4" />
          <div className="d-flex justify-content-end mt-4">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      )}
    </>
  );
};

export default PersonalInfo;
