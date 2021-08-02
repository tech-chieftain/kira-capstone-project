import { Form, Row, Col, Button } from "react-bootstrap";
import Container from "./ContactUs.styled";

const ContactUs = () => (
  <Container className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
    <h1>Contact us</h1>
    <Form className="form">
      <Row xs={1} md={3}>
        <Col className="mb-md-5 mb-sm-3">
          <Form.Group>
            <Form.Label>Fullname</Form.Label>
            <Form.Control className="label shadow" name="fullname" placeholder="Full name" />
          </Form.Group>
        </Col>
        <Col className="mb-md-5 mb-sm-3">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control className="label shadow" name="email" type="email" placeholder="Email" />
          </Form.Group>
        </Col>
        <Col className="mb-md-5 mb-sm-5">
          <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control className="label shadow" name="number" type="tel" placeholder="Phone" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Control
        as="textarea"
        placeholder="Leave a messsage"
        name="message"
        className="message shadow"
      />
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" type="submit" className="px-5 py-2 my-2 rounded-pill">
          Send
        </Button>
      </div>
    </Form>
  </Container>
);

export default ContactUs;
