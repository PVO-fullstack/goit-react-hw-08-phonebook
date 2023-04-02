import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtredByName: (state, action) => {
      state.filter = action.payload;
    }
  }
})

export const { filtredByName } = filterSlice.actions

export default filterSlice.reducer