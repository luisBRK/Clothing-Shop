import styled from "styled-components";

export const CartItemContainer = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  // margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 30%;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  gap: 4px;
`;

export const DetailName = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
