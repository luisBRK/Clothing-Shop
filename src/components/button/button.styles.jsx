import styled from "styled-components";

export const BaseButton = styled.button`
  width: 100%;

  height: 2.5rem;
  font-size: 14px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  cursor: pointer;

  transition: 0.2s;
  position: relative;

  @media (min-width: 780px) {
    max-width: 10rem;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -10;
    width: 0;
    height: 0;
    top: 5px;
    left: 5px;
    background-color: black;
    transition: 0.18s;
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &::before {
    background-color: #4285f4;
  }

  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &::before {
    background-color: #c1c1c1;
  }

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
