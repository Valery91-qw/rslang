import React from 'react';
import './header.css';
import MyButton, { CardVariant } from '../buttons/MyButton';
import useFetchUser from '../../requests/useFetchUser';

const header = () => {
  return (
    <div className='header'>
      <div className="home-icons">
        <img src='https://raw.githubusercontent.com/igor2000xp/rslang-asset/5ac09846807fdebe975d6de4fbf884437e2ea0c5/img/main/svg/Vector.svg'/>
        <img src='https://raw.githubusercontent.com/igor2000xp/rslang-asset/5ac09846807fdebe975d6de4fbf884437e2ea0c5/img/main/svg/Home.svg'/>
      </div>
      <div className='home-buttons'>
        <MyButton onClick={ useFetchUser } width='14vh' height='4vh' variant={CardVariant.rounded}>Войти</MyButton>
      </div>

    </div>
  );
};

export default header;