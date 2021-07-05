import styled from "styled-components";

const FooterContainer = styled.footer`
  .footer-middle {
    background: #008080;
    padding-top: 2rem;
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid white;
  }

  ul li a {
    color: white;
    text-decoration: none;
  }

  .col {
    margin: 0 1.5rem;
  }

  .col a:hover {
    color: rgba(172, 172, 172);
  }

  .footer-container {
    margin: -1.8rem 0;
    displa: flex;
    flex-direction: row;

    @media (max-width: 800px) {
      margin: 0;
    }
  }

  .icon-container ul li a {
    margin: 0 0.3rem;
  }

  .logo-container {
    margin-top: -10rem;
    margin-right: 1rem;

    @media (max-width: 768px) {
      margin-top: -6rem;
      justify-content: center;
    }
  }

  .footer-bottom {
    displa: flex;
    flex-direction: row;
  }

  .dropdown-container {
    margin-top: -3.1rem;

    @media (max-width: 768px) {
      margin-top: 0rem;
      justify-content: center;
    }
  }

  #dropdown-basic-button {
    box-shadow: none;
    webkit-box-shadow: none;
  }

  #dropdown-basic-button::after {
    display: none;
  }

  .dropdown-item:focus {
    background-color: grey;
  }
`;

export default FooterContainer;
