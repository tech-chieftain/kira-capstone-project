import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(193, 193, 174, 0.09);
  padding-bottom: 3rem;
`;

export const MainContainer = styled.div`
  width: 60rem;
  heigh: 100%;
  padding: 4rem 0 6rem;

  .card {
    width: 100%;
    heigh: 100%;
    border-radius: 10px;
    padding: 1.5rem 1rem;
    background: white;

    .header {
      margin: -20px 0 0 -20px;
    }
  }

  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "upload image";
    display: inline-block;
    background: #008080;
    opacity: 0.9;
    color: white;
    border-radius: 4px;
    padding: 8px 20px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
    margin: 0px -90px 0 20px;
  }
  .custom-file-input:hover::before {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    padding: 1rem 0;
    width: 28rem;

    .card {
      padding: 1rem 0;

      .header {
        margin: -10px 0 0 0;
      }
    }
  }
`;
