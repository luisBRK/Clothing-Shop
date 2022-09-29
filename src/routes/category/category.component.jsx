import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap, selectChargingCategories } from '../../store/categories/category.selector';

import { CategoryContainer, Title, ProductsGallery } from './category.styles';

import ProductCard from '../../components/product-card/product-card.component';
import SpinnerCol from '../../components/spinner-col/spinner-col.component';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const chargingCategories = useSelector(selectChargingCategories);

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
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </ProductsGallery>
    </CategoryContainer>
  );
};

export default Category;
