import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchChampion } from '../../Redux/Modules/Champion';

const Champion = ({ version }) => {
  const params = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchChampion(version, params.name));
  }, [version, params.name, dispatch]);

  return <div></div>;
};

export default Champion;
