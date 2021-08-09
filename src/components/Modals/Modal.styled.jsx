import styled from "styled-components";
import { MdClose } from "react-icons/md";

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
  margin-top: -5rem;
`;

const ModalContent = styled.div`
  margin-top: 5rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  color: #141414;
  padding: 2.3rem 0;

  h4 {
    color: #008080;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .breake {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #008080;
    font-size: 17px;
  }

  hr {
    height: 1.5px;
    width: 145px;
    margin: 0 15px;
  }

  p {
    color: #008080;
    font-size 14px;
    margin: 0 auto;
  }

  p button {
    color: #008080;
    font-weight: bold;
    background: transparent;
    border: none;
    out-line: none;
  }
  
  @media (max-width: 576px) {
    line-height: 1.1;
    padding: 1.6rem 0;
    margin-top: 3rem;

      hr {
        width: 120px;
      }
      h4 {
        margin-bottom: 0;
      }
    }
`;

const Button = styled.button`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: none;
  font-weight: medium;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    margin: 8px 0;
    width: 272px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: rgba(0, 128, 128, 0.5);
    border-width: 1px;
    outline-style: none;
    color: #008080;

    ::placeholder {
      color: #008080;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    #name {
      width: 116px;
      margin: 0 20px;
    }
  }

  .join-btn {
    width: 130px;
    height: 34px;
    color: white;
    background: #008080;
    box-shadow: 0 4px 10px 0 rgba(0, 128, 128, 0.5);
    margin: 20px 0 15px;
    font-size: 18px;
  }
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

const ModalBubbles = styled.div`
  .uper-bigBubble {
    width: 101px;
    height: 101px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.75);
    position: absolute;
    top: -65px;
    left: -25px;
  }

  .uper-smallBubble {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.85);
    position: absolute;
    top: -10px;
    left: -50px;
  }

  .bottom-bigBubble {
    width: 101px;
    height: 101px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.75);
    position: absolute;
    bottom: -20px;
    right: -65px;
  }

  .bottom-smallBubble {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.85);
    position: absolute;
    bottom: -50px;
    right: -10px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export { ModalContent, ModalWrapper, Background, ModalBubbles, Form, Button, CloseModalButton };
