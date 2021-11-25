import React from 'react';
import { Link } from 'react-router-dom';
import { WrapperHeader, WrapperNav } from './styled';

const Header = () => {
  return (
    <WrapperHeader>
      <WrapperNav className="container">
        <Link to="/" role="nav-link">
          Logo
        </Link>
        <Link to="/" role="nav-link">
          Champions
        </Link>
        <Link to="/Item" role="nav-link">
          Itens
        </Link>
      </WrapperNav>
    </WrapperHeader>
  );
};

export default Header;
