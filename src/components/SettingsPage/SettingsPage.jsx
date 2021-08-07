/* eslint-disable arrow-body-style */
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, MainContainer } from "./SettingsPage.styled";
import firebase from "../../Firebase/Firebase";
import { getUserInfo, updateUserInDB, uploadImage } from "../../Utilities/FirebaseUtilities";

const SettingsPage = () => {
  const [user] = useAuthState(firebase.auth());
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user) {
      getUserInfo(user).then((data) => setUserData(data));
    }
  }, [user]);

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  };

  const parseAndHandleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value.split("\n") });
  };

  const handleImgUpload = async ({ target: { files } }) => {
    if (files[0]) setUserData({ ...userData, photoURL: await uploadImage(files[0]) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUserInDB(user, userData);
    await user.updateProfile(userData);
  };

  const arrayToString = (arr) => arr && arr.join("\n");
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <MainContainer>
        <h2 className="text-primary m-3">Account Settings</h2>
        <Card className="shadow">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Card.Header className="text-muted bg-white h4 mb-4 header">
                Personal Information
              </Card.Header>

              <Row>
                <Form.Group as={Col} className="mb-4" sm>
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control
                    placeholder="Display Name"
                    name="displayName"
                    value={userData.displayName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-4" sm>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    placeholder="location"
                    name="location"
                    value={userData.location}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} className="mb-4" sm>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-4" sm>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    placeholder="Phone Number"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} className="mb-4" sm>
                  <Form.Label>About</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="About"
                    name="about"
                    value={userData.about}
                    onChange={handleChange}
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-5">
                <Form.Label>Upload your profile image</Form.Label>
                <Form.Control
                  type="file"
                  name="photoURL"
                  accept="image/png, image/jpeg"
                  onChange={handleImgUpload}
                  className="custom-file-input"
                />
              </Form.Group>

              <Card.Header className="text-muted bg-white h4 my-4 header">
                Professional Information
              </Card.Header>

              <Form.Group className="mb-4">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  placeholder="Job Title"
                  name="job"
                  value={userData.Job}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row>
                <Form.Group as={Col} className="mb-4" sm>
                  <Form.Label>Skills</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Skills"
                    name="skills"
                    value={arrayToString(userData.skills)}
                    onChange={parseAndHandleChange}
                    style={{ height: "100px" }}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-4" sm>
                  <Form.Label>Languages</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Languages"
                    name="languages"
                    value={arrayToString(userData.languages)}
                    onChange={parseAndHandleChange}
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Education</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Education"
                  name="education"
                  value={arrayToString(userData.education)}
                  onChange={parseAndHandleChange}
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
    </Container>
  );
};

export default SettingsPage;
