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
import { LoginBtn, JoinBtn, Img, ProfileImg, DropDown, SearchForm } from "./Navbar.styled";
import LoginModal from "../Modals/LoginModal";
import SignupModal from "../Modals/SignupModal";

// eslint-disable-next-line arrow-body-style
const NavBar = ({ overview, profilePicture, name, handleLogOut }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLoginModal = () => {
    setShowLogin((show) => !show);
  };

  const openSignupModal = () => {
    setShowSignup((show) => !show);
  };

  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="/home">
          <Img
            src="/NavbarLogo.png"
            width="104px"
            height="52px"
            className="d-inline-block align-top"
            alt="Nabar logo"
          />
        </Navbar.Brand>

        <SearchForm className="d-flex md-shadow mx-2">
          <InputGroup.Text id="basic-addon1">
            <IoSearch size="25px" />
          </InputGroup.Text>
          <FormControl
            type="search"
            placeholder="Find Services..."
            aria-label="Search"
            className="input"
            onChange=""
          />
        </SearchForm>

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
          <Nav className="w-75 d-flex justify-content-end">
            <Nav.Link href="/add_serviece">
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
                <Dropdown.Item href="/">
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
