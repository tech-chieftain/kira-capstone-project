/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import Alert from "react-bootstrap/Alert";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useTranslation } from "next-i18next";
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
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
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

      await updateUserInDB(user);

      setShowSignup((show) => !show);
    } catch (err) {
      error = err;
    }
  };

  const { t } = useTranslation("navbar");

  return (
    <>
      {showSignup && (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showSignup={showSignup}>
              <ModalContent>
                <h4>{t("navbar.creatAccount")} </h4>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                <div className="breake">
                  <hr />
                  <span>{t("navbar.or")}</span>
                  <hr />
                </div>
                {error && (
                  <Alert className="mx-2 w-75" variant="danger">
                    {error.message}
                  </Alert>
                )}
                <Form onSubmit={handleSignUp}>
                  <input type="text" name="displayName" placeholder={t("navbar.displayName")} />
                  <input type="email" name="email" placeholder={t("navbar.email")} />
                  <input type="password" name="password" placeholder={t("navbar.password")} />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder={t("navbar.confirmPassword")}
                  />
                  <Button disabled={loading} type="submit" className="join-btn">
                    {t("navbar.continue")}
                  </Button>
                </Form>
                <p>
                  {t("navbar.alreadyHaveAccount")}
                  <button
                    type="button"
                    onClick={() => {
                      setShowSignup((show) => !show);
                      setShowLogin((show) => !show);
                    }}
                  >
                    {t("navbar.login")}
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
