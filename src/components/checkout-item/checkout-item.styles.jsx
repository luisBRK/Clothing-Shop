import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 15px;
  padding: 10px;
  position: relative;

  box-shadow: 5px 5px 10px 2px rgba(155, 155, 155, 0.3);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ImageItem = styled.img`
  grid-column: 1 / 3;

  height: 16rem;
  width: 100%;
  object-fit: contain;

  @media (min-width: 780px) {
    grid-column: 1 / 2;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const SpanDetail = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 10px;

  font-weight: 600;

  p {
    font-weight: 400;
  }
`;

export const ButtonActionItem = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid #e2e8f0;

  box-shadow: 0 3px 0 -1px #cbd5e1;

  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
`;

export const RemoveItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 2rem;
  transition: 0.3s;

  &:active {
    transform: rotateZ(50deg);
  }
`;
