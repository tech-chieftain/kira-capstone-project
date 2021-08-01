import { Row, Col, Form, Card, Button } from "react-bootstrap";
import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(193, 193, 174, 0.09);
  padding-bottom: 3rem;
`;

const MainContainer = styled.div`
  width: 58rem;
  heigh: 100%;
  margin: 0 auto;
  padding: 4rem 0;
  dislpay: flex;
  align-items: center;

  .card {
    width: 100%;
    heigh: 100%;
    border-radius: 10px;
    padding: 1.5rem 1rem;
  }
`;

// eslint-disable-next-line arrow-body-style
const AddService = () => {
  const [images, setImages] = useState([]);
  const [perks, setPerks] = useState([]);

  const handleChange = (set) => (e) => {
    set(e.target.value.split(", "));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(perks);
  };

  const arrayToString = (arr) => arr.join(", ");

  return (
    <Container>
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
                <Form.Label>
                  Service Images
                  <small className="text-muted mx-2">
                    Add images that best shaowcase your service
                  </small>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  value={arrayToString(images)}
                  onChange={handleChange(setImages)}
                  name="images"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Price
                  <small className="text-muted mx-2">Set a price for your service</small>
                </Form.Label>
                <Form.Control type="number" name="price" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Description
                  <small className="text-muted mx-2">Briefly describe your service</small>
                </Form.Label>
                <Form.Control as="textarea" name="describtion" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Details
                  <small className="text-muted mx-2">Describe your service with details</small>
                </Form.Label>
                <Form.Control as="textarea" name="details" />
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
                <Form.Label>
                  Perks
                  <small className="text-muted mx-2">Make your service more intresting</small>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  value={arrayToString(perks)}
                  onChange={handleChange(setPerks)}
                  name="perks"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </MainContainer>
    </Container>
  );
};

export default AddService;
