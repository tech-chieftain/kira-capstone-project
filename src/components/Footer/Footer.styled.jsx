import styled from "styled-components";

const FooterContainer = styled.footer`
  .footer-middle {
    background: #008080;
    padding-top: 3rem;
    color: white;
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

  ul li a:hover {
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

    @media (max-width: 800px) {
      margin-top: -6rem;
      justify-content: center;
    }
  }
`;

export default FooterContainer;
