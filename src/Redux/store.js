import { configureStore } from '@reduxjs/toolkit';
import version from './Modules/Version';

const store = configureStore({ reducer: version });

export default store;
