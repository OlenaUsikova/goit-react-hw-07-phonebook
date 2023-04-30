import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  contacts: [],
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null, 
  },
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers:{
    [fetchContacts.pending](state) {
        state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contacts =[...action.payload];
    },
    [fetchContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
}
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


export const { addContacts, deleteContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
