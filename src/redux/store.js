import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer';
import { cotactsReducer } from './contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: cotactsReducer.reducer,
    filter: filterReducer.reducer,
  },
});
