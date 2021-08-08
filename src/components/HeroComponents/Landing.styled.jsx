import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const Background = styled.div`
  background: #008080;
  width: 100%;
  height: 35rem;
  display: flex;
  align-items: end;
  justify-content: flex-end;

  .img {
    margin-top: -2.4rem;
  }

  @media (max-width: 1200px) {
    height: 20rem;
    justify-content: center;
    align-items: center;

    .img {
      display: none;
    }
  }
`;

export const Container = styled.div`
  margin: -20rem -19rem 0 0;

  .freelance {
    color: white;
    font-size: 45px;
    font-style: italic;
    font-weight: lighter;
    width: 40rem;

    span {
      font-weight: bolder;
    }
  }

  @media (max-width: 1200px) {
    margin: 0 auto;

    .freelance {
      font-size: 35px;
      width: 30rem;
    }
  }
`;

export const SearchForm = styled(Form)`
  border-radius: 0 10px 10px 0;
  position: relative;
  width: 517px;
  height: 60px;

  .input {
    border-radius: 0;
    border: none;
    box-shadow: none;
    webkit-box-shadow: none;
    font-size: 20px;

    &:focus {
      color: grey;
    }

    ::placeholder {
      font-size: 18px;
    }
  }

  #basic-addon {
    background: white;
    border-radius: 10px 0 0 10px;
    border: none;
    color: grey;
    margin-right: -5px;
  }

  @media (max-width: 1200px) {
    width: 390px;
    height: 50px;
  }
`;

export const Btn = styled(Button)`
  border: none;
  padding: 0 30px;
  font-size: 20px;
  background: rgba(128, 191, 191, 1);
  border-radius: 0 10px 10px 0;
  cursor: pointer;

  @media (max-width: 1200px) {
    padding: 0 15px;
  }
`;
