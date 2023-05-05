import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'components/services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async values => {
    return await addContact(values);
  }
);

export const delContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContact(id);
  }
);
