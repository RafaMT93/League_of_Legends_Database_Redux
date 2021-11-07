import { createSlice } from '@reduxjs/toolkit';
import { SEARCH_IN_VERSION, SEARCH_CHAMPION } from '../../Services/API';

const slice = createSlice({
  name: 'version',
  initialState: {
    lastVersion: null,
    loading: false,
    data: null,
    error: null,
    version: null,
    champion: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.version = action.payload.version;
      state.champion = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      state.version = null;
      state.champion = null;
    },
    fetchChampionStarted(state, action) {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.version = action.payload.version;
      state.champion = action.payload;
    },
    fetchChampionError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      state.version = null;
      state.champion = null;
    },
  },
});

const {
  fetchStarted,
  fetchSuccess,
  fetchError,
  fetchChampionStarted,
  fetchChampionError,
} = slice.actions;

export const fetchVersion = (version) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const { url, options } = SEARCH_IN_VERSION(version);
    let response = await fetch(url, options);
    let data = await response.json();
    return dispatch(fetchSuccess(data));
  } catch (err) {
    dispatch(fetchError(err.message));
  }
};

export const fetchChampion = (version, champion) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const { url, options } = SEARCH_CHAMPION(version, champion);
    let response = await fetch(url, options);
    let data = await response.json();
    return dispatch(fetchChampionStarted(data));
  } catch (err) {
    dispatch(fetchChampionError(err.message));
  }
};

export default slice.reducer;
