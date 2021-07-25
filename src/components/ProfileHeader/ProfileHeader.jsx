import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { FaUserCircle, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import Link from "next/link";
import { Background, Img, MainContainer } from "./ProfileHeader.styled";

const ProfileHeader = ({
  profilePicture,
  name,
  //   profession,
  address,
  description,
  //   rating,
  // eslint-disable-next-line arrow-body-style
}) => {
  return (
    <Background>
      <MainContainer>
        <Row>
          <Col sm={3}>
            {profilePicture ? (
              <Img src={profilePicture} roundedCircle fluid />
            ) : (
              <FaUserCircle size="173px" />
            )}
          </Col>
          <Col sm={8} className="info-container">
            <h1>{name}</h1>
            <h5>
              <VscLocation size="32px" />
              <span>{address}</span>
            </h5>
            <div>
              <ul className="list-unstyled d-flex flex-row">
                <li>
                  <Link href="/">
                    <a>
                      <FaFacebookF size="22px" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <FaInstagram size="22px" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <FaTwitter size="22px" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <p>{description}</p>
          </Col>
        </Row>
      </MainContainer>
    </Background>
  );
};

ProfileHeader.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string,
  //   profession: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  //   rating: PropTypes.number,
};

ProfileHeader.defaultProps = {
  profilePicture: "",
  name: "",
  //   profession: "",
  address: "",
  description: "",
  //   rating: ,
};

export default ProfileHeader;
