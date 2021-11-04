import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components and Containers
import { Header, Footer, Select, Loading } from '../Components';
import { Champion, ChampionList, Item, Error404 } from '../Containers';

//API
import { FILTER_VERSION } from '../Services/API';

//Hooks
import useFetch from '../Hooks/useFetch';

const Main = () => {
  const { fetchData, request } = useFetch();
  const [version, setVersion] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const { url, options } = FILTER_VERSION();
    async function fetchChampionList() {
      setLoading(true);
      await fetch(url, options)
        .then((response) => response.json())
        .then((data) => setVersion(data[0]));
      setLoading(false);
    }
    fetchChampionList();
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
          {loading && <Loading />}
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
              <Champion version={version} />
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
