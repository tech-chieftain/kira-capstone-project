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
    margin-top: -2.5rem;
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
`;

export const SearchForm = styled(Form)`
  position: relative;
  width: 517px;
  height: 60px;

  .input {
    border-radius: 0;
    border: none;
    box-shadow: none;
    webkit-box-shadow: none;
    font-size: 22px;

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
`;

export const Btn = styled(Button)`
  border: none;
  padding: 0 30px;
  font-size: 20px;
  background: rgba(128, 191, 191, 1);
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;
