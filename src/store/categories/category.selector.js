import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => {
  return categoriesSlice.categories;
});

export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
  return categories.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title.toLowerCase()] = items;

    return accumulator;
  }, {});
});

export const selectChargingCategories = createSelector([selectCategoryReducer], (categories) => {
  return categories.chargingCategories;
});
