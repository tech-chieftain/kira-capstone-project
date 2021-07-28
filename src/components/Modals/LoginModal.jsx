/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import {
  ModalContent,
  ModalWrapper,
  Background,
  ModalBubbles,
  Form,
  Button,
  CloseModalButton,
} from "./Modal.styled";

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

  return (
    <>
      {showLogin && (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showLogin={showLogin}>
              <ModalContent>
                <h4>Login to kira</h4>
                <Button className="fb-btn">
                  <SiFacebook size="28px" color="white" className="m-1" />
                  Continue With Facebook
                </Button>
                <Button className="gooogle-btn">
                  <FcGoogle size="28px" className="m-1" /> Continue With Google
                </Button>
                <div className="breake">
                  <hr />
                  <span>OR</span>
                  <hr />
                </div>
                <Form>
                  <input type="text" name="name" placeholder="Your Username" />
                  <input type="password" name="password" placeholder="Password" />
                  <Button className="join-btn">Log In</Button>
                </Form>
                <p>
                  Not a member yet?
                  <button
                    type="button"
                    onClick={() => {
                      setShowSignup((show) => !show);
                      setShowLogin((show) => !show);
                    }}
                  >
                    Join now
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
