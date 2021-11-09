import React from 'react';
import { setVersionData } from '../../Redux/Modules/Version';
import { useSelector, useDispatch } from 'react-redux';

const Select = ({ name, id, value, setValue }) => {
  const { versions } = useSelector(({ leagueOfLegends }) => leagueOfLegends);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setVersionData(value));
  }, [dispatch, value]);

  function handleChange({ target }) {
    dispatch(setVersionData(target.value));
    setValue(target.value);
  }
  return (
    <form>
      <label htmlFor={id}>
        <b>{name}:</b>{' '}
      </label>
      <select id={id} value={value} onChange={handleChange}>
        {versions?.data.map((x, index) => (
          <option key={index} value={x}>
            {x}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
