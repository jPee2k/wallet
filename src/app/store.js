import { configureStore } from '@reduxjs/toolkit';
import { authAPI } from '../services/authAPI.js';

import spinnerReducer from '../components/Spinner/spinnerSlice.js';
import formReducer from '../pages/Auth/formSlice.js';

export const store = configureStore({
  reducer: {
    /* --- sync --- */
    loading: spinnerReducer,
    auth: formReducer,

    /* --- async -> rtk.query --- */
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware),
});
