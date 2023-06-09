import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
}

export const registerUser = createAsyncThunk(
  "user/singup", async (credentials, thunkAPI) => {
    try {
      const user = await axios.post("/users/signup", credentials);
      token.set(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const logInUser = createAsyncThunk(
  "user/login", async (credentials, thunkAPI) => {
    try {
      const user = await axios.post("/users/login", credentials);
      token.set(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const refreshUser = createAsyncThunk(
  "user/refresh", async (_, thunkAPI) => {

    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    try {
      const user = await axios.get("/users/current");
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const logOutUser = createAsyncThunk(
  "user/logout", async (credentials, thunkAPI) => {
    try {
      const user = await axios.post("/users/logout", credentials);
      token.unset(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)