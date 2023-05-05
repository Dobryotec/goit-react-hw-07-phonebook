import { fetchContacts, addContact, deleteContact } from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      return await fetchContacts();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (values, thunkApi) => {
    try {
      return await addContact(values);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      return await deleteContact(id);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
