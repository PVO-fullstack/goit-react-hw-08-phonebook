import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logInUser, logOutUser, refreshUser } from "./auth-operations";

const initialState = {
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
};

const userIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      userIn(state, action);
    },
    [logInUser.fulfilled]: (state, action) => {
      userIn(state, action);
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled]: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
})

// export default authSlice.reducer





// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
//   tagTypes: ['Users'],
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: credentials => ({
//         url: '/users/signup',
//         method: 'POST',
//         body: credentials,
//       }),
//       // transformResponse: (response) => response.data,
//       invalidatesTags: ['Users'],
//     }),
//   }),
// })

// export const { useRegisterMutation } = authApi

