import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import SpinnerCol from "../../components/spinner-col/spinner-col.component";

import { CategoriesContext } from "../../context/categories.context";

import "./category.styles.scss";

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
    <div className="category-container">
      {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Category;
