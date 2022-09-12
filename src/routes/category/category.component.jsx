import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";

import { CategoryContainer, Title, ProductsGallery } from "./category.styles";

import ProductCard from "../../components/product-card/product-card.component";
import SpinnerCol from "../../components/spinner-col/spinner-col.component";

const Category = () => {
  const { categoriesMap, chargingCategories } = useContext(CategoriesContext);
  const { category } = useParams();

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return chargingCategories ? (
    <SpinnerCol />
  ) : (
    <CategoryContainer>
      <Title>{category}</Title>

      <ProductsGallery>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </ProductsGallery>
    </CategoryContainer>
  );
};

export default Category;
