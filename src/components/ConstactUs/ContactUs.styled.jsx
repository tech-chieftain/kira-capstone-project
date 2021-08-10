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

  @media (max-width: 1200px) {
    padding: 1rem;

    .form {
      width: 75%;
    }

    h1 {
      font-size: 3rem;
      margin: 1rem 0;
    }

    .label {
      &::placeholder {
        font-size: 15px;
      }
    }

    .message {
      height: 12rem;

      &::placeholder {
        font-size: 15px;
      }
    }
  }
`;

export default Container;
