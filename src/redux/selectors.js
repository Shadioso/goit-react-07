import { createSelector } from '@reduxjs/toolkit';
export const selectContactList = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectFilteredList = createSelector(
  [selectFilter, selectContactList],
  (filter, contacts) => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  }
);
