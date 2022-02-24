import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import classes from './css/header.module.css';
import HeaderIcons from './header-icons/HeaderIcons';
import UsersForm from '../form/UsersForm';
// import './games/assets/enter_key.svg'

const Header:React.FC = () => {
  const [formCorrect, setFormCorrect] = useState<string>();
  useEffect(() => {
    setFormCorrect('UserForm');
  }, []);

  const clickHandler = () => {
    setFormCorrect('UserForm active');
  };

  return (
    <div className="header">
      <HeaderIcons />
      <div className="header-navigation">
        <div className="header-navigation__item">
          <Link to="/rslang/ebook">Учебник</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="/rslang/games">Игры</Link>
        </div>
        <div className="header-navigation__item">
          <Link to="/rslang/statistic">Статистика</Link>
        </div>

      </div>
      <div className="home-buttons">
        <button
          type="button"
          className={`btn btn-outline-danger ${classes.btnOutlineDangerMy}`}
          onClick={clickHandler}
        >
          Войти
        </button>
      </div>
      <UsersForm className={formCorrect === undefined ? '' : formCorrect} setClassName={setFormCorrect} />
    </div>
  );
};

export default Header;
