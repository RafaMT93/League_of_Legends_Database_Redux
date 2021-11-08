import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Champion, ChampionList, Error404 } from '../Containers';
import { Header, Footer, Loading } from '../Components';

import { useSelector } from 'react-redux';

function App() {
  const { loading } = useSelector(({ leagueOfLegends }) => leagueOfLegends);
  const [version, setVersion] = React.useState('11.22.1');

  if (version)
    return (
      <BrowserRouter>
        <Header />
        {loading && <Loading />}
        <Routes>
          <Route path="/">
            <ChampionList version={version} setValue={setVersion} />
          </Route>
          <Route path="/Champion/:slug">
            <Champion version={version} />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );

  return null;
}

export default App;
