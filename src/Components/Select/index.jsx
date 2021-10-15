import React from 'react';

const Select = ({ name, id, value, setValue, data }) => {
  return (
    <form>
      <label htmlFor={id}>
        <b>{name}:</b>{' '}
      </label>
      <select
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        {data.map((x, index) => (
          <option key={index} value={x}>
            {x}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
