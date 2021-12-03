import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Champion, ChampionList, Item, Error404 } from '../Containers';
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
          <Route
            path="/"
            element={<ChampionList version={version} setValue={setVersion} />}
          />
          <Route
            path="/Champion/:slug"
            element={<Champion version={version} />}
          />
          <Route path="/Item" element={<Item version={version} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );

  return null;
}

export default App;
