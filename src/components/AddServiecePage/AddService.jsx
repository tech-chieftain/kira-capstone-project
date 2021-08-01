import React, { useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { Container, MainContainer, Bubbles } from "./AddService.styled";

// eslint-disable-next-line arrow-body-style
const AddService = () => {
  const [images, setImages] = useState([]);
  const [perks, setPerks] = useState([]);

  const handleChange = (set) => (e) => {
    set(e.target.value.split("\n"));
  };

  const handleSave = (e) => {
    e.preventDefault();
  };

  const arrayToString = (arr) => arr.join("\n");

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <MainContainer>
        <h1 className="text-primary m-3">Build Your Service</h1>
        <Card className="card shadow">
          <Card.Body>
            <Form onSubmit={handleSave}>
              <Form.Group>
                <Form.Label>Service Title</Form.Label>
                <Form.Control placeholder="Tile" className="mb-4" name="title" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Service Images</Form.Label>
                <Form.Control
                  as="textarea"
                  value={arrayToString(images)}
                  onChange={handleChange(setImages)}
                  name="images"
                  placeholder="Add images that best shaowcase your service"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Set a price for your service"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="describtion"
                  placeholder="Briefly describe your service"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  as="textarea"
                  name="details"
                  placeholder="Describe your service with details"
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Delivery Time</Form.Label>
                  <Form.Control type="number" name="delivery" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Number Of Revisions</Form.Label>
                  <Form.Control type="number" name="price" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Perks</Form.Label>
                <Form.Control
                  as="textarea"
                  value={arrayToString(perks)}
                  onChange={handleChange(setPerks)}
                  name="perks"
                  placeholder="Make your service more intresting"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <div className="d-flex justify-content-end mt-4">
                <Button variant="primary" type="submit" className="px-5 m-2">
                  Save
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </MainContainer>
      <Bubbles>
        <div className="uper-big" />
        <div className="uper-small" />
        <div className="left-small" />
        <div className="right-small" />
        <div className="bottom-big" />
        <div className="bottom-small" />
      </Bubbles>
    </Container>
  );
};

export default AddService;
