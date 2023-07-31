import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhoneBook } from 'api/API';

const api = new PhoneBook();

export const fatchContact = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await api.getPhoneBook();
  return contacts;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async cont => {
    const contacts = await api.addUserPhoneBook(cont);
    return contacts.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contacts = await api.deleteUserPhoneBook(id);
    return contacts;
  }
);
