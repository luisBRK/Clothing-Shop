import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 25px;
  height: 25px;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-10%);
  font-size: 10px;
  font-weight: 600;
`;
