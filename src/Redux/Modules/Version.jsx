import { createSlice } from '@reduxjs/toolkit';
import { FILTER_VERSION } from '../../Services/API';

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
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStated, fetchSuccess, fetchError } = slice.actions;
export const fetchVersion = (version) => async (dispatch) => {
  try {
    dispatch(fetchStated());
    const { url, options } = FILTER_VERSION();
    const response = await fetch(url, options);
    const data = await response.json();
    return dispatch(fetchSuccess(data));
  } catch (err) {
    return dispatch(fetchError(err.message));
  }
};

export default slice.reducer;
