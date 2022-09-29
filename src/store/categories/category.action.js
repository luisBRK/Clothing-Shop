import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

export const setCategories = (categoriesArray) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const setChargingCategories = (toggleCharge) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CHARGING_CATEGORIES, toggleCharge);
