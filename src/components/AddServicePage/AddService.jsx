import React, { useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, MainContainer, Bubbles } from "./AddService.styled";
import firebase from "../../Firebase/Firebase";
import { addService, uploadImage } from "../../Utilities/FirebaseUtilities";

// eslint-disable-next-line arrow-body-style
const AddService = () => {
  const [serviceData, setServiceData] = useState({});
  const [user] = useAuthState(firebase.auth());

  const handleChange = ({ target: { name, value } }) => {
    setServiceData({ ...serviceData, [name]: value });
  };

  const parseAndHandleChange = ({ target: { name, value } }) => {
    setServiceData({ ...serviceData, [name]: value.split("\n") });
  };

  const handleImgUpload = async ({ target: { files } }) => {
    if (files.length)
      serviceData.images = await Promise.all(Array.from(files).map((img) => uploadImage(img)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(serviceData);
    addService(user, serviceData);
  };

  const arrayToString = (arr) => arr && arr.join("\n");

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <MainContainer>
        <h1 className="text-primary m-3">Build Your Service</h1>
        <Card className="card shadow">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Service Title</Form.Label>
                <Form.Control
                  className="mb-4"
                  name="title"
                  placeholder="Title"
                  value={serviceData.title}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Service Images</Form.Label>
                <span className="small text-muted mx-3">
                  upload images that best shaowcase your service"
                </span>
                <br />
                <Form.Control
                  type="file"
                  id="files"
                  name="images"
                  accept="image/png, image/jpeg"
                  onChange={handleImgUpload}
                  class="custom-file-input"
                  multiple
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={serviceData.price}
                  onChange={handleChange}
                  placeholder="Set a price for your service"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={serviceData.description}
                  onChange={handleChange}
                  placeholder="Briefly describe your service"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  as="textarea"
                  name="details"
                  placeholder="Describe your service with details"
                  value={serviceData.details}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label>Delivery Time</Form.Label>
                  <Form.Control
                    type="number"
                    name="etd"
                    value={serviceData.etd}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Number Of Revisions</Form.Label>
                  <Form.Control
                    type="number"
                    name="revisions"
                    value={serviceData.revisions}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Perks</Form.Label>
                <Form.Control
                  as="textarea"
                  value={arrayToString(serviceData.perks)}
                  onChange={parseAndHandleChange}
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
