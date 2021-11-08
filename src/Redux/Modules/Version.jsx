import { createSlice } from '@reduxjs/toolkit';
import {
  FILTER_VERSION,
  SEARCH_IN_VERSION,
  SEARCH_CHAMPION,
} from '../../Services/API';

const slice = createSlice({
  name: 'leagueOfLegends',
  initialState: {
    loading: false,
    version: null,
    list: {
      data: null,
      error: null,
    },
    champions: {
      data: null,
      error: null,
    },
    versions: {
      data: null,
      error: null,
    },
  },
  reducers: {
    setVersion(state, action) {
      state.version = action.payload;
    },
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccessVersion(state, action) {
      state.loading = false;
      state.versions.data = action.payload;
      state.versions.error = null;
    },
    fetchErrorVersions(state, action) {
      state.loading = false;
      state.versions.data = null;
      state.versions.error = action.payload;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.list.data = action.payload;
      state.list.error = null;
      state.champions.data = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.list.data = null;
      state.list.error = action.payload;
    },
    fetchChampionStarted(state, action) {
      state.loading = false;
      state.champions.data = action.payload;
      state.champions.error = null;
    },
    fetchChampionError(state, action) {
      state.loading = false;
      state.champions.data = null;
      state.champions.error = action.payload;
    },
  },
});

const {
  setVersion,
  fetchSuccessVersion,
  fetchErrorVersions,
  fetchStarted,
  fetchSuccess,
  fetchError,
  fetchChampionStarted,
  fetchChampionError,
} = slice.actions;

export const fetchVersionData = () => async (dispatch) => {
  let response;
  let data;
  try {
    const { url, options } = FILTER_VERSION();
    response = await fetch(url, options);
    data = await response.json();
  } catch (err) {
    dispatch(fetchErrorVersions(err.message));
  } finally {
    return dispatch(fetchSuccessVersion(data));
  }
};

export const setVersionData = (version) => (dispatch) => {
  dispatch(setVersion(version));
};

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
