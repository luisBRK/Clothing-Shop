import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 7rem;

  max-width: 120rem;
  width: 95%;
  // margin: 0 auto;

  margin: 2rem auto;

  @media (min-width: 780px) {
    gap: 0;
    flex-direction: row;
  }
`;
