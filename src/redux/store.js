import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authAPI } from '../services/authAPI.js';
import { userAPI } from '../services/userAPI.js';
import { transactionCategoryApi } from '../services/transactionCategoryAPI.js';
import { transactionsApi } from '../services/transactionsAPI.js';

import globalReducer from './slices/globalSlice.js';
import sessionReducer from './slices/sessionSlice.js';
import financeReducer from './slices/financeSlice.js';

const rootReducer = combineReducers({
  /* --- sync --- */
  global: globalReducer,
  session: sessionReducer,
  finance: financeReducer,

  /* --- async -> rtk.query --- */
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [transactionCategoryApi.reducerPath]: transactionCategoryApi.reducer,
  [transactionsApi.reducerPath]: transactionsApi.reducer,
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
    userAPI.middleware,
    transactionCategoryApi.middleware,
    transactionsApi.middleware,
  ),
});
export const persistor = persistStore(store);
