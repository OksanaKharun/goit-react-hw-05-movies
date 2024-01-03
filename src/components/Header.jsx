import React from 'react'
import { NavLink} from 'react-router-dom';

const Header = () => {
  return (
     <>
      <nav className='header' >
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    
    </>
  );
};

export default Header;