import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

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

export const registerUser = createAsyncThunk(
  "user/singup", async (credentials, thunkAPI) => {
    try {
      const user = await axios.post("/users/signup", credentials);
      return user.data;
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