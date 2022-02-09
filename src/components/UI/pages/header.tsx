import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import MyButton, { CardVariant } from '../buttons/MyButton';
import useFetchUser from '../../requests/useFetchUser';
import HeaderIcons from './header-icons/HeaderIcons';

const header:React.FC = () => {
  return (
    <div className='header'>
      <HeaderIcons />
      <div className='header-navigation'>

        <div className="header-navigation__item">
          <Link to="/">Main</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="authorize">Authorize</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="ebook">Ebook</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="games">Games</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="statistic">Statistic</Link>
        </div>

      </div>
      <div className='home-buttons'>
        <MyButton onClick={ useFetchUser } width='14vh' height='4vh' variant={CardVariant.rounded}>Войти</MyButton>
      </div>

    </div>
  );
};

export default header;