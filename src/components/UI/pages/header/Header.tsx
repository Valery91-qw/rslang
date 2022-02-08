import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="authorize">Authorize</Link>
      <Link to="ebook">Ebook</Link>
      <Link to="games">Games</Link>
      <Link to="statistic">Statistic</Link>
    </div>
  );
};

export default Header;
