import { configureStore } from '@reduxjs/toolkit';
import selectedOptionReducer from './optionsSlice';

const store = configureStore({
  reducer: {
    selectedOption: selectedOptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
