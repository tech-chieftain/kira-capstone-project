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
        <Row md={1}>
          <Col xl={3} className="mt-xl-4">
            {profilePicture ? (
              <Img src={profilePicture} roundedCircle fluid />
            ) : (
              <FaUserCircle size="173px" />
            )}
          </Col>
          <Col xl={9} className="info-container mt-md-3">
            <div className="d-flex flex-row">
              <h1>{name}</h1>
              <span className="m-xl-3 m-md-2 m-sm-2">({profession})</span>
            </div>
            <h5>
              <VscLocation size="32px" />
              <span>{location}</span>
            </h5>

            <h5>{description}</h5>
            <div className="d-xl-flex flex-row mt-3">
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
};

export default ProfileHeader;
