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
      let response;
      let json;
      try {
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
      } catch (err) {
        json = null;
      } finally {
        setVersion(json[0]);
        setLoading(false);
        return { json, response };
      }
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
          {version && console.log(version)}
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
              <Select
                name={'Versão'}
                id={version}
                value={version}
                setValue={setVersion}
                data={fetchData}
              />
              <ChampionList version={version} />
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
