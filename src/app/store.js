import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authAPI } from '../services/authAPI.js';

import globalReducer from './slices/globalSlice.js';
import sessionReducer from './slices/sessionSlice.js';

const rootReducer = combineReducers({
  /* --- sync --- */
  global: globalReducer,
  session: sessionReducer,

  /* --- async -> rtk.query --- */
  [authAPI.reducerPath]: authAPI.reducer,
});

const persistConfig = {
  key: 'user',
  storage,
  whitelist: 'session',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(
    authAPI.middleware,
  ),
});
export const persistor = persistStore(store);
