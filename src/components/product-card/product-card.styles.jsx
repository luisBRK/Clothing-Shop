import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    position: absolute;
    top: 50%;
    display: none;
    width: 80%;
    opacity: 0.7;
  }

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      opacity: 1;
      display: block;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 17px;
`;

export const Price = styled.p`
  font-size: 17px;
  font-weight: 500;
`;
