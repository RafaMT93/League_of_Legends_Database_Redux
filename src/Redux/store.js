import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from './Middleware/logger';
import version from './Modules/Version';

const reducer = combineReducers({ version });
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({ reducer, middleware });

export default store;
