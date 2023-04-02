import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://64256c4a9e0a30d92b3199d6.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const contacts = await axios.get("/contacts");
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact", async (contact, thunkAPI) => {
    try {
      const contacts = await axios.post("/contacts", contact);
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact", async (id, thunkAPI) => {
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)