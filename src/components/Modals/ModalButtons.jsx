import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const ModalButtons = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLoginModal = () => {
    setShowLogin((show) => !show);
  };

  const openSignupModal = () => {
    setShowSignup((show) => !show);
  };

  return (
    <>
      <Button onClick={openLoginModal} variant="secondary">
        Log In
      </Button>
      <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} setShowSignup={setShowSignup} />

      <Button onClick={openSignupModal} variant="dark">
        Sign Up
      </Button>
      <SignupModal
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        setShowLogin={setShowLogin}
      />
    </>
  );
};

export default ModalButtons;
