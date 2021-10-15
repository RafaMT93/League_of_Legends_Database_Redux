import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'version',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStated(state) {
      state.loading = true;
    },
    fetchSuccess(state) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStated, fetchSuccess, fetchError } = slice.actions;
