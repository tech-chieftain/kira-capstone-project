import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaGlobe } from "react-icons/fa";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FooterContainer, MainContainer } from "./Footer.styled";
import Logo from "./FooterLogo";

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  const [languages, setLanguages] = useState({
    arrayOfLanguage: ["English", "Arabic"],
    chosenLanguage: "English",
  });

  const { t } = useTranslation();

  return (
    <FooterContainer>
      <MainContainer>
        <Container>
          <Row lg={5} md={2} xs={1}>
            <Col>
              <h5>{t("Catagories")}</h5>
              <ul className="list-unstyled ">
                <li>
                  <Link href="/">
                    <a>{t("Graphics & Design")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Digital Marketing")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Writing & Translation")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Video & Animation")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Programming & Tech")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Music & Audio")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Business")}</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>{t("Community")}</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a>{t("Events")} </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Blog")} </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Forum")} </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>{t("Support")} </h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a>{t("Terms and Conditions")} </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Privacy and cookies")} </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t("Accessability")} </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="social-media-section">
          <div className="d-flex justify-content-center">
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
        <div className="bottom-section">
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
                <FaGlobe /> {languages.chosenLanguage}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languages.arrayOfLanguage
                  .filter((language) => language !== languages.chosenLanguage)
                  .map((language) => (
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() => {
                        setLanguages({
                          ...languages,
                          chosenLanguage: language,
                        });
                      }}
                    >
                      {language}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
