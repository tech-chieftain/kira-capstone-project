/* eslint-disable arrow-body-style */
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { FaUserCircle } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import { Background, Img, MainContainer, Btn } from "./ProfileHeader.styled";

const ProfileHeader = ({ profilePicture, name, profession, location, description }) => {
  const { t } = useTranslation("profile");

  return (
    <Background>
      <MainContainer>
        <Row sm={1}>
          <Col lg={3} className="mt-md-4">
            {profilePicture ? (
              <Img src={profilePicture} roundedCircle fluid />
            ) : (
              <FaUserCircle size="173px" />
            )}
          </Col>
          <Col lg={9} className="info-container mt-sm-3">
            <div className="d-flex flex-row">
              <h1>{name}</h1>
              <span className="m-lg-3 m-sm-2">({profession})</span>
            </div>
            <h5>
              <VscLocation size="32px" />
              <span>{location}</span>
            </h5>

            <h5>{description}</h5>
            <div className="d-md-flex flex-row mt-3">
              <Btn>{t("profile.contactMe")}</Btn>
            </div>
          </Col>
        </Row>
      </MainContainer>
    </Background>
  );
};

ProfileHeader.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
};

export default ProfileHeader;
