import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import HeaderIcons from './header-icons/HeaderIcons';
import UsersForm from '../form/UsersForm';

const header:React.FC = () => {
  const [formCorrect, setFormCorrect] = useState<string>();
  useEffect(() => {
    console.log('Go-oo!');
    setFormCorrect('UserForm');
  }, []);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('MouseEvent');
    setFormCorrect('UserForm active');
  };

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
        <button onClick={clickHandler} >Войти</button>
      </div>
      <UsersForm className={ formCorrect === undefined ? '' : formCorrect} setClassName={setFormCorrect}/>
    </div>
  );
};

export default header;