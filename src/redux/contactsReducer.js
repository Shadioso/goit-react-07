import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/api';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
  handleAddContact,
  handleDeleteContact,
} from './bulderFunc';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const cotactsReducer = createSlice({
  name: `contacts`,
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending);
    // .addMatcher(isAnyOf(...fn(`pending`)), handlePending)
    // .addMatcher(isAnyOf(...fn(`rejected`)), handleRejected);
  },
});
