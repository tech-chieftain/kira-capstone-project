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

  .card {
    width: 55rem;
    heigh: 100%;
    border-radius: 10px;
    padding: 1.5rem 1rem;
  }
`;

// eslint-disable-next-line arrow-body-style
const AddService = () => {
  const [images, setImages] = useState([]);

  const handleChange = (set) => (e) => {
    set(e.target.value.split(", "));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(images);
  };

  const arrayToString = (arr) => arr.join(", ");

  return (
    <Container>
      <MainContainer>
        <h1 className="text-primary m-3">Build Your Service</h1>
        <Card className="card shadow">
          <Card.Body>
            <Form onSubmit={handleSave}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Service Photo
                  <small className="text-muted mx-2">
                    Add images that best shaowcase your service
                  </small>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Service image links"
                  value={arrayToString(images)}
                  onChange={handleChange(setImages)}
                  name="images"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Service Price
                  <small className="text-muted mx-2">Set a price for your service</small>
                </Form.Label>
                <Form.Control type="number" name="price" placeholder="Price" />
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
