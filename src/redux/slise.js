import { createSlice } from '@reduxjs/toolkit';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
  },
  reducers: {
    increment(state, action) {
      state.value.push(action.payload);
    },
    decrement(state, action) {
      state.value = state.value.filter(({ id }) => {
        return id !== action.payload;
      });
    },
  },
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
