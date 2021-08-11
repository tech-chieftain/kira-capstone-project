import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #008080;
  padding-top: 2rem;
  color: white;
  width: 100%;
`;

export const MainContainer = styled.div`
  width: 82%;
  margin: 0 auto;

  ul li a {
    color: white;
    text-decoration: none;
    &:hover {
      color: rgba(172, 172, 172);
    }
  }

  .social-media-section {
    margin: -1.8rem 0;
    ul li a {
      margin: 0 0.3rem;
      color: white;
    }
  }

  .logo-container {
    margin-top: -10rem;
    margin-right: 1rem;
  }

  .dropdown-container {
    margin-top: -3.1rem;
  }

  .language {
    font-size: 20px;
  }

  @media (max-width: 1200px) {
    .social-media-section {
      margin: 0;
    }
    .logo-container {
      margin-top: -6rem;
      justify-content: center;
    }
    .dropdown-container {
      margin-top: 0rem;
      justify-content: center;
    }
  }
`;
