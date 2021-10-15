import { Header, Footer } from './Components';
import { Champion, ChampionList, Item, Error404 } from './Containers';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ResetCss } from './Global/ResetCss';
import theme from './Global/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <ChampionList />
          </Route>
          <Route path="/Champion">
            <ChampionList />
          </Route>
          <Route path="/Champion/:name">
            <Champion />
          </Route>
          <Route path="/Item">
            <Item />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
