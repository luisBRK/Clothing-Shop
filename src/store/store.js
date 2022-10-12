import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// root reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [process.env.NODE_ENV === 'development' && logger].filter(Boolean),
});

export const persistor = persistStore(store);
