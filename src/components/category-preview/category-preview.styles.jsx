import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  width: 95%;
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled(Link)`
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PreviewCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 50px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 780px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1048px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
