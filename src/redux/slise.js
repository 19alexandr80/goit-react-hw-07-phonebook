import { createSlice } from '@reduxjs/toolkit';
import {
  fatchContact,
  addContact,
  deleteContact,
} from 'redux/contact/contactOp';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
      .addCase(fatchContact.pending, handlePending)
      .addCase(fatchContact.rejected, handleRejected)
      .addCase(fatchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(({ id }) => {
          return id !== action.meta.arg;
        });
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
