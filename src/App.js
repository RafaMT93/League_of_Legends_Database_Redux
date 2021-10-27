import { ThemeProvider } from 'styled-components';
import Main from './Routes/Main';

//Default CSS
import './App.css';

//Global Settings
import { ResetCss } from './Global/ResetCss';
import theme from './Global/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Main />
    </ThemeProvider>
  );
}

export default App;
