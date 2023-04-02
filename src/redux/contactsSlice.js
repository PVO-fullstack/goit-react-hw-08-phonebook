import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";

const initialState = {
  contacts: [],
  isLoading: false,
  error: null
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // removeContact: (state, action) => {
    //   // const index = state.contacts.findIndex((item) => action.payload === item.id);
    //   // state.contacts.splice(index, 1);
    //   state.contacts = state.contacts.filter(item => action.payload !== item.id);
    // },
    // addContact: (state, action) => {

    // },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.push(...action.payload);
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      // state.contact = state.contacts.filter(item => action.payload.id !== item.id);
      const index = state.contacts.findIndex((item) => action.payload.id === item.id);
      state.contacts.splice(index, 1);
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  }
})

export const { removeContact, filterUpdate } = contactsSlice.actions

export default contactsSlice.reducer