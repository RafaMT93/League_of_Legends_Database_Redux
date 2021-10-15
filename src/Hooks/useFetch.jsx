import React from 'react';

const useFetch = () => {
  const [fetchData, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async function (url, options) {
    let response;
    let json;

    try {
      setError(null, options);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { json, response };
    }
  }, []);

  return { fetchData, loading, error, request };
};

export default useFetch;
