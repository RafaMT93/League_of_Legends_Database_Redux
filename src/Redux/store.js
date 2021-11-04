import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from './Middleware/logger';
import version from './Modules/Version';
import champion from './Modules/Champion';

const reducer = combineReducers({ version, champion });
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({ reducer, middleware });

export default store;
