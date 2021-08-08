import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { FaUserCircle, FaUserAlt, FaPlus } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { MdSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import Searchbox from "./Searchbox";
import { LoginBtn, JoinBtn, Img, ProfileImg, DropDown } from "./Navbar.styled";
import LoginModal from "../Modals/LoginModal";
import SignupModal from "../Modals/SignupModal";

// eslint-disable-next-line arrow-body-style
const NavBar = ({ overview, profilePicture, name, uid, handleLogOut }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLoginModal = () => {
    setShowLogin((show) => !show);
  };

  const openSignupModal = () => {
    setShowSignup((show) => !show);
  };

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

        <Searchbox />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {overview ? (
            <Nav className="w-100 d-flex justify-content-end">
              <LoginBtn onClick={openLoginModal}> Log In </LoginBtn>
              <LoginModal
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                setShowSignup={setShowSignup}
              />

              <JoinBtn onClick={openSignupModal}> Join </JoinBtn>
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
                  <Dropdown.Item href={`/profile/${uid}`}>
                    {profilePicture ? (
                      <ProfileImg src={profilePicture} roundedCircle fluid />
                    ) : (
                      <FaUserCircle size="28px" />
                    )}
                    <span className="mx-3 text-muted">{name}</span>
                  </Dropdown.Item>

                  <Dropdown.Item href="/settings">
                    <MdSettings size="20px" />
                    <span className="mx-3 text-muted">Settings</span>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogOut}>
                    <FiLogOut size="20px" />
                    <span className="mx-3 text-muted">Log Out</span>
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
  uid: PropTypes.string,
  handleLogOut: PropTypes.func,
};

NavBar.defaultProps = {
  overview: false,
  profilePicture: "",
  name: "",
};

export default NavBar;
