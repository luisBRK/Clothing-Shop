import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const Title = styled.h2`
  font-weight: 600;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: capitalize;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #3b3b3b;
`;

export const CategoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
      transition: opacity 0.3s cubic-bezier(0.25, 0.5, 0.5, 1);
      border: 1px solid rgb(30, 31, 32);
    }
  }
`;
