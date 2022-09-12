import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  box-shadow: 0 5px 10px 0 rgba(155, 155, 155, 0.3);
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  padding: 5px;
`;
