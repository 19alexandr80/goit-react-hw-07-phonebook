import { createSlice } from '@reduxjs/toolkit';
import {
  fatchContact,
  addContact,
  deleteContact,
} from 'redux/contact/contactOp';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(({ id }) => {
          return id !== action.meta.arg;
        });
      })
      .addCase(fatchContact.fulfilled, (state, action) => {
        state.items = action.payload;
      }),
});
export const { increment, decrement } = contactsSlise.actions;

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    incr(state, action) {
      return action;
    },
  },
});
export const { incr } = filterSlise.actions;
