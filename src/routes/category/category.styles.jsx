import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 95%;
  max-width: 120rem;
  margin: 2rem auto;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  text-transform: capitalize;
  text-align: center;
`;

export const ProductsGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 40px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 780px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1048px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
