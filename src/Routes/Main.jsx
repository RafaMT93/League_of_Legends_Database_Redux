import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components and Containers
import { Header, Footer, Select } from '../Components';
import { Champion, ChampionList, Item, Error404 } from '../Containers';

//API
import { FILTER_VERSION } from '../Services/API';

//Hooks
import useFetch from '../Hooks/useFetch';

const Main = () => {
  const { fetchData, request } = useFetch();
  const [version, setVersion] = React.useState();

  React.useEffect(() => {
    const { url, options } = FILTER_VERSION();
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setVersion(data[0]));
  }, []);

  React.useEffect(() => {
    const { url, options } = FILTER_VERSION();
    request(url, options);
  }, [request]);

  if (fetchData)
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Select
                name={'Versão'}
                id={version}
                value={version}
                setValue={setVersion}
                data={fetchData}
              />
              <ChampionList version={version} />
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
      </>
    );
  return null;
};

export default Main;
