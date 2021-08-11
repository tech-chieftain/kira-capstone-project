/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const SellerContact = ({ show, setShow, email, phone, name }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShow(false);
    }
  };
  return (
    <>
      {show && (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper show={show}>
              <ModalContent>
                <h3 className="mb-4 text-primary">Contact me</h3>
                <h4 className="mb-4">
                  Name:
                  <span className="mx-3">{name && name}</span>
                </h4>
                <h4 className="mb-4">
                  Phone Number:
                  {phone ? (
                    <span className="mx-3">{phone && phone}</span>
                  ) : (
                    <span className="mx-3 text-muted">XXX</span>
                  )}
                </h4>
                <h4 className="mb-4">
                  Email:
                  {email ? (
                    <span className="mx-3">{email && email}</span>
                  ) : (
                    <span className="mx-3 text-muted">XXX</span>
                  )}
                </h4>
              </ModalContent>
              <CloseModalButton onClick={() => setShow((show) => !show)} />
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 1;
  border-radius: 15px;
  margin-top: -10rem;
`;

const ModalContent = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;
  padding: 2rem 3rem;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  width: 26px;
  height: 26px;
  padding: 0;
  z-index: 10;
  color: grey;
`;

export default SellerContact;
