import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { FaUserCircle, FaUserAlt, FaPlus } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import { auth } from "src/firebase/firebase";
import userContext from "../../context/context";
import Searchbox from "./Searchbox";
import { JoinBtn, Img, ProfileImg, DropDown } from "./Navbar.styled";
import JoinModal from "../Modals/JoinModal";

const NavBar = () => {
  const [showJoin, setShowJoin] = useState(false);

  const openJoinModal = () => {
    setShowJoin((show) => !show);
  };

  const { t } = useTranslation("navbar");

  const user = useContext(userContext);

  return (
    <Navbar bg="primary" collapseOnSelect expand="xl" variant="dark">
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

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Searchbox />

          {!user ? (
            <Nav className="w-100 d-flex justify-content-end">
              <JoinBtn onClick={openJoinModal}>{t("navbar.join")}</JoinBtn>
              <JoinModal showJoin={showJoin} setShowJoin={setShowJoin} />
            </Nav>
          ) : (
            <Nav className="w-100 d-flex justify-content-end">
              <Nav.Link href="/add_service">
                <FaPlus size="25px" className="text-white mt-1" />
              </Nav.Link>

              <DropDown>
                <Dropdown.Toggle className="dropdown-basic">
                  <FaUserAlt size="25px" className="text-white" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                        {user.photoURL ? (
                          <ProfileImg src={user.photoURL} roundedCircle fluid />
                    ) : (
                      <FaUserCircle size="28px" />
                    )}
                        <span className="mx-3 text-muted">{user.displayName}</span>
                  </Dropdown.Item>

                  <Dropdown.Item href="/settings">
                    <MdSettings size="20px" />
                    <span className="mx-3 text-muted">{t("navbar.settings")}</span>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => auth.signOut()}>
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

export default NavBar;
