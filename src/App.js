import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import { ResetCss } from './Global/ResetCss';
import theme from './Global/Theme';
import Main from './Routes/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Main />
    </ThemeProvider>
  );
}

export default App;
