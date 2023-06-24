import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = `https://649203962f2c7ee6c2c94cc2.mockapi.io/`;

export const fetchContacts = createAsyncThunk(
  `contacts/fetchAll`,
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${URL}contacts`);
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  `contacts/addContact`,
  async (contact, thunkAPI) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };
      const response = await fetch(`${URL}contacts`, options);
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const options = {
        method: 'DELETE',
      };
      const response = await fetch(`${URL}contacts/${id}`, options);
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
