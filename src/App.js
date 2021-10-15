import './App.css';

import { ThemeProvider } from 'styled-components';
import { ResetCss } from './Global/ResetCss';
import theme from './Global/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
    </ThemeProvider>
  );
}

export default App;
