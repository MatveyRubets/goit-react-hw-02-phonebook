import React from 'react';

const Filter = ({ filter, search }) => {
  return (
    <div>
      <p>Search by Name</p>
      <input type="text" name="filter" value={filter} onChange={search} />
    </div>
  );
};

export default Filter;
