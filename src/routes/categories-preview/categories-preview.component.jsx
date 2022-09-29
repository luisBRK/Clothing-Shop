import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectChargingCategories } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesPreviewContainer } from './categories-preview.styles';
import SpinnerCol from '../../components/spinner-col/spinner-col.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const chargingCategories = useSelector(selectChargingCategories);

  return chargingCategories ? (
    <SpinnerCol />
  ) : (
    <CategoriesPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
