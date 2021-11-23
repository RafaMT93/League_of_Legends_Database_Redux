import React from 'react';

const Select = () => {
  return (
    <form>
      <label htmlFor="01">
        <b>Select Input</b>
      </label>
      <select id="01" value="Initial">
        <option value="Initial">Initial Value </option>
      </select>
    </form>
  );
};

export default Select;
