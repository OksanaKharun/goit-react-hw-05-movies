import React from 'react';


const SearchForm = ({ handleSubmit, searchQuery, setSearchQuery }) => {
  return (
    <form className='search-style' onSubmit={handleSubmit}>
      <input className='input-style'
        type="text"
        placeholder="Enter your query here, please"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      <button className='input-button' type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;