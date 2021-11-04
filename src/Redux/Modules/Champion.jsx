import { createSlice } from '@reduxjs/toolkit';
import { SEARCH_CHAMPION } from '../../Services/API';

const slice = createSlice({
  name: 'champion',
  initialState: {
    loading: false,
    data: null,
    error: null,
    name: null,
  },
  reducers: {
    fetchChampionStarted(state) {
      state.loading = true;
    },
    fetchChampionSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.name = action.payload.name;
    },
    fetchChampionError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      state.name = null;
    },
  },
});

const { fetchChampionStarted, fetchChampionSuccess, fetchChampionError } =
  slice.actions;

export const fetchChampion = (version, name) => (dispatch) => {
  try {
    dispatch(fetchChampionStarted());
    const { url, options } = SEARCH_CHAMPION(version, name);
    const response = fetch(url, options);
    const data = response.json();
    return dispatch(fetchChampionSuccess(data));
  } catch (err) {
    return dispatch(fetchChampionError(err.message));
  }
};
export default slice.reducer;
