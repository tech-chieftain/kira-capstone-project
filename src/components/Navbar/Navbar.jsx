import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import { FaUserCircle, FaUserAlt, FaPlus } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { LoginBtn, JoinBtn, Img, ProfileImg, DropDown, SearchForm } from "./Navbar.styled";
import LoginModal from "../Modals/LoginModal";
import SignupModal from "../Modals/SignupModal";
import firebase from "../../Firebase";

// eslint-disable-next-line arrow-body-style
const NavBar = ({ overview, profilePicture, name, handleLogOut }) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLoginModal = () => {
    setShowLogin((show) => !show);
  };

  const openSignupModal = () => {
    setShowSignup((show) => !show);
  };

  const { t } = useTranslation("navbar");

  return (
    <Navbar bg="primary" collapseOnSelect expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Img
            src="/NavbarLogo.png"
            width="104px"
            height="52px"
            className="d-inline-block align-top"
            alt="Nabar logo"
          />
        </Navbar.Brand>

        <SearchForm className="d-flex md-shadow mx-md-2">
          <InputGroup.Text id="basic-addon1">
            <IoSearch size="25px" />
          </InputGroup.Text>
          <FormControl
            type="search"
            placeholder={t("navbar.findService")}
            aria-label="Search"
            className="input"
            onChange=""
          />
        </SearchForm>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {overview ? (
            <Nav className="w-100 d-flex justify-content-end">
              <LoginBtn onClick={openLoginModal}>{t("navbar.login")}</LoginBtn>
              <LoginModal
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                setShowSignup={setShowSignup}
              />

              <JoinBtn onClick={openSignupModal}> {t("navbar.join")} </JoinBtn>
              <SignupModal
                showSignup={showSignup}
                setShowSignup={setShowSignup}
                setShowLogin={setShowLogin}
              />
            </Nav>
          ) : (
            <Nav className="w-100 d-flex justify-content-end">
              <Nav.Link href="/add_service">
                <FaPlus size="25px" className="text-white mt-1" />
              </Nav.Link>
              <Nav.Link href="/">
                <GrMail size="32px" className="text-white" />
              </Nav.Link>
              <Nav.Link href="/">
                <IoIosNotifications size="32px" className="text-white" />
              </Nav.Link>

              <DropDown>
                <Dropdown.Toggle className="dropdown-basic">
                  <FaUserAlt size="25px" className="text-white" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">
                    {profilePicture ? (
                      <Link href={`/profile/${user.uid}`}>
                        <ProfileImg src={profilePicture} roundedCircle fluid />
                      </Link>
                    ) : (
                      <FaUserCircle size="28px" />
                    )}
                    <span className="mx-3 text-muted">{name}</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/settings">
                    <MdSettings size="20px" />
                    <span className="mx-3 text-muted">{t("navbar.settings")}</span>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogOut}>
                    <FiLogOut size="20px" />
                    <span className="mx-3 text-muted">{t("navbar.logout")}</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </DropDown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {
  overview: PropTypes.bool,
  profilePicture: PropTypes.string,
  name: PropTypes.string,
  handleLogOut: PropTypes.func,
};

export default NavBar;
