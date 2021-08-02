import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import InformationSidebar from "../InformationSidebar/InformationSidbar";
import ServieceCardData from "../ServiecCardData/ServieceCardData";
import { ProfileData } from "../MockData";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(193, 193, 174, 0.09);
  padding-bottom: 3rem;
`;

// eslint-disable-next-line arrow-body-style
const ProfilePage = () => {
  return (
    <div>
      <ProfileHeader
        name={ProfileData[0].name}
        rating={ProfileData[0].rating}
        description={ProfileData[0].description}
        profilePic={ProfileData[0].profilePic}
        location={ProfileData[0].location}
        profession={ProfileData[0].profession}
      />
      <Container>
        <div className="w-75 mx-auto">
          <Row>
            <Col>
              <InformationSidebar />
            </Col>
            <Col>
              <ServieceCardData />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
