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
      <div>
        <Link to="/">Main</Link>
        <Link to="authorize">Authorize</Link>
        <Link to="ebook">Ebook</Link>
        <Link to="games">Games</Link>
        <Link to="statistic">Statistic</Link>
      </div>
      <div className='home-buttons'>
        <MyButton onClick={ useFetchUser } width='14vh' height='4vh' variant={CardVariant.rounded}>Войти</MyButton>
      </div>

    </div>
  );
};

export default header;