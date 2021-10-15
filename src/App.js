import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

//Default CSS
import './App.css';

//Components and Containers
import { Header, Footer, Select } from './Components';
import { Champion, ChampionList, Item, Error404 } from './Containers';

//Global Settings
import { ResetCss } from './Global/ResetCss';
import theme from './Global/Theme';

//API
import { FILTER_VERSION } from './Services/API';

//Hooks
import useFetch from './Hooks/useFetch';

function App() {
  const { data, request } = useFetch();
  const [version, setVersion] = React.useState('11.19.1');

  React.useEffect(() => {
    const { url, options } = FILTER_VERSION();
    request(url, options);
  }, [request]);

  if (data)
    return (
      <ThemeProvider theme={theme}>
        <ResetCss />
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Select
                name={'Versão'}
                id={version}
                value={version}
                setValue={setVersion}
                data={data}
              />
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
  return null;
}

export default App;
