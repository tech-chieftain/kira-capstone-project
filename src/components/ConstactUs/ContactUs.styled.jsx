import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  font-size: 20px;
  color: #008080;
  background: rgba(193, 193, 174, 0.09);

  h1 {
    font-size: 4rem;
    margin: 2rem 0;
  }

  .form {
    width: 55%;

    @media (max-width: 720px) {
      width: 75%;
    }
  }

  .label {
    height: 50px;
    border-radius: 15px;

    &::placeholder {
      font-size: 18px;
    }
  }

  .message {
    height: 19rem;
    border-radius: 15px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export default Container;
