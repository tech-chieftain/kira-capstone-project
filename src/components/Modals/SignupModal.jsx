/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import Alert from "react-bootstrap/Alert";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { updateUserInDB } from "../../Utilities/FirebaseUtilities";
import firebase from "../../Firebase";
import {
  ModalContent,
  ModalWrapper,
  Background,
  ModalBubbles,
  Form,
  Button,
  CloseModalButton,
} from "./Modal.styled";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    "apple.com",
  ],
};

const SignupModal = ({ showSignup, setShowSignup, setShowLogin }) => {
  let [error, loading] = [false, false];
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showSignup ? 1 : 0,
    transform: showSignup ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowSignup(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(formData.get("email"), formData.get("password"));

      await user.updateProfile({
        displayName: formData.get("displayName"),
      });

      await updateUserInDB();

      setShowSignup((show) => !show);
    } catch (err) {
      error = err;
    }
  };

  return (
    <>
      {showSignup && (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showSignup={showSignup}>
              <ModalContent>
                <h4>Create your account</h4>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                <div className="breake">
                  <hr />
                  <span>OR</span>
                  <hr />
                </div>
                {error && (
                  <Alert className="mx-2 w-75" variant="danger">
                    {error.message}
                  </Alert>
                )}
                <Form onSubmit={handleSignUp}>
                  <input type="text" name="displayName" placeholder="Display Name" />
                  <input type="email" name="email" placeholder="Email" />
                  <input type="password" name="password" placeholder="Password" />
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                  <Button disabled={loading} type="submit" className="join-btn">
                    Continue
                  </Button>
                </Form>
                <p>
                  Already have an account?
                  <button
                    type="button"
                    onClick={() => {
                      setShowSignup((show) => !show);
                      setShowLogin((show) => !show);
                    }}
                  >
                    Log In
                  </button>
                </p>
              </ModalContent>
              <CloseModalButton onClick={() => setShowSignup((show) => !show)} />
              <ModalBubbles>
                <div className="uper-bigBubble" />
                <div className="uper-smallBubble" />
                <div className="bottom-bigBubble" />
                <div className="bottom-smallBubble" />
              </ModalBubbles>
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  );
};

export default SignupModal;
