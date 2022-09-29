import { CATEGORY_ACTION_TYPES } from './category.types';

const INITIAL_STATE = {
  categories: [],
  chargingCategories: false,
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case CATEGORY_ACTION_TYPES.SET_CHARGING_CATEGORIES:
      return {
        ...state,
        chargingCategories: payload,
      };

    default:
      return state;
  }
};
