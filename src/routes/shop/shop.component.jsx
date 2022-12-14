import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { setCategories, setChargingCategories } from '../../store/categories/category.action';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(setChargingCategories(true));

      const categoriesArray = await getCategoriesAndDocuments();

      dispatch(setCategories(categoriesArray));

      dispatch(setChargingCategories(false));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route
        index
        element={<CategoriesPreview />}
      />
      <Route
        path=':category'
        element={<Category />}
      />
    </Routes>
  );
};

export default Shop;
