import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { FaUserCircle, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { VscLocation, VscStarFull, VscStarEmpty } from "react-icons/vsc";
import Link from "next/link";
import Rating from "react-rating";
import { Background, Img, MainContainer, Btn } from "./ProfileHeader.styled";

const ProfileHeader = ({ profilePicture, name, profession, location, description, rating }) => (
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
        <Col sm={9} className="info-container">
          <div className="d-flex flex-row">
            <h1>{name}</h1>
            <span className="m-3">({profession})</span>
          </div>
          <h5>
            <VscLocation size="32px" />
            <span>{location}</span>
          </h5>
          <div>
            <ul className="list-unstyled d-flex flex-row">
              <li>
                <Link href="/">
                  <a>
                    <FaFacebookF size="24px" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <FaInstagram size="24px" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <FaTwitter size="24px" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <h5>{description}</h5>
          <div className="d-flex flex-row mt-3">
            <Rating
              readonly
              initialRating={rating}
              emptySymbol={<VscStarEmpty size="36px" />}
              fullSymbol={<VscStarFull size="36px" />}
              fractions={2}
            />

            <Btn>Contact Me</Btn>
          </div>
        </Col>
      </Row>
    </MainContainer>
  </Background>
);

ProfileHeader.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
};

ProfileHeader.defaultProps = {
  profilePicture: "",
  name: "",
  profession: "",
  location: "",
  description: "",
  rating: 0,
};

export default ProfileHeader;
