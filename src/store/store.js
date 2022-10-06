import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
// import logger from 'redux-logger';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  // console.log('MIDDLEWARE | Store => | ', store);
  console.log('MIDDLEWARE | Action Type: ', action.type);
  console.log('MIDDLEWARE | Payload: ', action.payload);
  console.log('MIDDLEWARE | Current State: ', store.getState());

  next(action);

  console.log('MIDDLEWARE | Next state: ', store.getState());
};

// root reducer
export const store = configureStore({ reducer: rootReducer, middleware: [loggerMiddleware] });
