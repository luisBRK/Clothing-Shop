import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleNavigateCategory = () => {
    navigate(`${title}`);
  };
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={handleNavigateCategory}>
          {title}
        </span>
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < 5)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
