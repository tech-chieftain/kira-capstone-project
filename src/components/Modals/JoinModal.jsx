import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useTranslation } from "next-i18next";
import firebase from "src/firebase";
import {
  ModalContent,
  ModalWrapper,
  Background,
  ModalBubbles,
  CloseModalButton,
} from "./Modal.styled";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const JoinModal = ({ showJoin, setShowJoin }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showJoin ? 1 : 0,
    transform: showJoin ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowJoin(false);
    }
  };

  const { t } = useTranslation("navbar");

  if (showJoin)
    return (
      <Background onClick={closeModal} ref={modalRef}>
        <animated.div style={animation}>
          <ModalWrapper showJoin={showJoin}>
            <ModalContent>
              <h4>{t("navbar.joinNow")} </h4>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </ModalContent>
            <CloseModalButton onClick={() => setShowJoin((show) => !show)} />
            <ModalBubbles>
              <div className="uper-bigBubble" />
              <div className="uper-smallBubble" />
              <div className="bottom-bigBubble" />
              <div className="bottom-smallBubble" />
            </ModalBubbles>
          </ModalWrapper>
        </animated.div>
      </Background>
    );
  return null;
};

export default JoinModal;
