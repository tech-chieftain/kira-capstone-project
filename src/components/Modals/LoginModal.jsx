/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import Alert from "react-bootstrap/Alert";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useTranslation } from "next-i18next";
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

const LoginModal = ({ showLogin, setShowLogin, setShowSignup }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showLogin ? 1 : 0,
    transform: showLogin ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowLogin(false);
    }
  };

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(
    firebase.auth(),
  );

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    signInWithEmailAndPassword(formData.get("email"), formData.get("password"));
  };

  const { t } = useTranslation("navbar");

  return (
    <>
      {showLogin && (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showLogin={showLogin}>
              <ModalContent>
                <h4>{t("navbar.loginToKira")} </h4>
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
                <Form onSubmit={handleLogin}>
                  <input type="text" name="email" placeholder={t("navbar.username")} />
                  <input type="password" name="password" placeholder={t("navbar.password")} />
                  <Button disabled={loading} type="submit" className="join-btn">
                    {t("navbar.login")}
                  </Button>
                </Form>
                <p>
                  {t("navbar.notMember")}
                  <button
                    type="button"
                    onClick={() => {
                      setShowSignup((show) => !show);
                      setShowLogin((show) => !show);
                    }}
                  >
                    {t("navbar.joinNow")}
                  </button>
                </p>
              </ModalContent>
              <CloseModalButton onClick={() => setShowLogin((show) => !show)} />
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

export default LoginModal;
