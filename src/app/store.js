import { configureStore } from '@reduxjs/toolkit';
import { authAPI } from '../services/authAPI.js';

import spinnerReducer from '../components/Spinner/spinnerSlice.js';
import regFormReducer from '../pages/Registration/Form/regFormSlice.js';

export const store = configureStore({
  reducer: {
    /* --- sync --- */
    loading: spinnerReducer,
    registration: regFormReducer,

    /* --- async -> rtk.query --- */
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware),
});
