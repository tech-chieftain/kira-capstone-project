import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaGlobe } from "react-icons/fa";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import Link from "next/link";
import FooterContainer from "./Footer.styled";
import Logo from "./FooterLogo";

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  const [language1, setLanguage1] = useState(() => "English");
  const [language2, setLanguage2] = useState(() => "Arabic");

  const changeLanguage = () => {
    if (language2 === "Arabic") {
      setLanguage1("Arabic");
      setLanguage2("English");
    } else {
      setLanguage2("Arabic");
      setLanguage1("English");
    }
  };

  return (
    <FooterContainer>
      <div className="footer-middle">
        <div className="main-container">
          <Container>
            <Row>
              <Col md={2} sm={6} className="col">
                <h5>Catagories</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/">
                      <a>Graphics & Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Digital Marketing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Writing & Translation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Video & Animation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Programming & Tech</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Music & Audio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Business</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={2} sm={6} className="col">
                <h5>Community</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/">
                      <a>Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Forum</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={2} sm={6} className="col">
                <h5>Support</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/">
                      <a>Terms and </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Privacy and cookies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Accessability</a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-container">
            <div className="icon-container d-flex justify-content-center">
              <ul className="list-unstyled d-flex flex-row">
                <li>
                  <Link href="/">
                    <a>
                      <FaTwitter size="28px" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <FaLinkedinIn size="28px" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <FaInstagram size="28px" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <FaFacebookF size="28px" />
                    </a>
                  </Link>
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
                  <FaGlobe /> {language1}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-1"
                    className="dropdown-item"
                    onClick={changeLanguage}
                  >
                    {language2}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
