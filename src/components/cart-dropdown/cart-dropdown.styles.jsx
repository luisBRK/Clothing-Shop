import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 71px;
  right: 32px;
  width: 250px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 15px;

  box-shadow: 5px 10px 10px 0 rgba(155, 155, 155, 0.3);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  z-index: 5;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
