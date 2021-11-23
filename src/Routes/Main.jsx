import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Champion, ChampionList, Item, Error404 } from '../Containers';
import { Header, Footer } from '../Components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <ChampionList />
        </Route>
        <Route path="/Champion/:slug">
          <Champion />
        </Route>
        <Route path="/Item">
          <Item />
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
