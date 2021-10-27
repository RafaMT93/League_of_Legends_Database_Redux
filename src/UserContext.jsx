import React from 'react';
import { FILTER_VERSION } from './Services/API';

export const UserContext = React.createContext();

export const VersionStorage = ({ children }) => {
  const [fetchData, setFetchData] = React.useState(null);

  React.useEffect(() => {
    async function fetchVersion() {
      const { url, options } = FILTER_VERSION();
      let response = await fetch(url, options);
      let json = await response.json();
      setFetchData(json);
      return { response, json };
    }
    fetchVersion();
  }, []);

  return (
    <UserContext.Provider value={{ fetchData }}>
      {children}
    </UserContext.Provider>
  );
};
