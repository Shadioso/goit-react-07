// import { fetchContacts, addContact, deleteContact } from 'services/api';

export const handlePending = state => {
  state.isLoading = `pending`;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = `fulfilled`;
  state.items = action.payload.sort((a, b) => a.name.localeCompare(b.name));
  state.error = ``;
};

export const handleRejected = (state, action) => {
  state.isLoading = `rejected`;
  state.error = action.error;
};
//
export const handleAddContact = (state, action) => {
  state.isLoading = `fulfilled`;
  state.items.push(action.payload);
};
//

export const handleDeleteContact = (state, action) => {
  state.isLoading = `fulfilled`;
  const contactToDelete = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(contactToDelete, 1);
};

// const customArr = [fetchContacts, addContact, deleteContact];

// export const fn = status => {
//   customArr.map(el => {
//     console.log(customArr);

//     return el[status];
//   });
// };
