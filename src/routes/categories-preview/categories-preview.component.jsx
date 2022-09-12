import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesPreviewContainer } from "./categories-preview.styles";
import SpinnerCol from "../../components/spinner-col/spinner-col.component";

const CategoriesPreview = () => {
  const { categoriesMap, chargingCategories } = useContext(CategoriesContext);

  return chargingCategories ? (
    <SpinnerCol />
  ) : (
    <CategoriesPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
