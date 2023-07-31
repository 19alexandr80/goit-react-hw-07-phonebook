import { configureStore } from '@reduxjs/toolkit';
import { contactsSlise, filterSlise } from 'redux/slise';

export const store = configureStore({
  reducer: {
    contacts: contactsSlise.reducer,
    filter: filterSlise.reducer,
  },
});
