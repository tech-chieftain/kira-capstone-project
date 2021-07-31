import { Card, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import { Container, MainContainer, Button } from "./SettingsPage.styled";

const SettingsPage = () => {
  const [showPersonal, setShowPersonal] = useState(true);
  const [showProfessional, setShowProfessional] = useState(false);

  const openPersonal = () => {
    setShowPersonal(true);
    setShowProfessional(false);
  };

  const openProfessional = () => {
    setShowProfessional(true);
    setShowPersonal(false);
  };

  return (
    <Container>
      <MainContainer>
        <Row className="p-5">
          <Col md={4}>
            <Button onClick={openPersonal}>Personal Information</Button>
            <Button onClick={openProfessional}>Professional Information</Button>
          </Col>
          <Col>
            <Card className="card shadow">
              <Card.Body>
                <PersonalInfo showPersonal={showPersonal} />
                <ProfessionalInfo showProfessional={showProfessional} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </MainContainer>
    </Container>
  );
};

export default SettingsPage;
