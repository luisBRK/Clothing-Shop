import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 95%;
  max-width: 60rem;
  margin: 0 auto;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CheckoutProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TotalCost = styled.div`
  width: 100%;
  font-size: 16px;
  text-align: right;

  span {
    font-weight: 500;
    font-size: 18px;
  }
`;
