import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown, Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { VscSearch } from "react-icons/vsc";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { LoginBtn, JoinBtn, Img, ProfileImg, DropDown, SearchForm } from "./Navbar.styled";
import LoginModal from "../Modals/LoginModal";
import SignupModal from "../Modals/SignupModal";

// eslint-disable-next-line arrow-body-style
const NavBar = ({ overview, profilePicture, search }) => {
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
        <Navbar.Brand href="#home">
          <Img
            src="/NavbarLogo.png"
            width="104px"
            height="52px"
            className="d-inline-block align-top"
            alt="Nabar logo"
          />
        </Navbar.Brand>

        {search && (
          <SearchForm className="d-flex shadow">
            <InputGroup.Text id="basic-addon1">
              <IoSearch size="21px" />
            </InputGroup.Text>
            <FormControl
              type="search"
              placeholder="Find Services"
              aria-label="Search"
              className="input"
            />
            <Button className="input-btn">Search</Button>
          </SearchForm>
        )}

        {overview ? (
          <Nav>
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
          <Nav>
            <Nav.Link href="/">
              <VscSearch size="28px" className="text-white mt-1" />
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
                </Dropdown.Item>
                <Dropdown.Item href="/" />
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
  search: PropTypes.bool,
  profilePicture: PropTypes.string,
};

NavBar.defaultProps = {
  overview: true,
  search: true,
  profilePicture: "",
};

export default NavBar;
