import React from 'react';
import classes from './FrameAboutApp.module.css';
import imgIgor from '../games/assets/igor.jpg';

const FrameIgor:React.FC = () => {
  return (
    <div className={classes.AppFrame}>
      <h1>Разработчики: Игорь</h1>
      <img src={imgIgor} className='img-valera'/>
      <h6>
        Молодой, начинайщий программист из клуба "молодых пенсионеров".
        Неглядя на свой возраст, все ещё подает надежды.
      </h6>
      <p>
        Сверстал главную страницу, разработал и сверстал Учебник, Словарь и страничку Статистики.
        Освоил в части касающейся разработки данного проекта backend, React, Redux, Router, axios.
        Подключил и использовал CSS Bootstrap.
        Вел непримиримую борьбу с eslint.
      </p>
      <p>Имеет четкое понимание, что под лежачего FrontEder-a конъяк не потечет. :-)</p>
    </div>
  );
};

export default FrameIgor;