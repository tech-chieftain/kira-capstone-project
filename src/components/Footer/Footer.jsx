import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaGlobe } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import FooterContainer from "./Footer.styled";
import Logo from "./FooterLogo";

const Footer = () => (
  <FooterContainer>
    <div className="footer-middle">
      <Container>
        <Row className="px-4">
          <Col md={3} sm={6}>
            <h4>Catagories</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Graphics & Design</a>
              </li>
              <li>
                <a href="/">Digital Marketing</a>
              </li>
              <li>
                <a href="/">Writing & Translation</a>
              </li>
              <li>
                <a href="/">Video & Animation</a>
              </li>
              <li>
                <a href="/">Programming & Tech</a>
              </li>
              <li>
                <a href="/">Music & Audio</a>
              </li>
              <li>
                <a href="/">Business</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h4>Community</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Forum</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Terms and </a>
              </li>
              <li>
                <a href="/">Conditions</a>
              </li>
              <li>
                <a href="/">Privacy and cookies</a>
              </li>
              <li>
                <a href="/">Accessability</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-container">
          <div className="icon-container d-flex justify-content-center">
            <ul className="list-unstyled d-flex flex-row">
              <li>
                <a href="/">
                  <FaTwitter size="28px" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaLinkedinIn size="28px" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram size="28px" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFacebookF size="28px" />
                </a>
              </li>
            </ul>
          </div>
          <div className="logo-container d-flex justify-content-md-end">
            <Logo />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="d-flex justify-content-center">
            <p className="text-center small">
              Kira &copy;{new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          <div className="dropdown-container d-flex justify-content-md-end">
            <Dropdown>
              <Dropdown.Toggle
                variant="Info"
                id="dropdown-basic-button"
                className="text-white btn-lg"
              >
                <FaGlobe /> Language
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Container>
    </div>
  </FooterContainer>
);

export default Footer;
