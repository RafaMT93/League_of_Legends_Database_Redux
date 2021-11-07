import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ResetCss } from './Global/ResetCss';
import theme from './Global/Theme';

import { Champion, ChampionList, Error404 } from './Containers';
import { Header, Footer, Loading } from './Components';

import { useSelector } from 'react-redux';
import { FILTER_VERSION } from './Services/API';

function App() {
  const { loading } = useSelector((state) => state.version);
  const [version, setVersion] = React.useState(null);

  React.useEffect(() => {
    const { url, options } = FILTER_VERSION();
    async function fetchChampionList() {
      let response;
      let json;
      try {
        response = await fetch(url, options);
        json = await response.json();
      } catch (err) {
        json = null;
      } finally {
        setVersion(json[0]);
        return { json, response };
      }
    }
    fetchChampionList();
  }, [version]);

  if (version)
    return (
      <ThemeProvider theme={theme}>
        <ResetCss />
        <BrowserRouter>
          <Header />
          {loading && <Loading />}
          <Routes>
            <Route path="/" element={<ChampionList version={version} />} />
            <Route
              path="/Champion/:slug"
              element={<Champion version={version} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    );

  return null;
}

export default App;
