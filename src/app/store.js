import { configureStore } from '@reduxjs/toolkit';
import spinnerReducer from '../components/Spinner/spinnerSlice.js';

export const store = configureStore({
  reducer: {
    spinner: spinnerReducer,
  },
});
