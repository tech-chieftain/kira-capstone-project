/* eslint-disable arrow-body-style */
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, MainContainer } from "./SettingsPage.styled";
import firebase from "../../Firebase/Firebase";
import { getUserInfo } from "../../Utilities/FirebaseUtilities";

const SettingsPage = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [displayName, setDisplayName] = useState([]);

  useEffect(() => {
    if (user) getUserInfo(user);
  }, [user]);

  const handleChange = (set) => (e) => {
    set(e.target.value.split("\n"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  };

  const arrayToString = (arr) => arr.join("\n");
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

              <Row className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="first Name" name="fname" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="last Name" name="lname" />
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="username" name="username" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Location</Form.Label>
                  <Form.Control placeholder="location" name="location" />
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="email" name="email" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control placeholder="phone number" name="number" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-5">
                <Form.Label>Upload your profile image</Form.Label>
                <Form.Control
                  type="file"
                  id="files"
                  name="files"
                  class="custom-file-input"
                />
              </Form.Group>

              <Card.Header className="text-muted bg-white h4 my-4 header">
                Professional Information
              </Card.Header>

              <Form.Group className="mb-4">
                <Form.Label>Jobs</Form.Label>
                <Form.Control placeholder="add job" name="jobs" />
              </Form.Group>

              <Row className="mb-2">
                <Form.Group as={Col}>
                  <Form.Label>Skills</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="add skills"
                    name="skills"
                    value={arrayToString(skills)}
                    onChange={handleChange(setSkills)}
                    style={{ height: "100px" }}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-4">
                  <Form.Label>Languages</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="add language"
                    name="languages"
                    value={arrayToString(languages)}
                    onChange={handleChange(setLanguages)}
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Education</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="add education"
                  name="education"
                  value={arrayToString(education)}
                  onChange={handleChange(setEducation)}
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
