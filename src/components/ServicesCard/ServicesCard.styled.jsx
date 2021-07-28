import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Card, Image } from "react-bootstrap";

export const CardBody = styled(Card.Body)`
  margin: -5px 0 -10px;

  .username {
    margin-left: -6.5rem;
  }
`;

export const Img = styled(Image)`
  width: 28px;
  height: 28px;
  overflow: hidden;
`;

export const StarIcon = styled(FaStar)`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;
