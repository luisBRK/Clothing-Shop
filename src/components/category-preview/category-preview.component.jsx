import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, Title, PreviewCategory } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>

      <PreviewCategory>
        {products
          .filter((_, index) => index < 5)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewCategory>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
