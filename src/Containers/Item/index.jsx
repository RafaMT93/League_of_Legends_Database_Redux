import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemList } from '../../Redux/Modules/Version';

const Item = ({ version }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchItemList(version));
  }, [dispatch, version]);

  const { items } = useSelector(({ leagueOfLegends }) => leagueOfLegends);

  React.useEffect(() => {
    console.log(items);
  }, [items]);

  return <div>Itens</div>;
};

export default Item;
