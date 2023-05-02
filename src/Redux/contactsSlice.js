import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload
        );
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.contacts.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      );
  },
});
//   reducers: {
//     addContacts: (state, { payload }) => {
//       state.contacts.push(payload);
//     },

//     deleteContact: (state, { payload }) => {
//       state.contacts = state.contacts.filter(contact => contact.id !== payload);
//     },
//     setFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
// });

export const { addContacts, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
