import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
//import logger from './Middleware/logger';
import leagueOfLegends from './Modules/Version';

const reducer = combineReducers({ leagueOfLegends });
const middleware = [...getDefaultMiddleware()];
const store = configureStore({ reducer, middleware });

export default store;
