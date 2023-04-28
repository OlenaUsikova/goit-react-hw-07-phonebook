import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  initialState: {
    contacts: [],
    filter: '',
  },
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { addContacts, deleteContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
