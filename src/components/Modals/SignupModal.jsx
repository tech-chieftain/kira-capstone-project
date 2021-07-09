/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { ModalContent, ModalWrapper, Background, ModalBubbles, Form, Button } from "./Modal.styled";

const SignupModal = ({ showSignup, setShowSignup }) => {
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

  return (
    <>
      {showSignup ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showSignup={showSignup}>
              <ModalContent>
                <h4>Create your account</h4>
                <Button className="fb-btn">
                  <SiFacebook size="28px" color="white" className="mx-1" />
                  Continue With Facebook
                </Button>
                <Button className="gooogle-btn">
                  <FcGoogle size="28px" className="mx-1" /> Continue With Google
                </Button>
                <div className="breake">
                  <hr />
                  <span>OR</span>
                  <hr />
                </div>
                <Form>
                  <span>
                    <input type="text" name="name" id="name" placeholder="First Name" />
                    <input type="text" name="name" id="name" placeholder="Last Name" />
                  </span>

                  <input type="text" name="name" placeholder="Your Username" />
                  <input type="email" name="email" placeholder="Email" />
                  <input type="password" name="password" placeholder="Password" />
                  <input type="password" name="password" placeholder="Confirm Password" />
                  <Button className="join-btn">Continue</Button>
                </Form>
                <p>
                  Already have an account?
                  <button type="button"> Log In </button>
                </p>
              </ModalContent>
              <ModalBubbles>
                <div className="uper-bigBubble" />
                <div className="uper-smallBubble" />
                <div className="bottom-bigBubble" />
                <div className="bottom-smallBubble" />
              </ModalBubbles>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default SignupModal;
